import React from 'react'
import facebook from '../Images/icon-facebook.svg'
import instagram from '../Images/icon-insta.svg'
import location from '../Images/icon-locatioan.svg'
import phone from '../Images/icon-phone.svg'
import telegram from '../Images/icon-telegram.svg'
import logo from '../logo.svg'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <header className='Header'>
      <nav className='Navbar'>
        <div className="container">
          <div className="nav-head">
            <div className='nav__head'>
              <a className='nav-head__link' href="tel:+998980771414"><div><img src={phone} alt="phone" />+998 (98) 077 14 14</div></a>
              <a className='nav-head__link' href=""><div><img src={location} alt="location" />Tashkent</div></a>
            </div>

            <div className="nav__head">
              <a href=""><img src={telegram} alt="" /></a>
              <a href=""><img src={instagram} alt="" /></a>
              <a href=""><img src={facebook} alt="" /></a>
            </div>

          </div>

          <div className="nav-list">
            <img src={logo} alt="" />

            <ul>
              <li><a href="">Biz haqimizda</a></li>
              <li><a href="">Gazablok turlari</a></li>
              <li><a href="">Kalkulyator</a></li>
              <li><a href="">Murojaat uchun</a></li>
            </ul>

            <button>Заказать</button>
          </div>

          

        </div>
      </nav>

      <div className="header-info">
        <div className="container">
          <div className='header-info__info'>
            <div className='text-center'>
              <h2>Ekologik jihatdan toza kelajak <br /> uchun gazobloklar</h2>
              <p>Sifatli va ishonchli gazobloklarimiz bilan uyingizni mustahkam, issiqlik va <br /> tovush o'tkazmaydigan hamda ekologik toza qiling</p> 
              <button>Ko`proq ko`rish <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.4766 9.1664L9.00658 4.6964L10.1849 3.51807L16.6666 9.99973L10.1849 16.4814L9.00658 15.3031L13.4766 10.8331H3.33325V9.1664H13.4766Z" fill="white"/>
</svg></button>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}
