import { useState } from 'react';
import {useEffect} from 'react';
import './NavBar.styles.scss';
import {FaConnectdevelop} from 'react-icons/fa'


const NavBar = () => { 
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
        // event.preventDefault()
        setClicked(state => !state)

        
        
        // if (event.target.getAttribute('href')) {
        //     window.location.href = event.target.getAttribute('href')
        //     // history.push(event.target.getAttribute('href'))
        // }
    }

    return (
    <div className={`navbar ${scroll}`}>
        <div className={`navbar__container ${clicked?"checked":""}`}>
            <div className="navbar__logo">
            <a onClick={handleClick} className='' href='/' ><FaConnectdevelop style={{fontSize:'2rem'}}/></a>
            </div>
            <div className='menu' onClick={()=>handleClick}>
                <div className='menuIcon' onClick={handleClick}>
                    <span className='menuIcon__line'></span>
                </div>
            </div>
            
        </div>
        
        <ul className={`navbar__content ${clicked?"checked":""}`}>
            <li className="navbar__content__link"><a onClick={handleClick} className='navbar__content__link-item' href='/' >Home</a></li>
            {/* <li className="navbar__content__link"><a onClick={handleClick} className='navbar__content__link-item' href='/curriculum' >Curriculum</a></li> */}
            <li className="navbar__content__link"><a onClick={handleClick} className='navbar__content__link-item' href='/#portfolio' >Portfolio</a></li>
            <li className="navbar__content__link"><a onClick={handleClick}  className='navbar__content__link-item' href='/#about'>About</a></li>
            <li className="navbar__content__link"><a onClick={handleClick} className='navbar__content__link-item' href='/contact' >Contact</a></li>
        </ul>
    </div>
)}

export default NavBar;