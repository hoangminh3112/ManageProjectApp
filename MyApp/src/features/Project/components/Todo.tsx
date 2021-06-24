import React from 'react';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import FormButton from '../../../components/Formbutton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,

  },
  button: {


    width: '40%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 2,
  },
  text: {
    textAlign: 'center',
    padding: 10
  },
  space: {
    margin: 10,
    backgroundColor: 'white',
    borderWidth: 1
  }

})

export function Todos({ id, title }: any) {

  async function deleteToDo() {
    await firestore()
      .collection('todos')
      .doc(id)
      .delete().then(() => {
        Toast.show('Completed!')

      })
  }

  const openTwoButtonAlert = () => {
    Alert.alert(
      'Completed? ',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => deleteToDo() },
        { text: 'No', onPress: () => Alert.alert('Nothing changed'), style: 'cancel' },
      ],
      {
        cancelable: true
      }
    );
  }
  return (
    <View style={styles.container} >
      <Text>{title}</Text>
      <Divider />
      <FormButton
        title='Completed'
        modeValue='contained'
        onPress={() => openTwoButtonAlert()} style={styles.button} >
      </FormButton>
    </View>
  );
}

