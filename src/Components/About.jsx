import React from 'react'
import logo from '../Images/about-logo.svg'
import img from '../Images/about.png'
import { Fade } from 'react-reveal'

export default function About() {
  return (
    <section className='About'>
      <div className="container">
        <h2>О нас</h2> 
        <p>Здесь вы можете найти информацию <br />о нашей компании</p>
        <div className="row">
          <div className="col-md-7">
            <Fade left>
              <div className='about-info'>
                <img src={logo} alt="logo" />
                <h5> Наша компания радует своих клиентов уже 6 лет. За наш 6-летний опыт работы мы сотрудничаем с крупными строительными компаниями, такими как: Golden House, Discovery,
                    Magic city,
                    Toshkent city,
                    Akay city,
                    Bulvard,
                    Real house, Gidrolife, Namangan city и другие компании.</h5>
              </div>
            </Fade>
          </div>
          <div className="col-md-5">
            <Fade right>
              <div>
                <img className='img2' src={img} alt="gazablock" />
              </div>
            </Fade>
            
          </div>
        </div>
      </div>
    </section>
  )
}
