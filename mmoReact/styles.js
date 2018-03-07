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
  });

export default styles;