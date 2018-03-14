import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textEntry: {
      height: 40,
      margin: 10,
      borderColor: 'gray', 
      borderWidth: 1,
      alignSelf: "stretch"
    },
    listContainer: {
      justifyContent: 'center',
      flex:1,
      margin: 10
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemBlock: {
      flexDirection: 'row',
      paddingBottom: 10,
    },
    itemBlockBio: {
      flexDirection: 'row',
      paddingBottom: 10,
      alignItems: 'center'
    },
    itemImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    itemImageBio: {
      width: 100,
      height: 100,
      borderRadius: 25,
    },
    itemMeta: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    itemName: {
      fontSize: 20,
    },
    itemDone: {
      fontSize: 20,
      marginTop: 20,
      color: 'black',
      alignSelf: 'center',
    },
    itemLastMessage: {
      fontSize: 14,
      color: "#111",
    },
    separator: {
      height: 0.5,
      width: "80%",
      alignSelf: 'center',
      backgroundColor: "#555"
    },
  });

export default styles;