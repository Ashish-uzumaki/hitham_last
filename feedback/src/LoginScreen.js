import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from 'react-native';
// import axios from 'axios';
import { encryptme } from './Global';
import Login from './components/Login';
import Rest from './Rest';

//  global.serviceURL = 'http://172.16.80.39:8085/hitham/webapi/songlist';
// global.serviceURL = 'http://localhost:8085/hitham/webapi/parent/fetchall';
global.serviceURL = 'http://172.16.80.39:8085/hitham/webapi/recording/myres';

const imageWidth = Dimensions.get('window').width / 2;
class LoginScreen extends Component {
    async doLogin(u, p) {
        try {
            const encryptedp = encryptme(p);  
            console.log(u);
            console.log(encryptedp);
            console.log('sending data...');

        // const body = JSON.stringify({ parent_id: u, parent_password: encryptedp });
        // const response = await Rest.post(global.serviceURL, body);
        // // console.log('bc');
        // if (response != null) {
        //     console.log('I got the details baby');
        //     console.log(u);
        //     console.log(encryptedp);
        // }
        // if (response == null) {
        //     console.log('Could not connect to Server');
        // }
       console.log('hi');
         const { navigate } = this.props.navigation;
        await navigate('Feedback', { recording: 'appy', artist: 'awer' });
        }
         catch (error) {
            console.log(error);
        } 
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}> 
            <Image style={styles.logo} source={require('./components/images/hithamlogo.png')} />
            <KeyboardAvoidingView behavior='padding' style={styles.logocontainer}>
            <Text style={styles.text}>Welcome to Hitham!</Text>
                <Login doLogin={this.doLogin.bind(this)} />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>       
    );
  }
}  
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logocontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      width: imageWidth,
      height: imageWidth,
    },
    loginformcontainer: {
  
    },
    text: {
      fontSize: 16,
      letterSpacing: -0.5,
      fontWeight: '400',
    },
  };

  export default LoginScreen;
