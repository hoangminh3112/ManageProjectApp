import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,

    },
    rootContainer: {
        flex: 1,
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 30,
        right: 0,
        zIndex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    buttonLabel: {
        fontSize: 22,
        textAlign: 'center',
        alignItems: 'center',

    },
    listTitle: {
        fontSize: 22,
    },
    listDescription: {
        fontSize: 16,
    },
    button:{
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      systemMessageWrapper: {
        backgroundColor: '#6646ee',
        borderRadius: 4,
        padding: 5
      },
      systemMessageText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
      },
      icon: {
          justifyContent: "flex-start",
          margin: 5,
      }


});
