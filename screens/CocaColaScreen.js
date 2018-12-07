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
  AlertIOS,
  AsyncStorage,
  Picker,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

export default class CocaColaScreen extends React.Component {
  static navigationOptions = {
    title: 'The CocaCola Company',
  };

  render() {
    return (
      <View style={styles.container}>

      <LinearGradient colors={[ '#C337C4', '#1D2671']} style={{position: 'absolute', left: 0, right: 0, top: -50, height: 718,}}/>

        <ScrollView style={styles.container, {backgroundColor:'transparent'}} contentContainerStyle={styles.contentContainer}>

            <View style={styles.columnContainer}>

                <View style={styles.rowContainer}>

                    <Image source= {{uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/61/e6/47/61e64722-f5de-88da-9f5b-4d42e7589415/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/246x0w.jpg"}}
                    style={styles.thumbnail}/>

                    <Text style={styles.title}>The CocaCola Company</Text>

                </View>

                <Text style={styles.getStartedText}>How many cokes do you want?</Text>

                <TextInput style={styles.input}></TextInput>

                <Text style={styles.getStartedText}>Please, type your Direction</Text>

                <TextInput style={styles.input}></TextInput>

                <Text style={styles.getStartedText}>Which flavour do you want?</Text>

                <Picker
                  style={{width:150, marginLeft:95, }}>
                  <Picker.Item label="CocaCola" value="CC" />
                  <Picker.Item label="CocaCola zero" value="CCZ" />
                  <Picker.Item label="CocaCola light" value="CCL" />
                  <Picker.Item label="Sprite" value="SPR" />
                  <Picker.Item label="Fanta" value="FNT" />
                </Picker>

                <Text style={styles.getStartedText}>Select the way of payment:</Text>

                <Picker
                  style={{width:150, marginLeft:95, }}>
                  <Picker.Item label="Visa" value="CC" />
                  <Picker.Item label="MasterCard" value="CCZ" />
                  <Picker.Item label="PayPal" value="CCL" />
                  <Picker.Item label="Bitcoins" value="SPR" />
                  <Picker.Item label="Cash" value="FNT" />
                  <Picker.Item label="Doctas" value="DCT" />
                </Picker>

                <View style={styles.rowContainer}>

                    <Button onPress={this._BackToHome} title="       Back To Home" color="#6A04FA"/>

                    <Button onPress={this._Purchase} title="Purchase" color="#6A04FA"/>

                </View>
            </View>

        </ScrollView>

      </View>
    );
  }

  _Purchase () {
    AlertIOS.alert(
     'Coming Soon!',
     'This part has not been developed yet.'
    );
  }

  _fetchAsync = async () => {
  let data = await (await fetch('http://http://192.168.60.127:8000/users/current_user/')).json();
  console.log(data)
  return data;
  };

  _BackToHome = async () => {
    this.props.navigation.navigate('Main');
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
    marginTop:10,
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
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    height: 34,
    width: 285,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    color:"#000000",
  },
  getStartedContainer2: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor:'white',
    borderRadius:10,
    paddingTop:10,
    paddingBottom:15,
    marginTop:115,
    width: 275,
  },
  getStartedContainer3: {
    height:800,
    backgroundColor:"transparent",
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    alignItems:"center"
  },
  columnContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777',
    marginTop:20,
    marginLeft:5,
  },
  thumbnail: {
    flex: 1,
    height: 75,
    width: undefined
  },
});