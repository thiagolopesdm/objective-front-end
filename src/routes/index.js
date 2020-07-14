import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import Home from '../pages/home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
