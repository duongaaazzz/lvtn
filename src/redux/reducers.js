/**
 * Created by Duong Le on 9/8/18.
 */

import {combineReducers} from 'redux';

import appReducer from '../reducers/app';
import userReducer from '../reducers/user';

export default combineReducers({
  app: appReducer,
  user: userReducer,
});
