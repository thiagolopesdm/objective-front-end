import styled from 'styled-components';

export const StyledTableHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 48px;
  justify-content: space-between;
  min-width: ${(props) => props.minWidth};
  z-index: 10;
`;
export const StyledTableHeaderItem = styled.span`
  display: flex;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-right: 10px;
  color: #8e8e8e;
  font-size: 12px;
  white-space: nowrap;
  padding-right: 40px;
`;

export const StyledTableHeaderItemEvents = styled.span`
  display: flex;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-right: 10px;
  color: #8e8e8e;
  font-size: 12px;
  white-space: nowrap;
  padding-left: 40px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

export const StyledTableHeaderItemSeries = styled.span`
  display: flex;
  flex-basis: ${(props) => (props.spacing ? props.spacing : '100%')};
  padding-right: 10px;
  color: #8e8e8e;
  font-size: 12px;
  white-space: nowrap;
  padding-right: 40px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;
