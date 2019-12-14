import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import getRepoReducer from './reducer/getRepoDetailsReducer';
import App from './components/App';
import rootSaga from './sagas/ReduxSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    getRepoReducer,
   applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'),
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
