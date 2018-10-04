/**
 * Created by Duong Le on 9/8/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'
import {HomeSwitch} from '../../navigation/AppNavigator'

class HomeContainer extends React.Component {

  render() {
    return (
      <HomeSwitch ref={navigatorRef => {
        NavigationServices.setTopLevelNavigatorHomeTab(navigatorRef);
      }} />
    )
  }
}

export default connect(state => ({}), dispatch => ({}))(HomeContainer);
