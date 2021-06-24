
import React, { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StudentsList } from '../../../model/studentsList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 5,
    marginLeft: 35,
    height: 290,
    width: 290,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    textShadowColor: 'white',

  },
  content: {
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center'
  },
  infor: {
    textAlign: 'center'
  },

})

interface StudentsProps {
  studentsList: StudentsList;
  onItemPress?: (studentsList: StudentsList) => void;
}

const StudentsListComponent = ({ studentsList, onItemPress }: StudentsProps) => {
  // function
  const onPress = useCallback(() => {
    if (onItemPress && typeof onItemPress === 'function') {
      onItemPress(studentsList);
    }
  }, [onItemPress, studentsList]);
  //render
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      
        <View style={styles.content}>
          <Text style={styles.text} >Full Name: </Text>
          <Text style={styles.infor} >{studentsList?.fullname ?? ''}</Text>
          <Text style={styles.text}>Major: </Text>
          <Text style={styles.infor}>{studentsList?.Major ?? ''}</Text>
          <Text style={styles.text}>Topic: </Text>
          <Text style={styles.infor}>{studentsList?.topic ?? ''}</Text>
          <Text style={styles.text}>Supervior: </Text>
          <Text style={styles.infor}>{studentsList?.Supervisor ?? ''}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

export const ListStudents = memo(StudentsListComponent, isEqual);