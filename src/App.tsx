import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AppStack from './navigations';
import commonStyle from './styles/commonStyles';

const App = () => {
  return (
    <SafeAreaView style={commonStyle.safeAreaView}>
      <AppStack />
    </SafeAreaView>
  );
};

export default App;
