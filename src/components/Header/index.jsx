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

          <HeaderButton>
            <IconShoppingCart size={20} weight="fill" color={defaultTheme.colors['brand-yellow-dark']} />
          </HeaderButton>

        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
