/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, View, StatusBar} from 'react-native';
import {requestPermissions} from './src/actions/app';

import {connect, Provider} from 'react-redux'
import store from './src/redux/store'

import {AppNavigator} from './src/navigation/AppNavigator';
import NavigationServices from './src/navigation/NavigationServices';

class App extends Component {

  constructor(props) {
    super(props)

    Platform.OS === 'android' && requestPermissions()

  }

  render() {
    return <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="#37A8FF"
        barStyle="light-content"
        hidden={true}
      />
      <AppNavigator ref={navigatorRef => {
        NavigationServices.setTopLevelNavigator(navigatorRef)
      }}/>
    </View>
  }
}


const ConnectedApp = connect(state => ({}), dispatch => ({}))(App)


export default function provider() {
  return <Provider store={store}>
    <ConnectedApp/>
  </Provider>
}