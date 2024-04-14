import React from 'react'
import logo from '../logo.svg'
import tg from '../Images/footer-tg.svg'
import inst from '../Images/footer-inst.svg'
import fc from '../Images/footer-fc.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className='block1 '>
          <img src={logo} alt="logo" />
        </div>
        <ul className='block1 block'>
          <li><a href="">Biz haqimizda</a></li>
          <li><a href="">Gazablok turlari</a></li>
          <li><a href="">Kalkulyator</a></li>
          <li><a href="">Murojaat uchun</a></li>
        </ul>
        <div className="block2">
          <p>©Barcha huquqlar himoyalangan</p>

          <div className='footer-socials'>
            <img src={tg} alt="telegram" />
            <img src={inst} alt="instagram" />
            <img src={fc} alt="facebook" />
          </div>

          <p>Web Marketing</p>
        </div>
      </div>
    </footer>
  )
}
