import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './tabnavigation';
import Intro from '../Screens/Intoslider';



import Login from '../Screens/Login'
import Register from '../Screens/Register'



const Abc = createStackNavigator();

export default IntroNav = () => {
  return (
    <Abc.Navigator
      initialRouteName={Intro}
      screenOptions={{headerShown: false}}>
      <Abc.Screen name="Intro" component={Intro} options={{}} />
      <Abc.Screen name="Login" component={Login} options={{}} />
      <Abc.Screen name="Register" component={Register} options={{}} />
      <Abc.Screen name="MyTabs" component={MyTabs} />
    </Abc.Navigator>
  );
};
