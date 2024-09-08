import React from 'react'
import img1 from '../Images/about.png'
import img2 from '../Images/card2.png'
import { Fade } from 'react-reveal'

export default function Primushestva() {
  return (
    <section className='Primushestva'>
      <div className="container">
        <h2 className='p-tittle'>Почему именно мы?</h2>
        <h3 className='p-text'>Поднимите свой бизнес на новый уровень благодаря нашему качеству, опыту и инновациям.</h3>
      
        <div className="row">
          <div className="col-md-12 mb20 col-lg-6 h100 ">
          <Fade left>
            <div className="card card1">
              <div className="card-body">
                <h3>Ваш надежный бизнес <br /> партнер! </h3>
                <p>Конкурентные цены, качественный сервис и своевременная доставка – преимущества сотрудничества с нами.</p>
              </div>
              <div className="d-flex">
                <img src={img1} alt="gazablock" />
              </div>
            </div>
          </Fade>
          </div>

          <div className="col-md-12 col-lg-6 row row2">
            <div className="col-12 mb-4">
              <Fade right>
                <div className="card card2">
                  <div className="card-body">

                    <h3>Для надежной конструкции <br /> лучшие решения</h3>
                    <p>Лучше всего определить ваши требования <br /> мы готовы предоставить варианты <br /> предлагаем качественную газоблоковую продукцию</p>
                  </div>
                  <img className='img' src={img2} alt="" />
                  <div className="d-flex">
                    <img className='img2' src={img2} alt="" />
                  </div>

                </div>
              </Fade>
            </div>

            <div className="col-md-6 mb20">
              <Fade bottom>
                <div className="card card3">
                  <div className="card-body">
                    <h3>Удобная оплата</h3>
                    <p>Это набор способов оплаты, призванный обеспечить удобство покупателям при совершении покупок.</p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-md-6">
              <Fade bottom>
                <div className="card card4">
                  <div className="card-body">
                    <h3>Качество</h3>
                    <p>Используя качественные материалы и новейшие технологии, предоставляем эффективные услуги.</p>
                  </div>
                </div>
              </Fade>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
