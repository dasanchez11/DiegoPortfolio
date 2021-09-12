import { useState } from 'react';
import {useEffect} from 'react';
import './header.styles.scss';


const Header = () => { 
    const [scroll, setScroll] = useState("")
    const [clicked, setClicked] = useState(false)
    

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)
    })

    const handleScroll = () =>{
        const position = window.scrollY
        if (position > 40) {
            setScroll("scrolled")
        } else {
            setScroll("")
        }
    }

    const handleClick = (event) =>{
        event.preventDefault()
        setClicked(state => !state)

        
        
        if (event.target.getAttribute('href')) {
            window.location.href = event.target.getAttribute('href')
            // history.push(event.target.getAttribute('href'))
        }
    }

    return (
    <div className={`header ${scroll}`}>
        <div className={`header__container ${clicked?"checked":""}`}>
            <div className="header__logo">
            <a onClick={handleClick} className='' href='/' >Logo</a>
            </div>
            <div className='menuIcon' onClick={handleClick}>
                <span className='menuIcon__line'></span>
            </div>
        </div>
        
        <ul className={`header__content ${clicked?"checked":""}`}>
            <li className="header__content__link"><a onClick={handleClick} className='header__content__link-item' href='/' >Home</a></li>
            <li className="header__content__link"><a onClick={handleClick} className='header__content__link-item' href='/curriculum' >Curriculum</a></li>
            <li className="header__content__link"><a onClick={handleClick} className='header__content__link-item' href='/#projects' >Projects</a></li>
            <li className="header__content__link"><a onClick={handleClick}  className='header__content__link-item' href='/#about'>About</a></li>
            <li className="header__content__link"><a onClick={handleClick} className='header__content__link-item' href='/contact' >Contact</a></li>
        </ul>
    </div>
)}

export default Header;