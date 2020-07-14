import React from 'react';

import LogoImage from '../../assets/images/objectiveLogo.png';
import Flex from '../ui/Flex';

import {
  StyledHeader,
  StyledLogo,
  StyledUserContainer,
  StyledImage,
  StyledNameContainer,
  StyledName,
} from './styles';

export default function Header() {
  return (
    <div style={{ height: '64px' }}>
      <StyledHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <StyledLogo>
            <img src={LogoImage} alt="Objective Logo" />
          </StyledLogo>
          <StyledUserContainer>
            <StyledNameContainer>
              <StyledName>Thiago da Silva Lopes</StyledName> Teste de Front-end
            </StyledNameContainer>
            <StyledImage>
              <span>TL</span>
            </StyledImage>
          </StyledUserContainer>
        </Flex>
      </StyledHeader>
    </div>
  );
}
