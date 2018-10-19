import {fork, all} from 'redux-saga/effects';
import _ from 'lodash';
//
// import eventSagas from './event';
// import loginSagas from './login';
// import adminSagas from './admin';
// import mySagas from './my';
// import userSagas from './user';
// import couponSagas from './coupon';

export default function* rootSagas(){
  // let sagas = eventSagas
  //   .concat(loginSagas)
  //   .concat(adminSagas)
  //   .concat(mySagas)
  //   .concat(userSagas)
  //   .concat(couponSagas);

  let sagas = [];

  yield all(_.map(sagas, (saga) => fork(saga)));
}
