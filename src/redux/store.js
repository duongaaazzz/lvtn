/**
 * Created by Duong Le on 9/8/18.
 */

import {createEpicMiddleware, combineEpics,} from 'redux-observable';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import initialState from './initialState';
import rootEpic from '../actions/epic';


// Redux Store configuration

const epicMiddleware = createEpicMiddleware();

epicMiddleware.run(rootEpic);

//create store
const store = createStore(reducers, initialState,
  compose(
    applyMiddleware()
  )
);



export default store;