import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../features/Login/LoginScreen';
import {SignupScreen} from '../features/Register/SignUpScreen';
import { APP_SCREEN } from './screenType';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen name={APP_SCREEN.LOGIN} component={Login} />
        <Stack.Screen name={APP_SCREEN.SIGNUP} component={SignupScreen} />
      </Stack.Navigator>
    );
  }
