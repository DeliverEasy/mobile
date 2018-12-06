import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
  AlertIOS,
  Switch,
} from 'react-native';

import { WebBrowser, LinearGradient } from 'expo';

export default class RegisterScreen extends React.Component {

    render(){
        return(

            <View style={styles.container}>

                 <LinearGradient colors={[ '#C337C4', '#1D2671']}
                 style={{position: 'absolute', left: 0, right: 0, top: -50, height: 718,}}/>

                <ScrollView>

                    <View style={styles.columnContainer}>

                        <Text style={styles.title}>Registration Form</Text>

                        <View style={styles.rowContainer}>

                            <Text style={styles.subTitle}>Email:</Text>

                            <TextInput style={styles.input}></TextInput>

                        </View>

                        <View style={styles.rowContainer}>

                            <Text style={styles.subTitle} >Password:</Text>

                            <TextInput style={styles.input2} secureTextEntry={true}></TextInput>

                        </View>

                        <View style={styles.rowContainer}>

                            <Text style={styles.subTitle} >Repeat Password:</Text>

                            <TextInput style={styles.input3} secureTextEntry={true}></TextInput>

                        </View>

                       <View style={styles.rowContainer}>

                            <Text style={styles.subTitle} >Recieve news about DeliverEasy?</Text>

                            <Switch/>

                        </View>

                        <View style={styles.rowContainer}>

                        <Button onPress={this._goBack} title="Go Back" color="#6A04FA"/>

                        <Button onPress={this._AlertU} title="                                Register" color="#6A04FA"/>

                        </View>

                    </View>

                </ScrollView>
            </View>
        )
    }

    _goBack = async () => {
        this.props.navigation.navigate('SignIn');
    }

  _AlertU () {
    AlertIOS.alert(
     'Coming Soon!',
     'This part has not been developed yet.'
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection:"row",

    },
    columnContainer:{
        alignItems:"baseline",
        flexDirection:"column",
        marginHorizontal: 25,
        backgroundColor:'white',
        borderRadius:10,
        padding:5,
        paddingBottom:15,
        marginTop:100,
        width: 325,
    },
    title: {
        paddingLeft: 55,
        paddingTop: 5,
        paddingBottom:25,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    subTitle: {
        padding: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
  input: {
      marginTop: 5,
      marginBottom: 10,
      height: 34,
      padding: 5,
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 16,
      color:"#000000",
      width: 225,
  },
  input2: {
      marginTop: 5,
      marginBottom: 10,
      height: 34,
      padding: 5,
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 16,
      color:"#000000",
      width:190,
  },
  input3: {
      marginTop: 5,
      marginBottom: 10,
      height: 34,
      padding: 5,
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 16,
      color:"#000000",
      width:130,
  },
})