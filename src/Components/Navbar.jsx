import React, {useState} from 'react'
import instagram from '../Images/icon-insta.svg'
import location from '../Images/icon-locatioan.svg'
import phone from '../Images/icon-phone.svg'
import telegram from '../Images/icon-telegram.svg'
import logo from '../logo.svg'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal' 
import callBtn from '../Icons/Button.svg'

export default function Navbar() {
  const[active, setActive] = useState("nav__menu");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");


  const navToggle = () =>{
    active === "nav__menu"
    ? setActive("nav__menu nav__active")
    : setActive("nav__menu");

    toggleIcon === "nav__toggler"
    ? setToggleIcon("nav__toggler toggle")
    : setToggleIcon("nav__toggler");
  };

  return (
    <header className='Header'>
      <nav className='Navbar'>
        <div className="container">
          <div className="nav-head">
            <div className='nav__head'>
              <a className='nav-head__link' rel="nofollow" href="tel:+998980771414"><div><img src={phone} alt="phone" />+998 (98) 077 14 14</div></a>
              <a className='nav-head__link' href=""><div><img src={location} alt="location" />Tashkent</div></a>
            </div>

            <div className="nav__head">
              
              <a target='_blank' href="https://t.me/gazoblokk"><img src={telegram} alt="" /></a>
              <a target='_blank' href="https://www.instagram.com/gazoblokchi.uz/"><img src={instagram} alt="" /></a>
            </div>

          </div>

          <div className="nav-list">

          <a className='calBtn' href="tel:+998980771414">
            <img src={callBtn} alt="cal-btn" />
          </a>
            <img src={logo} alt="logo" />

            <ul className={active}>
              <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Header'>Главная</Link></li>
              <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Primushestva'>Преимущества</Link></li>
              <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Products'>Товары</Link></li>
              <li><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='About'>О нас</Link></li>

            </ul>

            <button><Link activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Form'>Заказать</Link></button>

            <div onClick={navToggle} className={toggleIcon}>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>
          </div>

          

        </div>
      </nav>

      <div className="header-info">
        <div className="container">
          <div className='header-info__info'>
            <div className='text-center'>
              <Fade left>

                <h2>Экологически чистое газоблоки 
 <br /> для будущее</h2>
 

                <p>С нашими качественными и надежными газоблоками вы сможете сделать свой дом крепким, теплым и уютным <br /> сделать его звукоизоляционным и экологически чистым</p> 
                <Link activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Products'>
                  <button>Смотреть больше <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13.4766 9.1664L9.00658 4.6964L10.1849 3.51807L16.6666 9.99973L10.1849 16.4814L9.00658 15.3031L13.4766 10.8331H3.33325V9.1664H13.4766Z" fill="white"/>
                  </svg></button>  
                </Link>
                 
              </Fade>
              
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
