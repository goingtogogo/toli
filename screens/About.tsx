import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { theme } from '../utils/theme'


export function About() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.accent}>Привет! Сайн!</Text>
            <Text style={styles.text}>
                Спасибо, что выбрали наше мобильное приложение для изучения бурятского языка.
            </Text>
            <Text style={styles.text}>
                Также хотим выразить благодарность сайту{' '}
                <Text style={styles.accent}>https://burlang.ru/ </Text>за&nbsp;возможность использования их&nbsp;API,
                который стал основой нашего приложения.
            </Text>
            <Text style={styles.text}>
                Мы&nbsp;всегда рады обратной связи от&nbsp;пользователей, так как это поможет сделать приложение лучше.
                Если у&nbsp;вас есть какие-либо замечания или предложения по&nbsp;улучшению, пишите нам на&nbsp;почту:{' '}
                <Text style={styles.accent}>toli.app.ios@gmail.com</Text>
            </Text>
            <Text style={styles.text}>
                Также хотим отметить, что мы&nbsp;планируем по&nbsp;возможности продолжать развивать наше приложение.
                Если вы&nbsp;думаете, что могли&nbsp;бы помочь нам с&nbsp;наполнением приложения&nbsp;&mdash; уроками, контентом и&nbsp;т.д.,
                то&nbsp;мы&nbsp;также готовы к&nbsp;сотрудничеству (писать сюда&nbsp;&mdash;<Text style={styles.blue}>toli.app.ios@gmail.com</Text>)
            </Text>
            <Text style={styles.text}>
                Мы&nbsp;надеемся, что наше приложение будет полезным для вас в&nbsp;процессе изучения бурятского языка!😊
            </Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingBottom: 30,
        paddingHorizontal: theme.spacing.m,
    },
    accent: {
        fontSize: 16,
        fontFamily: 'bold',
        color: theme.colors.accent
    },
    text: {
        paddingVertical: theme.spacing.xs,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'regular',
        color: theme.colors.secondaryText
    }
})
