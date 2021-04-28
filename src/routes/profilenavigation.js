import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';



import profile  from '../Screens/profile'
import userprofile  from '../Screens/userprofile'
import Contactus  from '../Screens/Contactus'


const Stack = createStackNavigator();

export default ProfileNavigation = () => {
  return (
   
           
            <Stack.Navigator initialRouteName="profile" screenOptions={{headerShown:false}}>
               <Stack.Screen name='profile' component={profile} />
               <Stack.Screen name='userprofile' component={userprofile} />
               <Stack.Screen name='Contactus' component={Contactus} />
              


            </Stack.Navigator>
        
  );
};

