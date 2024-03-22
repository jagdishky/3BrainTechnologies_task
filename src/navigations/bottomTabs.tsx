import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import HomeScreen from '../components/screens/appScreens/home';
import { spacing } from '../styles/spacing';
import * as Utils from '../utility';
import colors from '../utility/colors';
import { Images } from '../utility/imagePaths';

const Tab = createBottomTabNavigator();
const tabBarColor = colors.white;

let tabData = [
  {
    name: Utils.Constants.SCREEN_HOME,
    active_icon: Images.IMG_ABOUT_US_ICON,
    inactive_icon: Images.IMG_ABOUT_US_ICON,
    component: HomeScreen,
  },
  // {
  //   name: Utils.Constants.SCREEN_MY_RESERVATIONS,
  //   active_icon: Images.IMG_ABOUT_US_ICON,
  //   inactive_icon: Images.IMG_ABOUT_US_ICON,
  //   component: MyReservations,
  // },
  // {
  //   name: Utils.Constants.SCREEN_PROFILE,
  //   active_icon: Images.IMG_ABOUT_US_ICON,
  //   inactive_icon: Images.IMG_ABOUT_US_ICON,
  //   component: Profile,
  // },

];

function BottomTabs({ }) {

  function handleTabState(state: any) {

  }

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: tabBarColor,
            paddingBottom: 0,
            height: spacing.HEIGHT_64,
            borderWidth: 0
          },
          tabBarAllowFontScaling: true,
          headerShown: false,
        }}>
        {tabData.map((item, index) => {
          return (
            <Tab.Screen
              key={`bottomTabMain_${index.toString()}`}
              name={item.name}
              component={item.component}
              listeners={({ navigation, route }: { navigation: any, route: any }) => ({
                tabPress: (e: any) => {
                  // onTabPress(navigation, route);
                },
                state: (e: any) => {
                  handleTabState(e)
                }
              })}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={styles.mainContainer} >
                      <Image source={item.active_icon} style={{}} resizeMode="contain" />
                      {
                        focused &&
                        <View style={styles.activeIndiactor} />
                      }
                    </View>
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: (spacing.FULL_WIDTH / tabData.length)
  },
  activeIndiactor: {
    width: spacing.WIDTH_16,
    height: spacing.HEIGHT_2,
    borderRadius: spacing.RADIUS_90,
    backgroundColor: colors.white,
    marginTop: spacing.MARGIN_4
  },
});

export default React.memo(BottomTabs);
