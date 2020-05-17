import { takeEvery, call, put } from 'redux-saga/effects'
import { api } from '@app/api'
import { safeSaga } from '@app/state/utils'
import { repositoriesActions } from './actions'

function* getRepositoriesWorkerSaga() {
  const payload = yield call(api.github.repositories.getRepositories)
  yield put(repositoriesActions.getRepositoriesRequestSuccess(payload))
}

export default function* watcherSaga() {
  yield takeEvery(repositoriesActions.getRepositoriesRequest.type, safeSaga(getRepositoriesWorkerSaga))
}
