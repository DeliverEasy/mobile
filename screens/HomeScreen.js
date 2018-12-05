import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage,
  TextInput,
  AlertIOS
} from 'react-native';

import { WebBrowser, LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Deliver Easy [Version: Alpha 0.0.6]",
  };

  render() {
    return (
      <View style={styles.container}>

      <LinearGradient colors={[ '#C337C4', '#1D2671']}
              style={{position: 'absolute', left: 0, right: 0, top: -50, height: 718,}}/>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/61/e6/47/61e64722-f5de-88da-9f5b-4d42e7589415/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/246x0w.jpg"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>The CocaCola Company</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>Buy as many cokes as you want</Text>
                     <Button title="Realizar Pedido" color="#000000" onPress={this._TurnCocaScreen}></Button>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arcor_textlogo.png/245px-Arcor_textlogo.png"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>Arcor</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>Te invitamos a descubrir informacion de productos y marcas</Text>
                    <Button title="Realizar Pedido" color="#000000" onPress={this._AlertU}></Button>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "https://www.america-retail.com/static//2018/08/pepsico-900.jpg"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>PepsiCo</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>Fabricacion, distribucion y comercializacion de bebidas y aperitivos</Text>
                     <Button title="Realizar Pedido" color="#000000" onPress={this._AlertU}></Button>
                </View>

            </View>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "data:image/png;base64,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"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>Marlboro</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>Philip Morris</Text>
                     <Button title="Realizar Pedido" color="#000000" onPress={this._AlertU}></Button>
                </View>

            </View>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "https://http2.mlstatic.com/indestructible-hulk-vol1ovni-press-D_NQ_NP_202405-MLA20857094605_082016-F.jpg"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>Editorial Ovni Press</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>Podras comprar desde todos los paises de america, desde el sur al norte</Text>
                     <Button title="Realizar Pedido" color="#000000" onPress={this._AlertU}></Button>
                </View>

            </View>

            <View style={styles.rowContainer}>
                <Image source= {{uri: "https://tuquejasuma.com/media/images/entity420_square.jpeg"}}
                style={styles.thumbnail}
                resizeMode="contain" />
                <View style={styles.rowText}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>Grido Helado</Text>
                    <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>fabricación industrial heladera con un nuevo enfoque de mercado que intenta cambiar hábitos de consumo.</Text>
                     <Button title="Realizar Pedido" color="#000000" onPress={this._AlertU}></Button>
                </View>

            </View>

        </ScrollView>

      </View>

    );

  }

  _AlertU () {
    AlertIOS.alert(
     'Coming Soon!',
     'This part has not been developed yet.'
    );
  }

  _SingOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('SignIn');
  }

    _DoNothing = async () => {
        console.log("sape")
    }

    _TurnCocaScreen = async () => {
        this.props.navigation.navigate('CocaCola');
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
    backgroundColor: 'transparent',
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
    marginHorizontal: 0,
    backgroundColor:"white",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: '#FFFFFF',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
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
    color: 'rgba(96,100,109, 1)',
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
    margin: 10,
    marginBottom: 0,
    height: 34,
    width: 275,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 16,
    color:"#FFFFFF"
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column',
  }
});
