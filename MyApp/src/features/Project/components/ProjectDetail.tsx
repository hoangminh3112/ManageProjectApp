import { StackScreenProps } from "@react-navigation/stack";
import React, { memo, useEffect, useMemo, useState } from "react";
import isEqual from "react-fast-compare";
import { Alert, FlatList, SafeAreaView, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import FormButton from "../../../components/Formbutton";
import { StudentsList } from "../../../model/studentsList";
import { APP_SCREEN, RootStackParamList } from "../../../navigation/screenType";
import styles from "./styles";
import firestore, { firebase } from '@react-native-firebase/firestore';
import { Todos } from "./Todo";
import FormInput from "../../../components/FormInput";
import Toast from 'react-native-simple-toast';

type ProjectDetailProbs = StackScreenProps<
  RootStackParamList,
  APP_SCREEN.PROJECT_DETAIL
>;

const ProjectDetail = ({ route, navigation }: ProjectDetailProbs) => {
  const project = useMemo<StudentsList>(() => route.params?.studentsList ?? {}, [route]);
  const ref = firestore().collection('todos');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  //function
  async function addTodo() {
    await ref.add({
      title: todo,
      createAt: timestamp()
    });
    setTodo('');

  }

  // effect
  useEffect(() => {
    return ref.orderBy('createAt', 'desc').onSnapshot(querySnapshot => {
      const list: ((prevState: never[]) => never[]) | { id: string; title: any; createAt: any }[] = [];
      querySnapshot.forEach(doc => {
        const { title, createAt } = doc.data();
        list.push({
          id: doc.id,
          title,
          createAt,
        });
      });

      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });

  }, []);
  return (
    <SafeAreaView style={styles.projectDetailContainer}>
      <View>
        <ScrollView horizontal={false} nestedScrollEnabled={true} style={{borderWidth:1, flex:1}} >
          <ScrollView horizontal={true} nestedScrollEnabled={true} style={{flex:1}}>
            <TouchableOpacity style={styles.detail} >
              <Text style={{ fontWeight: 'bold' }}>Student Name: </Text>
              <Text style={styles.text}>{project?.fullname ?? ''}</Text>
              <Text style={{ fontWeight: 'bold' }}>Project: </Text>
              <Text style={styles.text}>{project?.topic ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>DOB: </Text>
              <Text style={styles.text}>{project?.DOB ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>Internship Place: </Text>
              <Text style={styles.text}>{project?.place ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>Host organization: </Text>
              <Text style={styles.text}>{project?.host ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>Tentative Time: </Text>
              <Text style={styles.text}>{project?.tentative ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>Supervisor: </Text>
              <Text style={styles.text}>{project?.Supervisor ?? ''} </Text>
              <Text style={{ fontWeight: 'bold' }}>Students' email: </Text>
              <Text style={styles.text}>{project?.mail ?? ''} </Text>
            </TouchableOpacity>
            <View style={styles.tasks}>
              <View style={{ flex: 1 }}>
                <View style={styles.taskHeader}>
                  <Text style={styles.textTaskHeader}>TASKS LIST</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.lowerHeader}>Add task for students</Text>
                  <Divider />
                  <FormInput placeholder={'New Todo'} onChangeText={setTodo} value={todo} labelName="Write new tasks"/>
                  <FormButton
                    title='ADD TASKS'
                    modeValue='contained'
                    onPress={() => {
                      if (todo === '') Toast.show("Empty string")
                      else addTodo()
                    }}
                  >
                  </FormButton>
                  <Divider />
                </View>
              </View >
              <View >
                <FlatList
                  data={todos}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <Todos {...item} />}
                />
              </View>
            </View>
          </ScrollView >
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export const Projects_Detail = memo(ProjectDetail, isEqual);