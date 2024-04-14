import React from 'react'
import img1 from '../Images/about.png'
import img2 from '../Images/card2.png'

export default function Primushestva() {
  return (
    <section className='Primushestva'>
      <div className="container">
        <h2 className='p-tittle'>Nega bizni tanlash kerak?</h2>
        <h3 className='p-text'>Sifat, tajriba va innovatsiyalarimiz bilan biznesingizni yangi bosqichlarga olib chiqing</h3>
      
        <div className="row">
          <div className="col-md-6 h100">
            <div className="card card1">
              <div className="card-body">
                <h3>Sizning ishonchli biznes <br /> hamkoringiz! </h3>
                <p>Raqobatdosh narxlar, sifatli xizmat va o'z vaqtida yetkazib berish - biz bilan hamkorlik qilishning afzalliklari</p>
              </div>
              <div className="d-flex">
                <img src={img1} alt="gazablock" />
              </div>
            </div>
          </div>

          <div className="col-md-6 row">
            <div className="col-12 mb-4">
              <div className="card card2">
                <div className="card-body">
                  <h3>Ishonchli qurilish uchun <br /> eng yaxshi yechimlar</h3>
                  <p>Sizning talablaringizni aniqlab, eng yaxshi <br /> variantlarni taqdim etish uchun biz yuqori <br /> sifatli gazoblok mahsulotlarini taklif etamiz</p>
                </div>
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card3">
                <div className="card-body">
                  <h3>Oson to'lov</h3>
                  <p>Bu xaridlar o'tkazish paytida mijozlar uchun qulaylik yaratish uchun mo'ljallangan to'lov usullarining birligidir</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card4">
                <div className="card-body">
                  <h3>Ajoyib sifat</h3>
                  <p>Sifatli materiallar va eng so'nggi texnologiyalar bilan, biz sodda va samarali xizmatlarni taqdim etamiz</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
