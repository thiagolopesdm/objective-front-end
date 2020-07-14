import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../pages/_layout/default';

export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
