import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import * as SplashScreen from 'expo-splash-screen'

import { TabNavigator } from './components/TabNavigator/TabNavigator'
import store from './store/store'
import { loadFonts } from './utils/loadFonts'

SplashScreen.preventAutoHideAsync()


export type StackParamList = {
    main: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {

    const [appIsLoaded, setAppIsLoaded] = useState(false)

    useEffect(() => {
        const prepare = async () => {
            try {
                await loadFonts();
            }
            catch (e) {
                // todo
                console.log(e)
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

    const screenOptions = useMemo(() => ({
        headerTitle: 'Translate',
        headerShown: false
    }), []);

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
                        </Stack.Group>
                    </Stack.Navigator>
                </View>
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
