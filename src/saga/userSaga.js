import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, setUsersCreator } from '../store/userReducer';

const fetchUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=9');

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsersCreator(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
