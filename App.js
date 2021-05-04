import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/tabnavigation';

import {createStackNavigator} from '@react-navigation/stack';

import Intoslider from './src/Screens/Intoslider'
import Shedule from './src/Screens/Shedule'

const Stack = createStackNavigator();

export default HomeSerice = () => {
  return (
      <NavigationContainer   >
      {/* <Intoslider  /> */}
      <MyTabs />  
     
    
      

    </NavigationContainer>
    // <Intoslider />
   
  );
};
