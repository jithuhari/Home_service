import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/tabnavigation';

import {createStackNavigator} from '@react-navigation/stack';

import Fan from './src/Screens/electricalsub'

const Stack = createStackNavigator();

export default HomeSerice = () => {
  return (
    <NavigationContainer >
      <MyTabs />  
    
      

    </NavigationContainer>
    // <Fan />
  );
};
