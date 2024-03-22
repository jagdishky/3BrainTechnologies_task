import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <View style={{ flex: 1 }} >
      {/* <SafeAreaView style={{}} />
      <Stack.Navigator
        initialRouteName={Utils.Constants.SCREEN_HOME}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
        <Stack.Screen name={Utils.Constants.SCREEN_DRAWER} component={DrawerScreen} />
        <Stack.Screen name={Utils.Constants.SCREEN_EVENT_DETAIL} component={EventDetail} />
      </Stack.Navigator>
      < SafeAreaView style={{}} />

      <GetPincodeModal />
      <TradeOpinionModal />
      <GetParticipantDetailsModal /> */}

    </View>
  );
}

export default AppNavigation;