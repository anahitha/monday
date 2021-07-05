import * as React from 'react';
import { render } from 'react-dom';
import {Alert, View, Text} from 'react-native';
import {Header, Icon, Badge} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class MyHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            user: firebase.auth().currentUser.email
        }
    }
    leftComponent(){
        if(this.props.title != 'Settings'){
            return(
                <View style = {styles.screen}>
                    <TouchableOpacity style = {styles.button} onPress = {this.props.navigation.navigate('Settings')}>
                    </TouchableOpacity>
                </View>
            )
        }
        else{
            return(
                <View style = {styles.screen}>
                    <TouchableOpacity style = {styles.button} onPress = {this.props.navigation.navigate('Home')}>
                    </TouchableOpacity>
                </View>
            )
        }
    }
  render(){ 
    return(
        <Header 
        centerComponent = {{text: this.props.title}} style= {{
            color: '#ffffff',
            fontSize: 45,
            fontWeight: "bold"}}
        //rightComponent = {this.leftComponent()}
        backgroundColor = 'pink'></Header>
    )
}
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
      }
})