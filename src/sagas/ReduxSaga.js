import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchRepos() {
  const json = yield fetch('https://api.github.com/users/supreetsingh247/repos')
  .then(response => response.json())
 
    yield put({ type: "REPOS_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_REOP', fetchRepos)
}
export default function* rootSaga() {
   yield all([
      actionWatcher(),
   ]);
}