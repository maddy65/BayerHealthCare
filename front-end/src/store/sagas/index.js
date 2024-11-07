import { all } from 'redux-saga/effects';
import logInSaga from './sagaFiles/logInSaga'; 

// Root saga
function* rootSaga() {
  yield all([
    // all sagas
    logInSaga(),
  ]);
}

export default rootSaga;