import { takeEvery, call } from 'redux-saga/effects'
import { api } from '@app/api'
import { login, logout } from '@app/utils/features/auth'
import { safeSaga } from '@app/state/utils'
import { authActions } from './actions'

function* loginWorkerSaga(action: ReturnType<typeof authActions.loginRequest>) {
  const payload = yield call(api.main.auth.login, action.payload)
  yield call(login, payload)
}

function* logoutWorkerSaga() {
  yield call(api.main.auth.logout)
  yield call(logout)
}

export default function* watcherSaga() {
  yield takeEvery(authActions.loginRequest.type, safeSaga(loginWorkerSaga))
  yield takeEvery(authActions.logoutRequest.type, safeSaga(logoutWorkerSaga))
}
