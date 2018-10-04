/**
 * Created by Duong Le on 9/11/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Text, TouchableOpacity, View} from 'react-native';
import NavigationServices from './NavigationServices';
import RouteKey from '../constants/routeKey'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {blackColor, blueColor, grayColor} from '../constants/color';

class CustomHomeTab extends React.Component {

  renderItem = ({index, selectedTabIndex, route, label, selected, icon}) => {
    return <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                             onPress={() => {
                               this.shouldChangeTab(index, selectedTabIndex, route)
                             }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {
          icon === 'search' ? <FontAwesome name={icon} size={25} color={selected ? blueColor : grayColor}/> :
            <MaterialCommunityIcons name={icon} size={30} color={selected ? blueColor : grayColor}/>

        }
      </View>
    </TouchableOpacity>
  }

  shouldChangeTab = (tabIndex, currentIndex, routeName) => {
    if (currentIndex !== tabIndex) {
      NavigationServices.mainTabNavigate(routeName)
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
          route: RouteKey.HomeScreen,
          selected: selectedTabIndex == 0,
          icon: 'explore'
        })}
        {this.renderItem({
          index: 1,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.SearchScreen,
          selected: selectedTabIndex == 1,
          icon: 'search'
        })}
        {this.renderItem({
          index: 2,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.NotifyScreen,
          selected: selectedTabIndex == 2,
          icon: 'notifications'
        })}
        {this.renderItem({
          index: 3,
          selectedTabIndex: selectedTabIndex,
          route: RouteKey.ProfileScreen,
          selected: selectedTabIndex == 3,
          icon: 'account-circle'
        })}
      </View>
    </View>

  }
}

export default connect(state => ({}), dispatch => ({}))(CustomHomeTab);