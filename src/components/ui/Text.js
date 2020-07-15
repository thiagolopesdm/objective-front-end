import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextContainer = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export default function Text({ size, color, weight, children, ...rest }) {
  return (
    <StyledTextContainer size={size} color={color} weight={weight} {...rest}>
      {children}
    </StyledTextContainer>
  );
}

Text.defaultProps = {
  size: '15px',
  color: '#555555',
  weight: 'normal',
};

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
};
