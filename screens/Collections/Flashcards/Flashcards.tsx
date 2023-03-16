import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { StackParamList } from '../../../App';

import { theme } from '../../../utils/theme'
import FlipCard from 'react-native-flip-card';
import { flashcards } from '../Collections';
import { ActionButton } from '../../../components/ActionButton/ActionButton'
import Swiper from 'react-native-deck-swiper';


type Props = NativeStackScreenProps<StackParamList, 'flashcards'>;


export function Flashcards(props: Props) {
  let swiper: Swiper<{ buryat: string; english: string; }> | null;
  const [leftCount, setLeft] = useState(0);
  const [rightCount, setRight] = useState(0);
  const [swiped, setSwiped] = useState(0);
  const { route: { params: { key, name } } } = props;
  const { cards } = useMemo(() => flashcards[key], [key]);

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
      <Swiper
        ref={(swiperRef) => swiper = swiperRef}
        cards={cards}
        renderCard={Card}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        onSwiped={onSwiped}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        cardIndex={0}
        backgroundColor={theme.colors.text}
        stackSize={3}
        stackSeparation={10}
        overlayLabels={{
          left: {
            title: 'Еще изучаю',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'pink',
                borderWidth: 1
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
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
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
        }}
        animateOverlayLabelsOpacity
      >
        <View style={styles.count}>
          <ActionButton name="arrow-left" onPress={() => { console.log(swiper); swiper?.swipeLeft() }} />
          <ActionButton name="arrow-right" onPress={() => { swiper?.swipeRight() }} />
          <Text>{swiped} / {cards.length}</Text>
          <Text>swiped left: {leftCount}</Text>
          <Text>swiped right: {rightCount}</Text>
        </View>
      </Swiper>
    </View>
  )
}


const Card = ({ buryat, english }) => {
  return (
    <View style={styles.container}>
      <FlipCard
        style={styles.card}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
      >
        <View style={styles.face}>
          <Text>{buryat}</Text>
        </View>
        <View style={styles.back}>
          <Text>{english}</Text>
        </View>
      </FlipCard>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    maxHeight: 400,
  },
  swiper: {
    borderWidth: 1,
    backgroundColor: theme.colors.text,
    borderColor: theme.colors.text
  },
  card: {
    flex: 1,
    maxHeight: 400,
    margin: 'auto',
    borderWidth: 1,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.accent,
  },
  face: {
    // color: theme.colors.text
  },
  back: {
    // color: theme.colors.text
  },
  count: {
    flexDirection: 'row',
    backgroundColor: theme.colors.background
  }
})
