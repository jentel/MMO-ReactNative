import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

import styles from '../styles';

export default class LaunchLibraryList extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
      }

    async componentDidMount(){
        try {
            let response = await fetch('https://launchlibrary.net/1.3/launch/Falcon');
            let responseJson = await response.json();
            await this.setStateAsync({isLoading: false, dataSource: responseJson.launches})
        } catch(error){
            console.error(error);
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View style={styles.separator} />
        )
    }

    _renderItem(data){
        let {item, index} = data;

        return(
            <View style={styles.itemBlock}>
                <View style={styles.itemMeta}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemLastMessage}>{item.windowstart}</Text>
                </View>
            </View>
        )
    }

    render(){
        if(this.state.isLoading){
            return(
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                />
            </View>
        );
    }
}