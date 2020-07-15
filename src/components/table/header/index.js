import React from 'react';

import {
  StyledTableHeader,
  StyledTableHeaderItem,
  StyledTableHeaderItemSeries,
  StyledTableHeaderItemEvents,
} from './styles';

export default function TableHeader() {
  return (
    <StyledTableHeader>
      <StyledTableHeaderItem key={Math.random()}>
        Personagem
      </StyledTableHeaderItem>
      <StyledTableHeaderItemSeries key={Math.random()}>
        Séries
      </StyledTableHeaderItemSeries>
      <StyledTableHeaderItemEvents key={Math.random()}>
        Eventos
      </StyledTableHeaderItemEvents>
    </StyledTableHeader>
  );
}
