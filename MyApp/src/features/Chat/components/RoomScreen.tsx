// import React, { useContext, useEffect, useState } from 'react';
// import { Text, View, ActivityIndicator } from 'react-native';
// import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
// import { IconButton } from 'react-native-paper';
// import { AuthContext } from '../../../navigation/AuthProvider';
// import { styles } from './styles';
// import firestore from '@react-native-firebase/firestore';


// export const RoomScreen = ({ route }: any) => {
//     const { user }: any = useContext(AuthContext);
//     const currentUser = user.toJSON()
//     const { thread } = route.params
//     const [messages, setMessages] = useState([

//         /**
//          * Mock message data
//          */
//         // example of system message
//         {
//             _id: 0,
//             text: 'New room created.',
//             createdAt: new Date().getTime(),
//             system: true
//         },
//         // example of chat message
//         {
//             _id: 1,
//             text: 'Henlo!',
//             createdAt: new Date().getTime(),
//             user: {
//                 _id: 2,
//                 name: 'Test User'
//             }
//         }
//     ]);

//     const handleSend = async (messages: any) => {
//         const text = messages[0].text;

//         firestore()
//             .collection('THREADS')
//             .doc(thread._id)
//             .collection('MESSAGES')
//             .add({
//                 text,
//                 createdAt: new Date().getTime(),
//                 user: {
//                     _id: currentUser.uid,
//                     email: currentUser.email
//                 }
//             });
//         await firestore()
//             .collection('THREADS')
//             .doc(thread._id)
//             .set(
//                 {
//                     latestMessage: {
//                         text,
//                         createdAt: new Date().getTime()
//                     }
//                 },
//                 { merge: true }
//             );
//         }
//         useEffect(() => {
//             const messagesListener = firestore()
//                 .collection('THREADS')
//                 .doc(thread._id)
//                 .collection('MESSAGES')
//                 .orderBy('createdAt', 'desc')
//                 .onSnapshot(querySnapshot => {
//                     const messages = querySnapshot.docs.map(doc => {
//                         const firebaseData = doc.data();

//                         const data = {
//                             _id: doc.id,
//                             text: '',
//                             createdAt: new Date().getTime(),
//                             ...firebaseData
//                         };

//                         if (!firebaseData.system) {
//                             data.user = {
//                                 ...firebaseData.user,
//                                 name: firebaseData.user.email
//                             };
//                         }

//                         return data;
//                     });

//                     setMessages(messages);
//                 });

//             return () => messagesListener();
//         }, [])

//     const renderBubble = (props: any) => {
//         return (
//             // Step 3: return the component
//             <Bubble
//                 {...props}
//                 wrapperStyle={{
//                     right: {
//                         // Here is the color change
//                         backgroundColor: '#6646ee'
//                     }
//                 }}
//                 textStyle={{
//                     right: {
//                         color: '#fff'
//                     }
//                 }}
//             />
//         );
//     }

//     // function scrollToBottomComponent() {
//     //     return (
//     //       <View style={styles.bottomComponentContainer}>
//     //         <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
//     //       </View>
//     //     );
//     //   }

//     const renderSend = (probs: any) => {
//         return (
//             <Send {...probs}>
//                 <View style={styles.sendingContainer}>
//                     <IconButton icon='send-circle' size={32} color='#6646ee' />
//                 </View>
//             </Send>
//         )
//     }

//     const renderLoading = () => {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size='large' color='#6646ee' />
//             </View>
//         );
//     }

//     return (
//         <GiftedChat
//             messages={messages}
//             onSend={handleSend}
//             user={{ _id: 1, name: 'User Test' }}
//             renderBubble={renderBubble}
//             placeholder='Type your message here...'
//             showUserAvatar
//             alwaysShowSend
//             renderSend={renderSend}
//             scrollToBottom
//             renderLoading={renderLoading}

//         />

//     )
// }
import React, { useState, useContext, useEffect } from 'react';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage
} from 'react-native-gifted-chat';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
import { styles } from './styles';


export  const RoomScreen = ({ route }:any) => {
  

  const [messages, setMessages] = useState([]);
  const { thread } = route.params;
  const { user }:any = useContext(AuthContext);
  const currentUser = user.toJSON();

  async function handleSend(messages) {
    const text = messages[0].text;

    firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email
        }
      });

    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime()
          }
        },
        { merge: true }
      );
  }

  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email
            };
          }

          return data;
        });

        setMessages(messages);
      });

    // Stop listening for updates whenever the component unmounts
    return () => messagesListener();
  }, []);

  function renderBubble(props:any) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee'
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }

  function renderSend(props:any) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
      </View>
    );
  }

  function renderSystemMessage(props:any) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='Type your message here...'
      alwaysShowSend
      showUserAvatar
      scrollToBottom
      renderBubble={renderBubble}
      renderLoading={renderLoading}
      renderSend={renderSend}
      scrollToBottomComponent={scrollToBottomComponent}
      renderSystemMessage={renderSystemMessage}
    />
  );
}

