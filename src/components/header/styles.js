import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #fff;
  height: 64px;
  padding: 10px 24px;
  position: fixed;
  top: 0;
  z-index: 20;
  width: 100%;
`;

export const StyledLogo = styled.div`
  height: 50px;
  padding: 10px 0;

  img {
    height: 100%;
  }

  @media screen and (max-width: 375px) {
    height: 45px;
  }
`;

export const StyledUserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.div`
  background: #f5f5f5;
  border-radius: 4px;
  width: 32px;
  height: 32px;

  /* content inside the square */
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #555555;
    font-weight: bold;
    font-size: 15px;
  }
`;

export const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  font-size: 15px;
  color: #555555;

  @media screen and (max-width: 375px) {
    font-size: 12px;
    width: 155px;
    margin-right: 0.5rem;
    flex-direction: column;
  }
`;

export const StyledName = styled.span`
  color: #555555;
  font-size: 15px;
  margin-right: 0.5rem;
  font-weight: bold;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
