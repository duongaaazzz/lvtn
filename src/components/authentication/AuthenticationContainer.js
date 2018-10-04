/**
 * Created by Duong Le on 9/15/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'

import RouteKey from '../../constants/routeKey'
import {grayColor} from '../../constants/color';

class AuthenticationContainer extends React.Component {


  componentDidMount() {
    setTimeout(() => {
      NavigationServices.navigate(RouteKey.LoginScreen)
    }, 500)
  }


  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>check token</Text>

        <ActivityIndicator size="small" color={grayColor}/>


      </View>
    )
  }
}

export default connect(state => ({}), dispatch => ({}))(AuthenticationContainer);
