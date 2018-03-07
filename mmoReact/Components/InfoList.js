import React, { Component } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
// import { List, ListItem } from 'react-native-elements';

import styles from '../styles';

export default class InfoList extends Component {

    FlatListItemSeparator = () => {
        return (
            <View style={{height: 1, width: '100%', backgroundColor: '#607D8B'}} />
        )
    }

    render() {
        var customData = require('../ListInfo.json');
        return (
            <View style={styles.listContainer}>
                <FlatList data={customData}
                    renderItem={({item}) => <Text style={styles.item}>{item.first_name}</Text>}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    keyExtractor={item => item.email} />
            </View>
        );
    }
}

