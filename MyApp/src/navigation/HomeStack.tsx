
import React, { useMemo } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { APP_SCREEN } from './screenType';
import { Tabs } from './TabNavigation';

const Stack = createStackNavigator();
export default function HomeStack() {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
        headerShown: false,
    }),
    [],
  );
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={APP_SCREEN.TABS} component={Tabs}/>
    </Stack.Navigator>
  );
}