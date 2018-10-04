/**
 * Created by Duong Le on 9/15/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, Dimensions, Image, StyleSheet} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'

import RouteKey from '../../constants/routeKey'
import {blackColor, grayColor} from '../../constants/color';

const {width, height} = Dimensions.get('window')


export default class ItemSearch extends React.Component {

  render() {
    return (
      <TouchableOpacity>
        <View style={{
          width: width * 0.8,
          height: 50,
          marginTop: 30,
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <View style={{
            flexDirection: 'row',
          }}>
            <Image
              style={{
                width: 50, height: 50, borderRadius: 25
              }}
              source={require('../../assets/image/background.png')}
              resizeMode={'cover'}/>

            <View style={{flex: 1, marginHorizontal: 20}}>
              <Text
                style={[styles.textStyle, {fontSize: 17}]}
                numberOfLines={1}
              >
                GALA - Vui Hội Trăng Rằm Tương Lai Xanh Cần Thơ
              </Text>

              <View style={{flexDirection: 'row', width: '100%', height: 20, alignItems: 'center',marginTop:5}}>
                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: grayColor}}/>
                <Text style={[styles.textStyle, {fontWeight: '400', fontSize: 14, marginLeft: 5,}]}>
                  1km away
                </Text>
              </View>

            </View>
          </View>

          <View style={{borderBottomWidth: 1, borderBottomColor: grayColor, width: '100%', marginTop: 15}}/>


        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor
  },
})