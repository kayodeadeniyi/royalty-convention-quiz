// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import question from './question';

const rootReducer = combineReducers({
  question,
  router,
});

export default rootReducer;
