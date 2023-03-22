import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Swiper from 'react-native-deck-swiper';
import FlipCard from 'react-native-flip-card';

import { StackParamList } from '../../../App';
import { theme } from '../../../utils/theme'
import { ActionButton } from '../../../components/ActionButton/ActionButton'
import { ProgressView } from '../../../components/ProgressView/ProgressView';
import { State } from '../../../store/store';
import { HistoryItem } from '../../../store/slice/history';


type Props = NativeStackScreenProps<StackParamList, 'flashcards'>;

let swiper: Swiper<HistoryItem> | null;

export function Flashcards(props: Props) {
  const flashcards = useSelector((state: State) => state.flashcards.items)
  const [leftCount, setLeft] = useState(0);
  const [rightCount, setRight] = useState(0);
  const [swiped, setSwiped] = useState(0);
  const { route: { params: { key, name } }, navigation } = props;
  const { cards } = useMemo(() => flashcards[key], [key]);
  const progress = useMemo(() => Math.round((swiped / cards.length) * 10) / 10, [swiped, cards.length])

  useEffect(() => {
    navigation.setOptions({ headerTitle: `${swiped} / ${cards.length}` })

    if (swiped === cards.length) {
      navigation.navigate('navigation', { name, key, swipedLeft: leftCount, swipedRight: rightCount })
      setSwiped(0)
      setLeft(0)
      setRight(0)
    }
  }, [swiped]);

  const onSwipedLeft = useCallback(() => {
    setLeft(leftCount + 1);
  }, [leftCount])

  const onSwipedRight = useCallback(() => {
    setRight(rightCount + 1);
  }, [rightCount])

  const onSwiped = useCallback(() => {
    setSwiped(swiped + 1);
  }, [swiped])

  return (
    <View style={styles.container}>
      <ProgressView
        progress={progress}
      />
      <Swiper
        ref={(swiperRef) => swiper = swiperRef}
        cards={cards}
        renderCard={Card}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        onSwiped={onSwiped}
        verticalSwipe={false}
        cardIndex={0}
        stackSize={3}
        stackSeparation={10}
        overlayLabels={overlayLabels}
        animateOverlayLabelsOpacity
        backgroundColor={theme.colors.background}
        marginTop={theme.spacing.s}
        cardHorizontalMargin={36}
        cardStyle={styles.card}
        infinite={true}
      >
        <View>
          <View style={[styles.leftCount, styles.count]}>
            <Text style={styles.countText}>{leftCount}</Text>
          </View>
          <View style={[styles.rightCount, styles.count]}>
            <Text style={styles.countText}>{rightCount}</Text>
          </View>
          <View style={styles.arrows}>
            <ActionButton name="arrow-left" onPress={() => { setTimeout(() => swiper?.swipeLeft(), 0) }} />
            <View style={styles.hint}>
              <Text style={styles.hintText}>Нажмите на карточку,</Text>
              <Text style={styles.hintText}>чтоб перевернуть ее</Text>
            </View>
            <ActionButton name="arrow-right" onPress={() => { setTimeout(() => swiper?.swipeRight(), 0) }} />
          </View>
        </View>
      </Swiper>
    </View>
  )
}


const Card = ({ text, translatedText }: { text: string; translatedText: string }) => {
  return (
    <FlipCard
      style={styles.flipCard}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.reversedSide}>
        <Text style={styles.text}>{translatedText}</Text>
      </View>
    </FlipCard>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    backgroundColor: '#F4F4F4',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'medium',
    color: theme.colors.primary,
  },
  count: {
    position: 'absolute',
    top: theme.spacing.xs,
    justifyContent: 'center',
    width: 40,
    padding: theme.spacing.xs,
    opacity: 0.8
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
    borderBottomLeftRadius: 8
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
  },
  hint: {
    paddingHorizontal: 4
  },
  hintText: {
    fontFamily: 'medium',
    fontSize: 12,
    color: theme.colors.secondaryText
  }
})


const overlayLabels = {
  left: {
    title: 'Еще изучаю',
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
        marginLeft: -30
      }
    }
  },
  right: {
    title: 'Знаю',
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
        marginLeft: 30
      }
    }
  },
}