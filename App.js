import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import MainPage from './src/pages/MainPage';
import Profile from './src/pages/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    };

    lockOrientation();

    return () => {
      ScreenOrientation.unlockAsync();
    };


  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
