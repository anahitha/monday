import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            inviteList: [],
            userId: firebase.auth().currentUser.email
        }  
        this.requestref = null;
    }
    getRequestedBooks = ()=>{
        this.requestref = db.collection("invites").where('status', '==', 'open').onSnapshot((snapshot)=>{
            var requestList = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                inviteList: requestList
            })
        })
    }
    componentDidMount(){
        this.getRequestedBooks();
    }
    componentWillUnmount(){
        this.requestref = null;
    }
        render(){
        return(
            <SafeAreaProvider>
            <View style = {styles.container}>
                <View style = {{flex: 1}}>
                    <MyHeader title = "View Events"></MyHeader>
                     {this.state.inviteList.length == 0?(
                        <View style = {{flex: 1}}>
                            <Text style = {{fontSize: 20}}>              Loading</Text>
                        </View>
                    ):(
                        <FlatList
          data={this.state.inviteList}
          renderItem={({item})=>(
            <View style={styles.container}>
                <View style = {styles.container}>
                <TouchableOpacity onPress = {()=>{
                this.props.navigation.navigate("EventDetails",{"details": item})
                 }}>
                    <Text style = {styles.captionText}>{"Event: " + item.invite}</Text>
                    <Text style = {styles.captionText}>{"Time: " + item.time}</Text>
                    <Text style = {styles.captionText}>{"Description: " + item.description}</Text>
                </TouchableOpacity>
                </View>
            </View>
            )}
                keyExtractor= {(item, index)=> index.toString()}
            /> 
                    )}
                </View>
            </View>
        </SafeAreaProvider>
        )
    }
}



const styles = StyleSheet.create({
    keyView: {
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    }, 
    button: {
      width:'75%',
      height:'30%',
      padding: 10,
      margin: 10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#15193c",
    },
    input: {
        width: '75%',
        height: 30,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 12,
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center'
    },
    buttonText:{
        color: 'black',
        fontSize: 20,
        marginRight: 10
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rbutton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
      },
    container: {
        flex: 1,
        backgroundColor: "#15193c",
        alignItems: 'flex-start'
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    postContainer: {
        flex: 1
    },
    postCard: {
        backgroundColor: "#181663",
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10)
    },
    authorContainer: {
        height: RFPercentage(10),
        padding: RFValue(10),
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    postImage: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    captionContainer: {
        padding: RFValue(10)
    },
    captionText: {
        fontSize: 18,
        color: "orange",
        paddingTop: RFValue(10)
    }

})