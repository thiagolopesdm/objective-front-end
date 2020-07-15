import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from 'react-icons/ai';

const StyledInput = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  color: #8e8e8e;
  width: 300px;
`;

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledWrapperInput = styled.div`
  position: relative;
`;

const StyledIcon = styled.i`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

export default function Input({ value, onChange, icon }) {
  return (
    <StyledWrapper>
      <StyledWrapperInput>
        <StyledInput
          type="text"
          value={value}
          placeholder="Search"
          onChange={onChange}
        />
        {icon && (
          <StyledIcon>
            {icon === 'search' && <AiOutlineSearch color="#555555" size={24} />}
          </StyledIcon>
        )}
      </StyledWrapperInput>
    </StyledWrapper>
  );
}
