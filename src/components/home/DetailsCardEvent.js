/**
 * Created by Duong Le on 9/15/18.
 */


import React from 'react';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RouteKey from '../../constants/routeKey'
import { blackColor, blueColor } from '../../constants/color';
//const { navigation } = this.props;
class DetailsCardEvent extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    const data = this.props.navigation.getParam('data', 'NO-ID')
    console.log('data in detail: ', data);
    return (<View style={{ flex: 1 }}>


      <ScrollView>
        <View style={{
          flex: 1,
          // justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>


          <View style={{ width: '100%', height: 210 }}>
            <ImageBackground
              style={{
                flex: 1
              }}
              source={{ uri: data.avatar }}
              resizeMode={'contain'} />
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
              <Text style={[styles.textStyle, { fontSize: 24, marginLeft: 15 }]}>
                {data.event_title}
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
            <Text style={[styles.textStyle, { fontWeight: '400' }]}> by </Text>
            <Text style={[styles.textStyle, { fontSize: 15 }]}>
              {data.username}
              </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{ height: 25, width: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Ionicons name='md-time' size={19} color={blackColor} />
            </View>
            <Text style={[styles.textStyle, { fontSize: 15, marginLeft: 3, fontWeight: '400' }]}>
              Sept 21, Friday - Sept 23, Sunday.
              </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{ height: 25, width: 20, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name='location-on' size={20} color={blackColor} />
            </View>
            <Text style={[styles.textStyle, { fontSize: 15, marginLeft: 3, fontWeight: '400' }]}>
              {data.location}
              </Text>
          </View>

          <View style={styles.viewInfo}>
            <View style={{ height: 25, width: 20, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <MaterialCommunityIcons name='ticket-confirmation' size={19} color={blackColor} />
            </View>
            <Text style={[styles.textStyle, { fontSize: 15, marginLeft: 3, fontWeight: '400' }]}>
              {data.price}
              </Text>
          </View>


          <View style={[styles.viewInfo, { flexDirection: 'row', alignItems: 'flex-end' }]}>
            <Text style={[styles.textStyle, { fontWeight: '400', marginTop: 15, }]}>
              Description
              </Text>

            <View
              style={{ borderBottomWidth: 1, width: '70%', marginBottom: 8, marginHorizontal: 10, color: blackColor }} />
          </View>

          <View style={[styles.viewInfo, { width: '90%', marginTop: 10 }]}>
            <Text style={[styles.textStyle, { fontWeight: '400', fontSize: 13 }]}>
              {data.description}
              </Text>
          </View>

        </View>
      </ScrollView>

      <View style={{
        zIndex: 999,
        position: 'absolute',
        top: 20,
        left: 5,
      }}>

        <TouchableOpacity
          style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigate('HomeTab', { name: 'Brent' })}>
          <Ionicons name={'ios-arrow-back'} size={34} color={blueColor} />
        </TouchableOpacity>
      </View>

    </View>
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
