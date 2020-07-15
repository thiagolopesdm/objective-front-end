import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 40px 110px;

  @media screen and (max-width: 375px) {
    padding: 40px 35px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const PageTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #555555;

  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;
