
import React, { useContext, useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import FormButton from '../../components/Formbutton';


import FormInput from '../../components/FormInput';

import { AuthContext } from '../../navigation/AuthProvider';
import { APP_SCREEN } from '../../navigation/screenType';


export const Login = ({ navigation }: any) => {
  const { login }: any = useContext(AuthContext);
  const [isSecure, setIsSecure] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/Gears.png')} style={styles.image}/> */}
      <Title style={styles.titleText}>Welcome to Chat app</Title>
      <View >
        <FormInput

          labelName='Email'
          value={email}
          autoCapitalize='none'
          onChangeText={(userEmail: React.SetStateAction<string>) => setEmail(userEmail)}
        />
        <View style={styles.row}>
          <FormInput
            labelName='Password'
            value={password}
            onChangeText={(userPassword: React.SetStateAction<string>) => setPassword(userPassword)}
            secureTextEntry={isSecure}
            autoCapitalize='none'
          />
          <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', alignSelf: 'center' }}
            onPress={() => {
              setIsSecure(!isSecure)
            }}
          >

            <Icon name={isSecure ? "eye-with-line" : 'eye'} size={30} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <FormInput
        labelName='Password'
        value={password}
        secureTextEntry={true}
        onChangeText={(userPassword: React.SetStateAction<string>) => setPassword(userPassword)}
      /> */}
      <FormButton
        title='Login'
        modeValue='contained'

        labelStyle={styles.loginButtonLabel}
        onPress={() => {
          if (email === '' || password === '') Alert.alert("Warning", "Empty string")
          else login(email, password)
        }}
      />
      <FormButton
        title='New user? Join here'
        modeValue='text'
        uppercase={false}
        labelStyle={styles.navButtonText}
        onPress={() => navigation.navigate(APP_SCREEN.SIGNUP)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 16
  },
  row: {
    flexDirection: 'row'
  },
  image:{
    width: "50%",
    height: "20%",
    margin: 40

  }

});