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