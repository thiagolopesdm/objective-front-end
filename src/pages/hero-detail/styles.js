import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 40px 110px;

  @media screen and (max-width: 375px) {
    padding: 40px 35px;
  }
`;

export const StyledHeroInfosContainer = styled.div`
  display: flex;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const StyledHeroImage = styled.img`
  background: #f0f0f0;
  height: 300px;

  box-shadow: 0px 0px 5px #00000033;
  border-radius: 10px;
`;

export const StyledHeroInfos = styled.div`
  width: 100%;
  padding: 15px 20px;
  margin-left: 3rem;
  border: 1px solid #555555;
  border-radius: 4px;

  h1 {
    font-size: 26px;
    color: #555555;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #555555;
  }

  @media screen and (max-width: 375px) {
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const StyledHeroSeries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
  margin-top: 1rem;

  div {
    background: #fff;
    box-shadow: 0px 0px 5px #00000033;
    border-radius: 10px;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;
