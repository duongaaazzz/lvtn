/**
 * Created by Duong Le on 9/8/18.
 */

import most from 'most';
import {from} from 'rxjs';

import {login, USER_LOGIN} from './user';

// a Most.js implementatin of combineEpics
const combineEpics = (...epics) => (...args) =>
  most.merge(
    ...epics.map(epic => epic(...args))
  );


const loginEpic = action$ =>
  action$.pipe(
    ofType(USER_LOGIN),
    switchMap((username, password) => login(username, password))
  );


const rootEpic = (action$, state$, ...rest) => {
  const epic = combineEpics(loginEpic);
  // action$ and state$ are converted from Observables to Most.js streams
  const output = epic(
    most.from(action$),
    most.from(state$),
    ...rest
  );

  // convert Most.js stream back to Observable
  return from(output);
};

export default rootEpic