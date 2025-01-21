import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();

function AppNavigator() {

    

    return (
        <NavigationContainer>


            <Stack.Navigator initialRouteName="MainPage">

                <Stack.Screen
                    name="MainPage"
                    navigation={{header:false}}
                    component={MainPage}
                />
                <Stack.Screen
                    name="Profile"
                    navigation={{header:false}}

                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
