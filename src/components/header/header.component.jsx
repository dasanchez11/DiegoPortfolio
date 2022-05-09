import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials.component";
import './Header.styles.css'
import Picture1 from '../../assets/Picture1.png'


const Header = () => {
    return (
        <header>
          <div className="container header__container">
            <h5>Hello, I'am</h5>
            <h1>Diego</h1>
            <h5 className="text_light"> a Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="me">
              <img className="me__img" src={Picture1} alt="me"></img>
            </div>

            <a className="scroll_down" href="#portfolio">Scroll Down</a>
          </div>
        </header>
      );
}
 
export default Header;