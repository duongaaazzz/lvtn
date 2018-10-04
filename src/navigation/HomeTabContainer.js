/**
 * Created by Duong Le on 9/16/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import {HomeTab} from './AppNavigator'
import NavigationServices from './NavigationServices';

export default class HomeTabContainer extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <HomeTab ref={navigatorRef => {
          NavigationServices.setTopLevelNavigatorHomeTab(navigatorRef);
        }}/>
      </View>
    )
  }
}
