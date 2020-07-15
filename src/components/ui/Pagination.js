import React from 'react';

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-top: 1rem;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #00000033;
`;

const StyledNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #f5f5f5;
  margin-right: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #555555;
  font-size: 14px;

  :hover {
    cursor: pointer;
    background: #167abc;
    color: #ffffff;
  }
`;

export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledContainer>
      {pageNumbers.map((pageNumber) => {
        return (
          <StyledNumber key={pageNumber} onClick={() => paginate(pageNumber)}>
            {pageNumber}
          </StyledNumber>
        );
      })}
    </StyledContainer>
  );
}
