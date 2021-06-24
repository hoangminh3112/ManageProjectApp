import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useContext, useMemo } from "react";
import { ProjectsList } from "../../features/Project/HomeScreen";
import { APP_SCREEN } from "../screenType";
import React from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { AuthContext } from "../AuthProvider";
import { Provider } from "react-redux";
import { store } from "../../redux_saga/store";
import { Projects_Detail } from "../../features/Project/components/ProjectDetail";
import { styles } from "../../features/Chat/components/styles";
import { Alert } from "react-native";
import { SearchScreen } from "../../features/Project/components/SearchScreen";

const Stack = createStackNavigator();
export const Project = ({ navigation, route }: any) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ tabBarVisible: false })
    } else {
        navigation.setOptions({ tabBarVisible: true })
    }
    const { logout } : any = useContext(AuthContext);
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

    const onPress=() => {
        Alert.alert
        ('Notification', 'Are you sure to exit the app?',
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {text: 'YES', onPress:logout },
            ]
        )
    }

    return (
        <Provider store={store} >
            <Stack.Navigator
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name={APP_SCREEN.HOME}
                    component={ProjectsList}
                    options={() => ({
                        headerLeft: () => (
                            <Icon name={'logout'} size={30} onPress={onPress} style={styles.icon} />
                        )
                    })}
                />
                <Stack.Screen
                    name={APP_SCREEN.PROJECT_DETAIL}
                    component={Projects_Detail} />
                <Stack.Screen 
                    name={APP_SCREEN.SEARCH_SCRENN}
                    component={SearchScreen}
                />
            </Stack.Navigator>
        </Provider>

    )
}