import { takeEvery, call } from 'redux-saga/effects'
import { doLogout } from '@app/utils/features/auth'
import { AuthError } from '@app/api/errors'
import { eventsActions } from './'

function* eventsWorkerSaga(action: ReturnType<typeof eventsActions.addEvent>) {
  if (action.payload.type === 'error') {
    if (action.payload.error instanceof AuthError) {
      yield call(doLogout)
      return
    }
  }
}

export default function* watcherSaga() {
  yield takeEvery(eventsActions.addEvent.type, eventsWorkerSaga)
}
