import {ButtonsContainer, HeaderButton, HeaderContainer} from '../Header/styles';
import coffeeLogo from '../../assets/coffeeLogo.svg';
import { IconMapPin } from '@tabler/icons-react';
//import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="Logo do Café" />
        <ButtonsContainer>
          <HeaderButton>
          
          Porto Alegre, RS
          <IconMapPin size={20} weight="fill"/>
          </HeaderButton>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
