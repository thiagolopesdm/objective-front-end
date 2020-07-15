import styled from 'styled-components';

export const StyledTable = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

export const StyledTableBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const StyledTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  min-height: 80px;
  align-items: center;
  justify-content: space-between;
  min-width: ${(props) => props.minWidth};

  background: #fff;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 5px #00000033;
  padding: 20px;
`;

export const SytyledTableRowItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-right: 40px;

  @media screen and (max-width: 375px) {
    justify-content: flex-start;
  }
`;

export const SytyledTableRowItemComics = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-right: 40px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const SytyledTableRowItemEvents = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-left: 40px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const HeroImage = styled.div`
  height: 50px;
  margin-right: 2rem;

  img {
    height: 100%;
    border-radius: 4px;
  }

  @media screen and (max-width: 375px) {
    height: 45px;
    margin-right: 0.5rem;
  }
`;
