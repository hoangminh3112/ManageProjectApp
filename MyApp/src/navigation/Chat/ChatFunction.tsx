

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { IconButton } from 'react-native-paper';
import { Chat } from '../../features/Chat/ChatScreen';
import { AddRoomScreen } from '../../features/Chat/components/AddRoomScreen';
import { RoomScreen } from '../../features/Chat/components/RoomScreen';

import { APP_SCREEN } from '../screenType';
import { Tabs } from '../TabNavigation';



const Stack = createStackNavigator();
export const ChatFunction = ({ navigation, route }: any) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    // const screenOptions = useMemo<StackNavigationOptions>(
    //     () => ({
    //         headerShown: false,
    //     }),
    //     [],
    // );
    const screenOptions = useMemo<StackNavigationOptions>(() => (
        {
            headerStyle: {
                backgroundColor: '#6646ee'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontSize: 22
            }
        }
    ),
        [],
    )
    return (

        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name={APP_SCREEN.CHAT}
                component={Chat}
                options={({ navigation }) => ({
                    headerRight: () => (
                      <IconButton
                        icon='message-plus'
                        size={28}
                        color='#ffffff'
                        onPress={() => navigation.navigate(APP_SCREEN.ADD_ROOM)}
                      />
                    )
                  })}
            />
            <Stack.Screen
                name={APP_SCREEN.ADD_ROOM}
                component={AddRoomScreen}
                options={() => ({
                    headerShown: false
                  })}
            />
            <Stack.Screen
                name={APP_SCREEN.ROOM_SCREEN}
                component={RoomScreen}
                options={({ route }:any) => ({
                    title: route.params.thread.name,
                    headerShown: true
                  })}
            />
        </Stack.Navigator>

    )
}