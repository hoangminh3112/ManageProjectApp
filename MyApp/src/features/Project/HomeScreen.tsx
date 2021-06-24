import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { View, SafeAreaView, ListRenderItemInfo, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { StudentsList } from '../../model/studentsList';
import { navigate } from '../../navigation/navigationService';
import { APP_SCREEN } from '../../navigation/screenType';
import { GET_LIST_STUDENT } from '../../redux_saga/reducer/actionTypes';
import { ListStudents } from './components/StudentsList';
import styles from './components/styles';

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Array<StudentsList>>([]);
  
  const onItemPress = useCallback((studentsList: StudentsList) => {
    navigation.navigate(APP_SCREEN.PROJECT_DETAIL, { studentsList });
    console.log('onItemPress')
  }, []);



  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<StudentsList>) => {
      return <ListStudents studentsList={item} onItemPress={onItemPress} />;
    },
    [onItemPress],
  );



  const renderItemSeparatorComponent = useCallback(() => {
    return <View style={[styles.spacer]} />;
  }, []);

  const keyExtractor = useCallback((item: StudentsList) => item.id, []);

  useEffect(() => {
    dispatch({
      type: GET_LIST_STUDENT,
      payload: {
        url: 'https://myap-7e2ae-default-rtdb.firebaseio.com/Sheet1.json',
        setData: setData,
      },
    }
    )
    
    console.log('response');
  }, []);

  // useEffect(() => {
  //   fetch('https://myap-7e2ae-default-rtdb.firebaseio.com/Sheet1.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderItemSeparatorComponent}
          contentContainerStyle={[styles.content]}
        />
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f5f5f5',
//     flex: 1,
//     borderWidth: 1
//   },

//   headerText:{
//     alignSelf: 'center',
//   }
// });


export const ProjectsList = memo(HomeScreen, isEqual);