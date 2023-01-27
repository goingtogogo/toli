import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './components/TabNavigator/TabNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import {Provider} from 'react-redux';
import store from './store/store';

SplashScreen.preventAutoHideAsync();


export type StackParamList = {
  main: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          light: require('./assets/fonts/Inter-Light.ttf'),
          medium: require('./assets/fonts/Inter-Medium.ttf'),
          bold: require('./assets/fonts/Inter-Bold.ttf'),
        })
      }
      catch (e) {
        console.log(e);
      }
      finally {
        setAppIsLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null; 
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <View onLayout={onLayout} style={styles.container}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name="main" component={TabNavigator} options={{ headerTitle: 'Translate', headerShown: false }} />
          </Stack.Group>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
