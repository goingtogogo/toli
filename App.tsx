import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View, Alert, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'

import { TabNavigator } from './components/TabNavigator/TabNavigator'
import store from './store/store'
import { loadFonts } from './utils/loadFonts'
import { About } from './screens/About'
import { theme } from './utils/theme'

SplashScreen.preventAutoHideAsync()


export type StackParamList = {
    main: undefined;
    about: undefined;
}
const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {

    const [appIsLoaded, setAppIsLoaded] = useState(false)

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

    if (!appIsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <View onLayout={onLayout} style={styles.container}>
                    <Stack.Navigator>
                        <Stack.Group>
                            <Stack.Screen name="main" component={TabNavigator} options={screenOptions} />
                            <Stack.Screen name="about" component={About} options={aboutOptions} />
                        </Stack.Group>
                    </Stack.Navigator>
                </View>
            </NavigationContainer>
        </Provider>
    )
}

const screenOptions = {
    headerTitle: 'Переводчик',
    headerShown: false
}

const aboutOptions = {
    headerTitle: 'О приложении',
    headerTitleStyle: {
        color: theme.colors.text,
        fontSize: 24,
        fontFamily: 'extraBold',
        letterSpacing: 0.5
    },
    headerStyle: {
        backgroundColor: theme.colors.background,
    },
    headerShadowVisible: false,
    headerBackTitle: 'Назад'

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
