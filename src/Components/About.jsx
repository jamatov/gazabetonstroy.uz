import React from 'react'
import logo from '../Images/about-logo.svg'
import img from '../Images/about.png'

export default function About() {
  return (
    <section className='About'>
      <div className="container">
        <h2>Biz haqimizda</h2>
        <p>Bu yerdan kompaniyamiz haqida ma'lumot <br /> olishingiz mumkin</p>
        <div className="row">
          <div className="col-md-7">
            <div className='about-info'>
              <img src={logo} alt="logo" />
              <h5>2009-yilda tashkil etilgan Ricomel Beverages kompaniyasi o‘n uch yildan ortiq vaqtdan beri O‘zbekistonda yuqori sifatli va gazsiz mevali ichimliklar yetkazib berish bilan shug‘ullanadi. Kompaniya o'zining 10 dan ortiq ta'mi bilan Dinay, NRGo Xtrim, RicoLA Traditional, RicoLA Cherry va RicoLA Ice Coffee kabi tabiiy ichimliklar ishlab chiqaradi.</h5>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img src={img} alt="gazablock" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
