import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert, ToastAndroid } from 'react-native';
import { APP_SCREEN } from './screenType';
import Toast from 'react-native-simple-toast';


export const AuthContext = createContext({});
export const AuthProvider = ({ children, navigation }: any) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email: any, password: any) => {
                    try {
                        let response = await auth().signInWithEmailAndPassword(
                            email, 
                            password
                        )
                        if(response && response.user) {
                            Alert.alert("Success", "Logged in successfully");
                            
                            console.log(response)
                        }
                    } catch (e) {
                        Toast.show("Invalid password or email, please check again!");
                        // Toast.show("Warning", e.message);
                    }
                },
                register: async (email: any, password: any, confirmPassword:any) => {
                    if (password !== confirmPassword) {
                        Toast.show("Passwords don't match!")
                        return
                    }
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                      
                    } 
                    catch (e) {
                        console.log(e);
                        if (e.code === 'auth/weak-password') {
                            Toast.show('Password required at least 6 digits!');
                        }
                    }
                },
                logout: async () => {
                    try {
                        
                        await auth().signOut()
                        .then(() => Toast.show("Signed out"));
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};