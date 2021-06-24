import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../../../components/Formbutton';
import FormInput from '../../../components/FormInput';
import { styles } from './styles';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { APP_SCREEN } from '../../../navigation/screenType';


export const AddRoomScreen = () => {
    //state
    const [roomName, setRoomName] = useState('');
    const navigation = useNavigation();
    //function
    const handleButtonPress = () => {
        if (roomName.length > 0) {
            firestore()
                .collection('THREADS')
                .add({
                    name: roomName
                }
                )
                .then(() => {
                    navigation.goBack();
                })

        }
    }



    return (
        <View style={styles.rootContainer}>
            <View style={styles.closeButtonContainer}>
                <IconButton
                    icon='close-circle'
                    size={36}
                    color='#6646ee'
                    onPress={() => navigation.navigate(APP_SCREEN.CHAT)}
                />
            </View>
            <View style={styles.innerContainer}>
                <Title style={styles.title}>Create a new chat room</Title>
                <FormInput
                    labelName='Room Name'
                    value={roomName}
                    onChangeText={(text: any) => setRoomName(text)}
                    clearButtonMode='while-editing'
                />
                <FormButton
                    title='Create'
                    modeValue='contained'
                    labelStyle={styles.buttonLabel}
                    onPress={() => handleButtonPress()}
                    disabled={roomName.length === 0}
                />
            </View>
        </View>
    );
}

