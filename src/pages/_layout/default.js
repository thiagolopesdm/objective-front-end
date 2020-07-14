import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
