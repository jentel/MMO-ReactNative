import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, Image } from 'react-native';
// import { List, ListItem } from 'react-native-elements';

import styles from '../styles';

export default class InfoList extends Component {

    FlatListItemSeparator = () => {
        return (
            <View style={styles.separator} />
        )
    }

    renderItem(data){
        let {item, index} = data;

        return(
            <View style={styles.itemBlock}>
                <Image source={{uri:item.avatar}} style={styles.itemImage} />
                <View style={styles.itemMeta}>
                    <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
                    <Text style={styles.itemLastMessage}>{item.email}</Text>
                </View>
            </View>
        )
    }

    render() {
        var customData = require('../ListInfo.json');
        return (
            <View style={styles.listContainer}>
                <FlatList data={customData}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    keyExtractor={item => item.email} />
            </View>
        );
    }
}

