import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as Utils from '../utility';

const Stack = createStackNavigator();

function CommonNavigation() {
  return (
    <Stack.Navigator initialRouteName={''} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
      {/* <Stack.Screen name={Utils.Constants.SCREEN_SELECT_LANGUAGE} component={SelectLanguageScreen} /> */}
    </Stack.Navigator>
  );
}

export default CommonNavigation;
