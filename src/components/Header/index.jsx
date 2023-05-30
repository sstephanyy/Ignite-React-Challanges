import { ButtonsContainer, HeaderButton, HeaderContainer } from "../Header/styles";
import coffeeLogo from "../../assets/coffeeLogo.svg";

export function Header () {

  return(
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogo} alt="Logo do Café"/>
        <ButtonsContainer>
          <HeaderButton>
            
          </HeaderButton>
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  )
}