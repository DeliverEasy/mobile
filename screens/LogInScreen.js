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
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <LinearGradient
            colors={[ '#C337C4', '#1D2671']}
            style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: -50,
            height: 800,
            }}/>

            <View style={styles.getStartedContainer}>

                <Text style={styles.getStartedText}>LOG IN</Text>

                <Text style={styles.getStartedText}>Version: Alpha 0.0.3</Text>
            </View>

            <View style={styles.getStartedContainer2}>

                <View style={styles.getStartedContainer}>

                    <Text style={styles.getStartedText}>USER </Text>

                    <TextInput style={styles.input}></TextInput>

                </View>

                <View style={styles.getStartedContainer}>

                    <Text style={styles.getStartedText}>PASSWORD</Text>

                    <TextInput style={styles.input}></TextInput>

                </View>

                <View style={styles.container,{backgroundColor:'transparent'}}>

                    <Button onPress={this._SingInAsync} title="Log In" color="#6A04FA"/>

                    <Button onPress={this._fetchAsync} title="Try Database" color="#000000"/>

                </View>

            </View>

            <View style={styles.getStartedContainer3}>
            </View>

        </ScrollView>

      </View>
    );
  }

  _fetchAsync = async () => {
  let data = await (await fetch('http://http://192.168.60.127:8000/users/current_user/')).json();
  console.log(data)
  return data;
  };

  _SingInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
    console.log(AsyncStorage.getItem('userToken'));
      }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: 'transparent',

  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: '#FFFFFF',
  },
  codeHighlightContainer: {
    backgroundColor: 'transparent',
    borderRadius: 3,
    paddingHorizontal: 4,

  },
  getStartedText: {
    fontSize: 17,
    color: '#000000',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  input: {
      margin: 20,
      marginBottom: 0,
      height: 34,
      width: 175,
      paddingHorizontal: 10,
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 16,
      color:"#000000"
    },
    getStartedContainer2: {
        alignItems: 'center',
        marginHorizontal: 50,
        backgroundColor:'white',
        borderRadius:10,
        paddingTop:10,
        paddingBottom:15,
        marginTop:35,
        width: 275,
    },
    getStartedContainer3: {
        height:800,
        backgroundColor:"transparent",
        },
});