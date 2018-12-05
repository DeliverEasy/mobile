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
  AlertIOS
} from 'react-native';

import { WebBrowser, LinearGradient } from 'expo';

export default class UserScreen extends React.Component {

    static navigationOptions ={
        title: "User",
    };

    render(){
        return(

            <View style={styles.container}>

                 <LinearGradient colors={[ '#C337C4', '#1D2671']}
                 style={{position: 'absolute', left: 0, right: 0, top: -50, height: 718,}}/>

                <ScrollView>

                    <View style={styles.rowContainer2}>
                        <Image style={{margin:20, height:125, width:125, borderRadius:5,}} source={require('../assets/images/sape.jpg')}/>
                        <View style={styles.columnContainer}>
                            <Text style={{fontSize:18}}> Username: </Text>
                            <Text style={styles.title}> MateSape </Text>
                        </View>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}> Membership: </Text>
                        <Text style={{paddingLeft: 10, paddingTop: 5,}}> Premium </Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}>Name and Surname: </Text>
                        <Text style={{paddingLeft: 10, paddingTop: 5,}}> Mateo Cetti </Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}>E-Mail: </Text>
                        <Text style={{paddingLeft: 10, paddingTop: 5,}}> mateocetti2000@hotmail.com </Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}>Telephone Number: </Text>
                        <Text style={{paddingLeft: 10, paddingTop: 5,}}>+54 9 3516455611</Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}>Country: </Text>
                        <Text style={{paddingLeft: 10, paddingTop: 5,}}>Argentina</Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Text style={styles.subTitle}>Description: </Text>
                        <Text style={{paddingLeft: 1, paddingTop: 5}}>Just a student from the ITS Villada who has to do a project for the programming subject. I like programming, VideoGames, EDM Music and lots of stuff.</Text>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Button title="Edit Profile" color="#6A04FA" onPress={this._AlertU}></Button>
                    </View>

                    <View style={styles.rowContainer2}>
                        <Button title="Log Out" color="#6A04FA" onPress={this._SingOutAsync}></Button>
                    </View>

                </ScrollView>
            </View>
        )
    }

    _SingOutAsync = async () => {
        await AsyncStorage.clear();
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
        alignItems:"center",
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#000000',
        shadowRadius: 1,
        shadowOpacity: 1.0,
    },
    columnContainer:{
        flexDirection:"column",
        alignItems:"center",
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    },
    subTitle: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    rowContainer2: {
        flexDirection:"row",
        alignItems:"center",
        backgroundColor: '#FFFFFF',
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#000000',
        shadowRadius: 1,
        shadowOpacity: 1.0,
        paddingTop:12,
        paddingBottom:12,
    },
})