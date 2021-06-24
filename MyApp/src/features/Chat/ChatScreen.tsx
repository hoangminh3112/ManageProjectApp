import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView,  TouchableOpacity } from "react-native";

import Loading from "../../components/Loading";
import { APP_SCREEN } from "../../navigation/screenType";
import { styles } from "./components/styles";
import firestore from '@react-native-firebase/firestore';
import { Divider, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const Chat = () => {
    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('THREADS')
            // .orderBy('latestMessage.createdAt', 'desc')
            .onSnapshot((querySnapshot) => {
                const threads = querySnapshot.docs.map((documentSnapshot) => {
                    return {
                        _id: documentSnapshot.id,
                        // give defaults
                        name: '',
                        ...documentSnapshot.data(),
                    };
                });

                setThreads(threads);

                if (loading) {
                    setLoading(false);
                }
            });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={threads}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <Divider />}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(APP_SCREEN.ROOM_SCREEN, { thread: item })
                        }}
                    >
                        <List.Item
                            title={item.name}
                            description='Item description'
                            titleNumberOfLines={1}
                            titleStyle={styles.listTitle}
                            descriptionStyle={styles.listDescription}
                            descriptionNumberOfLines={1}
                        />
                    </TouchableOpacity>
                )}
            />


        </SafeAreaView>
    )
}