import {ButtonsContainer, HeaderButton, HeaderContainer} from '../Header/styles';
import coffeeLogo from '../../assets/coffeeLogo.svg';
import { IconMapPin, IconShoppingCart } from '@tabler/icons-react';
import { defaultTheme } from '../../styles/themes/default';


export function Header() { 
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="Logo do Café" />
        <ButtonsContainer>

          <HeaderButton>
            <IconMapPin size={20} weight="fill"/>
            Porto Alegre, RS
          </HeaderButton>

          <HeaderButton background={defaultTheme.colors['brand-yellow-dark']}>
            <IconShoppingCart size={20} weight="fill" />
          </HeaderButton>

        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
