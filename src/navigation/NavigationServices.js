/**
 * Created by Duong Le on 9/8/18.
 */

import {NavigationActions, StackActions, DrawerActions} from 'react-navigation';
import RouteKey from '../constants/routeKey';

let appNavigator;
let homeNavigator;
let mainNavigator;
let homeSwitchNavigator;

function setTopLevelNavigator(navigatorRef) {
  appNavigator = navigatorRef;
}

function setTopLevelNavigatorHomeTab(navigatorRef) {
  homeNavigator = navigatorRef;
}

function setTopLevelNavigatorMainTab(navigatorRef) {
  mainNavigator = navigatorRef;
}

function setTopLevelNavigatorHomeSwitch(navigatorRef) {
  homeSwitchNavigator = navigatorRef;
}


function navigate(routeName, params) {
  appNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function homeTabNavigate(routeName, params) {
  homeNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )

}

function mainTabNavigate(routeName, params) {
  mainNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )

}

function homeSwitchNavigate(routeName, params) {
  homeSwitchNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )

}


function resetToLogin() {
  appNavigator.dispatch(
    NavigationActions.navigate({
      routeName: RouteKey.LoginScreen

    })
  )
}


function resetToHomeSwitch() {
  homeSwitchNavigator.dispatch(
    NavigationActions.navigate({
      routeName: 'HomeTab'

    })
  )
}

export default {
  resetToHomeSwitch,
  homeSwitchNavigate,
  setTopLevelNavigatorHomeSwitch,
  homeTabNavigate,
  mainTabNavigate,
  setTopLevelNavigatorMainTab,
  navigate,
  setTopLevelNavigatorHomeTab,
  setTopLevelNavigator,
  resetToLogin,
  homeTabNavigate
}