import React, { Component } from 'react';
import { Modal, Image, Text, TouchableHighlight, View, ScrollView, Animated, Easing } from 'react-native';

import styles from '../styles';

export default class InfoListDetail extends Component{
    componentDidMount(){
            Animated.timing(this.props.fadeOut, {
                toValue: 1,
                duration: 3000,
            }).start()
    }

    render(){
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        this.props.onDismiss() }}>
                    <View style={{marginTop: 22}}>
                        <ScrollView>
                            <View style={styles.itemBlockBio}>
                                <Image source={{uri:this.props.selectedItem.avatar}} style={styles.itemImageBio} />
                                <Text style={styles.itemName}>{this.props.selectedItem.first_name} {this.props.selectedItem.last_name}</Text>
                            </View>
                            <Animated.Text style={{fontSize: 20, opacity:this.props.fadeOut}}>{this.props.selectedItem.bio}</Animated.Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.onDismiss() }}>
                                <Text style={styles.itemDone}>Done</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
}