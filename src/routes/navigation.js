import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import Ele from '../Screens/Electrical';

const Stack = createStackNavigator();

export default Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        

        <Stack.Screen name="Ele" component={Ele} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

