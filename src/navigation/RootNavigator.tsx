import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
// import HomeStackNavigator from './HomeStackNavigator';
import BottomTabs from './BottomTabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <BottomTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default RootNavigator;
