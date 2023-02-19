import styled from 'styled-components';
import { down, up } from 'styled-breakpoints';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  ${up('pcSizeS')} {
    margin-left: 80px;
  }

  ${down('pcSizeS')} {
    flex-direction: column;
    align-items: center;
    margin-top: 88px;
  }
  ${down('tablet')} {
    margin-top: 60px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 80px;
  padding: 10px 0;

  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.mainBlack};

  ${down('pcSizeS')} {
    margin-right: 0;
    margin-bottom: 60px;
  }
  ${down('tablet')} {
    margin-bottom: 40px;
  }

  ${up('mobile')} {
    font-size: 32px;
    line-height: 1.46;
  }
  ${up('tablet')} {
    font-size: 48px;
    line-height: 1.375;
  }
  ${up('pcSizeS')} {
    font-size: 20px;
    line-height: 1.35;
  }

  &.active {
    color: ${({ theme }) => theme.colors.mainAccent};
    text-decoration: underline 1px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
