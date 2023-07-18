import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import { Provider, useSelector } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'

import { TabNavigator } from './components/TabNavigator/TabNavigator'
import store, { State } from './store/store'
import { loadFonts } from './utils/loadFonts'
import { About } from './screens/About'
import { theming } from './utils/theme'
import { Collection } from './screens/Collections/Collection/Collection'
import { Flashcards } from './screens/Collections/Flashcards/Flashcards'
import { Navigation } from './screens/Collections/Navigation/Navigation'
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Quiz } from './screens/Collections/Quiz/Quiz'
import { cards } from './store/slice/flashcards/content'

SplashScreen.preventAutoHideAsync()


export type StackParamList = {
    main: undefined;
    about: undefined;
    settings: undefined;
    collection: { name: string, key: keyof typeof cards };
    flashcards: { name: string, key: keyof typeof cards };
    quiz: { name: string; key: keyof typeof cards };
    navigation: {
        name: string,
        key: keyof typeof cards,
        screen: 'quiz' | 'flashcards',
        swipedLeft?: number,
        swipedRight?: number
    };
}

const Stack = createNativeStackNavigator<StackParamList>()



function App() {
    const [appIsLoaded, setAppIsLoaded] = useState(false)
    const mode = useSelector((state: State) => state.theme.mode);
    const theme = theming(mode);

    useEffect(() => {
        const prepare = async () => {
            try {
                await loadFonts();
            }
            catch (e) {
                Alert.alert('Что-то пошло не так', 'Попробуйте повторить позже')
            }
            finally {
                setAppIsLoaded(true)
            }
        }

        prepare()
    }, [])

    const onLayout = useCallback(async () => {
        if (appIsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [appIsLoaded])


    const screenOptions = {
        headerTitle: 'Переводчик',
        headerShown: false
    }

    const commonStyles = React.useMemo(() => ({
        headerTitleStyle: {
            color: theme.colors.text,
            fontSize: 24,
            fontFamily: 'extraBold',
            letterSpacing: 0.5
        },
        headerStyle: {
            backgroundColor: theme.colors.background,
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
    }), [theme]);


    const aboutOptions = {
        headerTitle: 'О приложении',
        ...commonStyles,
        headerBackTitle: ''
    }

    const collectionOptions = ({ route: { params: { name, key } }, navigation }: { route: RouteProp<StackParamList, "collection">, navigation: NativeStackNavigationProp<StackParamList, "navigation"> }) => ({
        headerTitle: name,
        ...commonStyles,
        headerBackTitle: '',
        headerRight: () => <MaterialCommunityIcons name="cards-outline" size={28} color="#3478f6" onPress={() => navigation.navigate('flashcards', { name, key: key as keyof typeof cards })} />
    })

    const flashcardsOptions = ({ route }: { route: RouteProp<StackParamList, "flashcards"> }) => ({
        headerTitle: route.params.name,
        ...commonStyles,
        headerBackTitle: ''
    })

    const quizOptions = ({ route }: { route: RouteProp<StackParamList, "quiz"> }) => ({
        headerTitle: route.params.name,
        ...commonStyles,
        headerBackTitle: ''
    })

    const navigationOptions = ({ navigation }: { navigation: NativeStackNavigationProp<StackParamList, "navigation"> }) => ({
        headerTitle: '',
        ...commonStyles,
        headerBackVisible: false,
        headerRight: () => <Octicons name="x" size={24} color="#3478f6" onPress={() => navigation.popToTop()} />
    })

    if (!appIsLoaded) {
        return null
    }

    return (
        <NavigationContainer>
            <View onLayout={onLayout} style={styles.container}>
                <Stack.Navigator>
                    <Stack.Group>
                        <Stack.Screen name="main" component={TabNavigator} options={screenOptions} />
                        <Stack.Screen name="about" component={About} options={aboutOptions} />
                        <Stack.Screen name="collection" component={Collection} options={collectionOptions} />
                        <Stack.Screen name="flashcards" component={Flashcards} options={flashcardsOptions} />
                        <Stack.Screen name="quiz" component={Quiz} options={quizOptions} />
                        <Stack.Screen name="navigation" component={Navigation} options={navigationOptions} />
                    </Stack.Group>
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

export default function Root() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

