import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/routes/tabnavigation';

import Abc from './src/routes/intronav';

import {createStackNavigator} from '@react-navigation/stack';

import Intoslider from './src/Screens/Intoslider'




const Stack = createStackNavigator();

export default HomeSerice = () => {

  
  return (
      <NavigationContainer   >
      {/* <Intoslider  /> */}
      {/* <MyTabs />   */}

      <Abc/>
    
      

    </NavigationContainer>
  
   
    
   
  );
};
