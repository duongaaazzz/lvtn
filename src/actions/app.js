/**
 * Create by Le Quoc Duong
 */
import {PermissionsAndroid} from 'react-native'


export function requestPermissions() {
  try {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ])
  } catch (err) {
    throw err;
  }
}