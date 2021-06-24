import { APP_SCREEN, RootStackParamList } from "./screenType";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Chat } from "../features/Chat/ChatScreen";
import React, { useMemo } from 'react';
import { StackNavigationOptions } from "@react-navigation/stack";
import { ChatFunction } from "./Chat/ChatFunction";
import { Image, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'

import { Calendar } from "../features/Calender/Calendar";
import { Project } from "./Projects/Projects";
import { Projects_Detail } from "../features/Project/components/ProjectDetail";
import { styles } from "../features/Chat/components/styles";
import { SearchScreen } from "../features/Project/components/SearchScreen";


const Tab = createBottomTabNavigator<RootStackParamList>();

export const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={
                {
                    activeBackgroundColor: '#B5F2FF',
                    activeTintColor: 'white',
                    inactiveTintColor: '#B5F2FF',
                    showLabel: false,
                }
            }
        >
            <Tab.Screen
                name={APP_SCREEN.HOME}
                component={Project}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Icon name={"users"} size={30} />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.CHAT}
                component={ChatFunction}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Icon name={"chat"} size={30} />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.CALENDAR}
                component={Calendar}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <View >
                                <Icon name={"calendar"} size={30} />
                            </View>
                        )
                    }
                }
            />
            <Tab.Screen
                name={APP_SCREEN.SEARCH_SCRENN}
                component={SearchScreen} 
                options={
                    {
                        tabBarIcon: () => (
                            <View>
                                <Icon name="text-document" size={30}  />
                            </View>
                        )
                    }
                }   
            />
        </Tab.Navigator>
    )
}

