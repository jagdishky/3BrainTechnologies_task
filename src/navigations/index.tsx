import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { navigationRef } from '../NavigationService';
import * as Utils from '../utility';
import DrawerScreen from './drawer';
import WelcomeScreen from '../components/screens/appScreens/welcome';

const Stack = createStackNavigator();

function AppStack({ }) {
    return (
        <View style={{ flex: 1, }} >
            <NavigationContainer ref={navigationRef}  >
                <Stack.Navigator initialRouteName={Utils.Constants.SCREEN_WELCOME} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                    <Stack.Screen name={Utils.Constants.SCREEN_DRAWER} component={DrawerScreen} />
                    <Stack.Screen name={Utils.Constants.SCREEN_WELCOME} component={WelcomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default AppStack;