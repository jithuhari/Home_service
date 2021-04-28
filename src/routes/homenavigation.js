import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './tabnavigation';




import Ele from '../Screens/Electrical';
import Home from '../Screens/home';

import Cleaning from '../Screens/Cleaning';
import HomeSanitization from '../Screens/HomeSanitization';
import InteriorDesigning from '../Screens/InteriorDesigning';
import Plumbing from '../Screens/Plumbing';
import Fan from '../Screens/electricalsub'




const Stack = createStackNavigator();

export default HomeNavigations = () => {
  return (
   
          
            <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
               <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Ele' component={Ele} />
             
              <Stack.Screen name='Cleaning' component={Cleaning} />
              <Stack.Screen name='HomeSanitization' component={HomeSanitization} />
              <Stack.Screen name='InteriorDesigning' component={InteriorDesigning} />
              <Stack.Screen name='Plumbing' component={Plumbing} />
              <Stack.Screen name='Fan' component={Fan} />
             


            </Stack.Navigator>
        
  );
};

