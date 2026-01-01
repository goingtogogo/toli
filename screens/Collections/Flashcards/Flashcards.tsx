import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import FlipCard from 'react-native-flip-card'
import { useSelector } from 'react-redux'

import type { Card } from '@/store/slice/flashcards/content'

import { StackParamList } from '@/App'
import { ActionButton } from '@/components/ActionButton/ActionButton'
import { ProgressView } from '@/components/ProgressView/ProgressView'
import { Theme } from '@/store/slice/theme'
import { State } from '@/store/store'
import { Theming, theming } from '@/utils/theme'

type Props = NativeStackScreenProps<StackParamList, 'flashcards'>

let swiper: Swiper<Card> | null

export function Flashcards(props: Props) {
  const { t, i18n } = useTranslation()
  const { items: flashcards } = useSelector((state: State) => state.flashcards)
  const mode = useSelector((state: State) => state.theme.mode)
  const theme = theming(mode)
  const styles = styling(theme, mode)

  const [leftCount, setLeft] = useState(0)
  const [rightCount, setRight] = useState(0)
  const [swiped, setSwiped] = useState(0)
  const {
    route: {
      params: { key, name },
    },
    navigation,
  } = props
  const { cards } = useMemo(() => flashcards[key], [key])
  const progress = useMemo(
    () => Math.round((swiped / cards.length) * 10) / 10,
    [swiped, cards.length],
  )

  useEffect(() => {
    navigation.setOptions({ headerTitle: `${swiped} / ${cards.length}` })

    if (swiped === cards.length) {
      navigation.navigate('navigation', {
        name,
        key,
        screen: 'flashcards',
        swipedLeft: leftCount,
        swipedRight: rightCount,
      })
      setSwiped(0)
      setLeft(0)
      setRight(0)
    }
  }, [swiped])

  const onSwipedLeft = useCallback(() => {
    setLeft(leftCount + 1)
  }, [leftCount])

  const onSwipedRight = useCallback(() => {
    setRight(rightCount + 1)
  }, [rightCount])

  const onSwiped = useCallback(() => {
    setSwiped(swiped + 1)
  }, [swiped])

  const overlayLabels = {
    left: {
      title: t('flashcards.stillLearning'),
      style: {
        label: {
          fontSize: 20,
          fontFamily: 'medium',
          color: theme.colors.secondaryText,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: -30,
        },
      },
    },
    right: {
      title: t('flashcards.know'),
      style: {
        label: {
          fontSize: 20,
          fontFamily: 'medium',
          color: theme.colors.secondaryText,
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: 30,
        },
      },
    },
  }

  return (
    <View style={styles.container}>
      <ProgressView progress={progress} />
      <View>
        <View style={[styles.leftCount, styles.count]}>
          <Text style={styles.countText}>{leftCount}</Text>
        </View>
        <View style={[styles.rightCount, styles.count]}>
          <Text style={styles.countText}>{rightCount}</Text>
        </View>
        <View style={styles.arrows}>
          <ActionButton
            name="arrow-left"
            onPress={() => {
              setTimeout(() => swiper?.swipeLeft(), 0)
            }}
          />
          <View style={styles.hint}>
            <Text style={styles.hintText}>{t('flashcards.hint1')}</Text>
            <Text style={styles.hintText}>{t('flashcards.hint2')}</Text>
          </View>
          <ActionButton
            name="arrow-right"
            onPress={() => {
              setTimeout(() => swiper?.swipeRight(), 0)
            }}
          />
        </View>
      </View>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={(swiperRef) => (swiper = swiperRef)}
          cards={cards}
          renderCard={(card) =>
            // @ts-expect-error somehow it expects flex: 1 in all objects, todo: fix this
            Card({ card, styles, language: i18n.language })
          }
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          onSwiped={onSwiped}
          cardIndex={0}
          verticalSwipe={false}
          showSecondCard={true}
          stackSize={3}
          stackScale={3}
          stackSeparation={10}
          overlayLabels={overlayLabels}
          backgroundColor={theme.colors.background}
          animateOverlayLabelsOpacity
          cardHorizontalMargin={36}
          cardStyle={styles.card}
          infinite={true}
        ></Swiper>
      </View>
    </View>
  )
}

const Card = ({
  card,
  styles,
  language,
}: {
  card: Card
  styles: {
    [key: string]: StyleProp<ViewStyle>
  }
  language: string
}) => {
  const displayText = card[language as keyof typeof card] || card.en

  return (
    <FlipCard
      style={styles.flipCard}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >
      <View>
        <Text style={styles.text}>{displayText}</Text>
      </View>
      <View style={styles.reversedSide}>
        <Text style={styles.text}>{card.buryat}</Text>
      </View>
    </FlipCard>
  )
}

const styling = (theme: Theming, mode: Theme) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
      backgroundColor: theme.colors.background,
      zIndex: 9999,
    },
    swiperContainer: {
      zIndex: 9999,
    },
    card: {
      maxHeight: 400,
      borderRadius: 20,
      backgroundColor: theme.colors.background,
    },
    flipCard: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 20,
      paddingHorizontal: theme.spacing.s,
      ...theme.shadows.basicShadow,
      ...(mode === 'dark' && { shadowColor: theme.colors.secondaryText }),
      backgroundColor: theme.colors.background,
    },
    reversedSide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -12,
      marginRight: -12,
      borderRadius: 20,
      textAlign: 'center',
      backgroundColor: theme.colors.secondary,
    },
    text: {
      textAlign: 'center',
      fontSize: 28,
      fontFamily: 'medium',
      color: theme.colors.text,
    },
    count: {
      position: 'absolute',
      top: theme.spacing.xs,
      justifyContent: 'center',
      width: 40,
      height: 40,
      padding: theme.spacing.xs,
      opacity: 0.8,
      zIndex: 1000,
    },
    leftCount: {
      left: 0,
      backgroundColor: '#E23053',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    rightCount: {
      right: 0,
      backgroundColor: '#119179',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    countText: {
      color: theme.colors.background,
      fontFamily: 'medium',
      fontSize: 20,
    },
    arrows: {
      position: 'absolute',
      top: 490,
      width: 220,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center',
      zIndex: 1000,
    },
    hint: {
      paddingHorizontal: 4,
    },
    hintText: {
      textAlign: 'center',
      fontFamily: 'medium',
      fontSize: 12,
      color: theme.colors.secondaryText,
    },
  })
