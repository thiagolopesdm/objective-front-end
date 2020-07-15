import React from 'react';

import PropTypes from 'prop-types';

import Text from '../../ui/Text';

import {
  StyledTable,
  StyledTableBody,
  StyledTableRow,
  SytyledTableRowItem,
  SytyledTableRowItemComics,
  SytyledTableRowItemEvents,
  HeroImage,
} from './styles';

export default function Table({ items, handleClick }) {
  return (
    <StyledTable>
      <StyledTableBody>
        {items.length > 0 &&
          items.map((item) => (
            <StyledTableRow
              key={Math.random()}
              onClick={() => handleClick(item)}
            >
              <SytyledTableRowItem>
                <HeroImage>
                  <img src={`${item.thumbnail.path}.jpg`} alt="hero" />
                </HeroImage>
                <Text weight="bold" size="16px">
                  {item.name}
                </Text>
              </SytyledTableRowItem>
              <SytyledTableRowItemComics>
                {item.comics.items.slice(0, 3).map((comic) => (
                  <Text key={Math.random()}>{comic.name}</Text>
                ))}
              </SytyledTableRowItemComics>
              <SytyledTableRowItemEvents>
                {item.events.items.slice(0, 3).map((comic) => (
                  <Text key={Math.random()}>{comic.name}</Text>
                ))}
              </SytyledTableRowItemEvents>
            </StyledTableRow>
          ))}
      </StyledTableBody>
    </StyledTable>
  );
}

Table.defaultProps = {
  columns: [],
  items: [],
  minWidth: 'auto',
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      spacing: PropTypes.string,
      disabled: PropTypes.bool,
      type: PropTypes.oneOf(['text']),
    })
  ),
  items: PropTypes.arrayOf(PropTypes.object),
  minWidth: PropTypes.string,
};
