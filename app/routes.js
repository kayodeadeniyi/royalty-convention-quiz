/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import QuestionPage from './containers/QuestionPage';

export default () => (
  <App>
    <Switch>
      <Route path="/questions/:questionNumber" component={QuestionPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
