/**
 * Created by Duong Le on 9/8/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, TextInput, StyleSheet,KeyboardAvoidingView} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'
import Entypo from 'react-native-vector-icons/Entypo';

import RouteKey from '../../constants/routeKey'
import {blackColor, blueColor} from '../../constants/color';

class LoginContainer extends React.Component {


  onChangeText = (type, text) => {
    this.setState({[type]: text});
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.root}>
        <View style={styles.titileWrapper}>
          <Text style={styles.text} >Login</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            autoCapitalize='none'
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input) => (this.usernameInput = input)}
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ username: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            returnKeyType="done"
            ref={(input) => (this.passwordInput = input)}
            // onSubmitEditing={}
            secureTextEntry
            placeholderTextColor="gray"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}> Forgot your login details? </Text>
              <TouchableOpacity>
                <Text style={styles.link}> Get help </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignContent: 'center' }}>
            <TouchableOpacity style={styles.button}
              // onPress={}
            >
              <Text style={styles.buttonLable}>Log in</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity*/}
            {/*style={styles.smallButton}*/}
            {/*// onPress={}*/}
            {/*>*/}
            {/*<Entypo size={45} name="facebook-with-circle" color="#318DEE" />*/}
            {/*</TouchableOpacity>*/}

          </View>
        </View>
        <View style={{ flex: 0.1, alignItems: 'center', backgroundColor: '#f2f2f2' }}>
          <View style={{ flexDirection: 'row', top: 3 }}>
            <Text style={styles.text}> Don't have an account? </Text>
            <TouchableOpacity
              underlayColor='#ffb951'
              // onPress={}
            >
              <Text style={styles.link}> Sign Up ! </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

    )
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
  titileWrapper: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'orange'
  },
  buttonsWrapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'cyan'
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: '#faf9f9',
    borderColor: '#e4e4e4',
    margin: 5,
    paddingLeft: 18,
    borderRadius: 30,
    width: '78%',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonLable: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  link: {
    color: '#0c9eff',
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: blueColor,
    padding: 10,
    width: '60%',
    margin: 5,
    borderRadius: 30,
  },
  smallButton: {
    alignSelf: 'center'
  }
})



export default connect(state => ({}), dispatch => ({}))(LoginContainer);
