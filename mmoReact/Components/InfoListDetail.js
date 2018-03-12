import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, ScrollView } from 'react-native';

export default class InfoListDetail extends Component{

    render(){
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        this.props.onDismiss()
                    }}>
                    <View style={{marginTop: 22}}>
                        <ScrollView>
                            <Text>{JSON.stringify(this.props.selectedItem)}</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.onDismiss() }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        );
    }
}