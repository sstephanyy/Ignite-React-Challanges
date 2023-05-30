import { HeaderContainer } from "../Header/styles";
import coffeeLogo from "../../assets/coffeeLogo.svg";

export function Header () {

  return(
    <HeaderContainer>
      <div>
        <img src={coffeeLogo} alt="Logo do Café"/>
      </div>
    </HeaderContainer>
  )
}