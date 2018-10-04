/**
 * Created by Duong Le on 9/15/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import {MainTab} from './AppNavigator'
import NavigationServices from './NavigationServices';

export default class MainTabContainer extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 25, backgroundColor: '#37A8FF'}}/>
        <MainTab ref={navigatorRef => {
          NavigationServices.setTopLevelNavigatorMainTab(navigatorRef)
        }}/>
      </View>
    )
  }
}

