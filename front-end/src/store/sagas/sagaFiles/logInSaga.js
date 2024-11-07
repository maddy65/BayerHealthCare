import { takeLatest } from 'redux-saga/effects';

function* handleLogin(action) {
  try {
    
  } catch (error) {
    
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN_USER', handleLogin);
}

export default loginSaga;