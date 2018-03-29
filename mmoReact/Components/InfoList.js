import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, Image, TouchableHighlight, Animated } from 'react-native';

import styles from '../styles';
import ModalView from './InfoListDetail';

export default class InfoList extends Component {
    constructor() {
        super();
        this.state = {
          modalVisible: false,
          id: null,
          selectedItem: null,
          fadeIn: new Animated.Value(0)
        };
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return { title: "Users"}
    }
      
    _onPressItem(item) { this.setState({modalVisible: true, selectedItem: item})};
    _hideModal = () => { this.setState({modalVisible: false})}

    FlatListItemSeparator = () => {
        return (
            <View style={styles.separator} />
        )
    }

    _renderItem(data){
        let {item, index} = data;

        return(
            <TouchableHighlight onPress={() => {this._onPressItem(item)}} >
                <View style={styles.itemBlock}>
                    <Image source={{uri:item.avatar}} style={styles.itemImage} />
                    <View style={styles.itemMeta}>
                        <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
                        <Text style={styles.itemLastMessage}>{item.email}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        var customData = require('../ListInfo.json');
        return (
            <View style={styles.listContainer}>
                {this.state.selectedItem && <ModalView modalVisible={this.state.modalVisible} 
                    selectedItem={this.state.selectedItem} 
                    fadeIn={this.state.fadeIn}
                    onDismiss={this._hideModal} />}
                <FlatList data={customData}
                    renderItem={this._renderItem.bind(this)}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    keyExtractor={item => item.email} />
            </View>
        );
    }
}

