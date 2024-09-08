import React from 'react'
import logo from '../logo.svg'
import tg from '../Images/footer-tg.svg'
import inst from '../Images/footer-inst.svg'
import fc from '../Images/footer-fc.svg'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className='block1 imgg'>
          <img src={logo} alt="logo" />
        </div>
        <ul className='block1 block'>
        
          <li><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Header'>Главная</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Primushestva'>Преимущества</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='Products'>Товары</Link></li>
          <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={100} to='About'>О нас</Link></li>
        </ul>
        <div className="block2">
          <p>©Все права защищены</p>

          <div className='footer-socials'>
            <a target='_blank' href="https://t.me/gazoblokk">
              <img src={tg} alt="telegram" />
            </a>
            <a target='_blank' href="https://www.instagram.com/gazoblokchi.uz/">
              <img src={inst} alt="instagram" />
            </a>
          </div>

          <p>Сайт разработан студией <a target='_blank' href="https://www.instagram.com/webmarketing.uz/">WEB MARKETING</a></p>
        </div>
      </div>
    </footer>
  )
}
