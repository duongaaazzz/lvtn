/**
 * Created by Duong Le on 9/15/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RouteKey from '../../constants/routeKey'
import {blackColor, blueColor} from '../../constants/color';

class DetailsCardEvent extends React.Component {

  render() {
    return (
      <ScrollView>
        <View style={{
          flex: 1,
          // justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>

          <View style={{width: '100%', height: 210}}>
            <Image
              style={{
                flex: 1
              }}
              source={require('../../assets/image/background.png')}
              resizeMode={'contain'}/>
          </View>

          <View style={{
            height: 70,
            width: '100%',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 5
          }}>

            <View style={styles.tittleEvent}>
              <Text style={[styles.textStyle, {fontSize: 24, marginLeft: 15}]}>
                Vui Hội Trăng Rằm - 2018
              </Text>
            </View>


            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10
            }}>
              <TouchableOpacity>
                <View style={{
                  backgroundColor: blueColor,
                  height: 38,
                  width: 120,
                  borderRadius: 19,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={[styles.textStyle, {
                    fontSize: 17,
                    color: '#ffffff'
                  }]}>
                    Tham gia
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.viewInfo}>
            <Text style={[styles.textStyle, {fontWeight: '400'}]}> by </Text>
            <Text style={[styles.textStyle, {fontSize: 15}]}>
              Tương Lai Xanh Cần Thơ
            </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{height: 25, width: 20, alignItems: 'center', justifyContent: 'flex-end'}}>
              <Ionicons name='md-time' size={19} color={blackColor}/>
            </View>
            <Text style={[styles.textStyle, {fontSize: 15, marginLeft: 3, fontWeight: '400'}]}>
              Sept 21, Friday - Sept 23, Sunday.
            </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{height: 25, width: 20, alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons name='location-on' size={20} color={blackColor}/>
            </View>
            <Text style={[styles.textStyle, {fontSize: 15, marginLeft: 3, fontWeight: '400'}]}>
              Tra Cu, Tra Vinh
            </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{height: 25, width: 20, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <MaterialCommunityIcons name='ticket-confirmation' size={19} color={blackColor}/>
            </View>
            <Text style={[styles.textStyle, {fontSize: 15, marginLeft: 3, fontWeight: '400'}]}>
              230.000 đ
            </Text>
          </View>


          <View style={[styles.viewInfo, {flexDirection: 'row', alignItems: 'flex-end'}]}>
            <Text style={[styles.textStyle, {fontWeight: '400', marginTop: 15,}]}>
              Description
            </Text>

            <View
              style={{borderBottomWidth: 1, width: '70%', marginBottom: 8, marginHorizontal: 10, color: blackColor}}/>
          </View>

          <View style={[styles.viewInfo, {width: '90%', marginTop: 10}]}>
            <Text style={[styles.textStyle, {fontWeight: '400', fontSize: 13}]}>
              Tháng tám rộn ràng khiến ai trong mỗi chúng ta cũng đều rơi vào những vùng ký ức ngọt ngào của đêm
              Trung{'\n'}
              thu thời thơ ấu.{'\n'}
              “ Tùng dinh dinh cất tùng dinh dinh{'\n'}
              Tùng dinh dinh cất tùng dinh dinh”{'\n'}
              Câu hát quen thuộc được cất lên vào mỗi dịp Tết Trung Thu, người ta thường gắn nó với cái gọi là “ Tết của
              tình thân”. Thật vậy, Trung Thu là dịp để gia đình sum họp bên nhau cùng nhau sẽ chia những ngọt bùi. Và
              quan trọng hơn hết chính là dịp để các bé trao nhau những chiếc lồng đèn với nụ cười rạng rỡ trên môi,
              được hòa mình trong câu chuyện về Chú Cuội – Chị Hằng.
              Nhưng giữa những rộn ràng ấy, những thanh âm ấy, đâu đó vẫn có riêng cả một khoảng trời tĩnh lặng. Không
              phải em nhỏ nào cũng cầm trên tay chiếc lồng đèn, cũng được hưởng hương vị bánh trung thu ngọt lịm. v
            </Text>
          </View>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor
  },
  viewInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  tittleEvent: {
    width: '55%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})

export default connect(state => ({}), dispatch => ({}))(DetailsCardEvent);
