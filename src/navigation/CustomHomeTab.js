/**
 * Created by Duong Le on 9/9/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import NavigationServices from './NavigationServices';
import RouteKey from '../constants/routeKey'

class CustomHomeTab extends React.Component {

  renderItem = ({index, selectedTabIndex, route, label, selected, icon}) => {
    return <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                             onPress={() => {
                               this.shouldChangeTab(index, selectedTabIndex, route)
                             }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{
          fontSize:18,
          color: selected ? '#37A8FF' : '#707070',
          fontFamily: 'SegoeUI',
          fontWeight: selected ? 'bold' : '400'
        }}>{label}</Text>
      </View>
    </TouchableOpacity>
  }

  shouldChangeTab = (tabIndex, currentIndex, routeName) => {
    if (currentIndex !== tabIndex) {
      console.log('sss', this.props.navigation)
      NavigationServices.homeTabNavigate(routeName)
    }
    else {
      //this.props.navigation.dispatch({type: 'popToTop'})
    }
  }


  render() {
    const {navigation} = this.props

    const selectedTabIndex = navigation && navigation.state.index


    return <View style={{
      shadowOffset: {
        height: 3,
        width: 0
      },
      shadowColor: '#000000',
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 2,
      zIndex: 999
    }}>
      <View style={{
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {this.renderItem({
          index: 0,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.NowScreen,
          label: 'Now',
          selected: selectedTabIndex == 0,
          icon: 'chat'
        })}
        {this.renderItem({
          index: 1,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.NearByScreen,
          label: 'Nearby',
          selected: selectedTabIndex == 1,
          icon: 'contact-phone'
        })}
        {this.renderItem({
          index: 2,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.TypeScreen,
          label: 'Type',
          selected: selectedTabIndex == 2,
          icon: 'supervisor-account'
        })}
      </View>
    </View>

  }
}

export default connect(state => ({}), dispatch => ({}))(CustomHomeTab);