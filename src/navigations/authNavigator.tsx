import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from '../components/screens/authScreens/login';
import * as Utils from '../utility';
import LoginWithPasscodeScreen from '../components/screens/authScreens/loginWithPassscode';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <Stack.Navigator initialRouteName={Utils.Constants.SCREEN_WELCOME} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <Stack.Screen name={Utils.Constants.SCREEN_LOGIN} component={LoginScreen} />
                <Stack.Screen name={Utils.Constants.SCREEN_LOGIN_WITH_PASSCODE} component={LoginWithPasscodeScreen} />
                {/* <Stack.Screen name={Utils.Constants.KEY_COMMON_NAVIGATOR} component={CommonNavigation} /> */}

            </Stack.Navigator>
        </SafeAreaView>
    );
}

export default AuthNavigator;
