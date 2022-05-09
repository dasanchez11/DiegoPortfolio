import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'





const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a className="" href="https://www.linkedin.com/in/dasanchez11" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a className="" href="https://github.com/dasanchez11" target="_blank" rel="noreferrer"><FaGithub/></a>


        </div>
      );
}
 
export default HeaderSocials;