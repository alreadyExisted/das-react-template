import { takeEvery, call, put } from 'redux-saga/effects'
import { api } from '@app/api'
import { safeSaga } from '@app/state/utils'
import { usersActions } from './actions'

function* getUsersWorkerSaga() {
  const payload = yield call(api.github.users.getUsers)
  yield put(usersActions.getUsersRequestSuccess(payload))
}

export default function* watcherSaga() {
  yield takeEvery(usersActions.getUsersRequest.type, safeSaga(getUsersWorkerSaga))
}
