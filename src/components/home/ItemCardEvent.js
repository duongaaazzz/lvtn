/**
 * Created by Duong Le on 9/9/18.
 */


import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import NavigationServices from '../../navigation/NavigationServices'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import RouteKey from '../../constants/routeKey'
import { blackColor, grayColor } from '../../constants/color';


const { width, height } = Dimensions.get('window')


class ItemCardEvent extends React.Component {

  render() {
    return (
      <TouchableOpacity onPress={() => {
        NavigationServices.homeTabNavigate('DetailsCardEvent',{data: this.props.data})
      }}>
        <View style={{
          borderRadius: 10,
          marginTop: 15,
          marginHorizontal: 5,
          height: 135,
          width: width * 0.93,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <View style={{
            flexDirection: 'row',
            flex: 1,
            margin: 5
          }}>

            {/*Left card*/}
            <View style={{
              flex: 1,
              margin: 10,
              width: '90%'
            }}>
              <Text
                style={[styles.textStyle, {
                  fontSize: 20,
                }]}
                numberOfline={2}
              >
                {this.props.data.event_title}
              </Text>

              <Text
                style={[styles.textStyle, {
                  fontSize: 12,
                  color: grayColor,
                  marginVertical: 5,
                }]}
                numberOfline={1}
              >
                {this.props.data.date_start}
              </Text>

              <View style={{
                marginTop: 5,
                height: '20%',
                width: '100%',
                flexDirection: 'row',
              }}>

                <MaterialCommunityIcons name='heart' size={17} color={blackColor} />
                <Text style={[styles.textStyle, { marginRight: 5, fontSize: 10 }]}>10</Text>

                <MaterialCommunityIcons name='message' size={17} color={blackColor} />
                <Text style={[styles.textStyle, { marginRight: 5, fontSize: 10 }]}>10</Text>

              </View>

            </View>

            {/*Right card*/}
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginRight: 10
            }}>

              <Image
                style={{
                  width: 100, height: 100, borderRadius: 50
                }}
                source={{ uri: this.props.data.avatar}}
                resizeMode={'cover'} />
            </View>


          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default connect(state => ({}), dispatch => ({}))(ItemCardEvent);


const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor
  }
})