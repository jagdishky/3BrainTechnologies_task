import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DrawerComponent from '../components/module/DrawerComponent';
import HomeScreen from '../components/screens/appScreens/home';
import { spacing } from '../styles/spacing';
import { SCREEN_HOME } from '../utility/constants';

const Drawer = createDrawerNavigator();

function DrawerScreen({ }) {
    return (
        <Drawer.Navigator
            drawerContent={() => <DrawerComponent />}
            // edgeWidth={0}
            // useLegacyImplementation={true}
            screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
                drawerType: 'front',
                drawerStyle: { width: '80%' },
                swipeEnabled: false,
            }}
        >
            <Drawer.Screen name={SCREEN_HOME} component={HomeScreen} />
        </Drawer.Navigator >
    );
}

export default DrawerScreen;