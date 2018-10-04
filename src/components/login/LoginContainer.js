/**
 * Created by Duong Le on 9/8/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'

import RouteKey from '../../constants/routeKey'
import {blackColor, blueColor} from '../../constants/color';

class LoginContainer extends React.Component {


  onChangeText = (type, text) => {
    this.setState({[type]: text});
  }


  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <View style={styles.headerView}>

          <View style={styles.logo}/>
          <Text style={[styles.textStyle, {
            fontSize: 18,
          }]}>
            lvtn
          </Text>

        </View>

        <View style={styles.bodyView}>

          <Text style={[styles.textStyle, {}]}>
            Sign in
          </Text>

          <TextInput
            style={styles.textInputHeight}
            placeholder={'num'}
          />


        </View>

        <View style={styles.footerView}>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  bodyView: {
    width: '90%',
    flex: 2,
  },
  footerView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'gray'
  },
  logo: {
    marginBottom: 10,
    marginTop: 25,
    height: 80,
    width: 80,
    backgroundColor: blueColor
  },
  textStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor
  },
  textInputStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor,
    width: '100%',
    height: 25,
    fontSize: 20,
  },

})


export default connect(state => ({}), dispatch => ({}))(LoginContainer);
