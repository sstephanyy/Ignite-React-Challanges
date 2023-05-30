import styled from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  background: ${defaultTheme.colors['base-background']};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
`