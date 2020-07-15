import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import HeroesListing from '../pages/hero-listing';
import HeroDetail from '../pages/hero-detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HeroesListing} />
      <Route path="/hero/:id/detail" component={HeroDetail} exact />
    </Switch>
  );
}
