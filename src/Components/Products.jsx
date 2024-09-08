import React from 'react'
import product from '../Images/product.png'
import product2 from '../Images/product2.png'
import tovar1 from '../Images/tovar1.png'
import tovar2 from '../Images/tovar2.png'
import tovar3 from '../Images/tovar3.png'
import tovar4 from '../Images/tovar4.png'
import tovar5 from '../Images/tovar5.png'
import tovar6 from '../Images/tovar6.png'

import ModalForm from './Modal';

export default function Products() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className='Products'>
      <div className="container">
        <h2>Наши продукты</h2>
        <p>Наша продукция конкурентоспособна по качеству и долговечности.</p>

        <div className="row">
          
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={tovar1} alt="" />
                <h4 className='price'>9 000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х12</p>
              <div className="card-body">
                <img src={tovar2} alt="" />
                <h4 className='price'>10 800 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х15</p>
              <div className="card-body">
                <img src={tovar3} alt="" />
                <h4 className='price'>13 500 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х20</p>
              <div className="card-body">
                <img src={tovar4} alt="" />
                <h4 className='price'>18 000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х24</p>
              <div className="card-body">
                <img src={tovar5} alt="" />
                <h4 className='price'>21 600 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х30</p>
              <div className="card-body">
                <img src={tovar6} alt="" />
                <h4 className='price'>27 000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д600</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={tovar1} alt="" />
                <h4 className='price'>9 540 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х12</p>
              <div className="card-body">
                <img src={tovar2} alt="" />
                <h4 className='price'>11 448 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х15</p>
              <div className="card-body">
                <img src={tovar3} alt="" />
                <h4 className='price'>14 310 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х20</p>
              <div className="card-body">
                <img src={tovar4} alt="" />
                <h4 className='price'>19 080 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х24</p>
              <div className="card-body">
                <img src={tovar5} alt="" />
                <h4 className='price'>22 896 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card">
              <p className='size'>60х30х30</p>
              <div className="card-body">
                <img src={tovar6} alt="" />
                <h4 className='price'>28 620 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>Д700</b> Голицыно</h5>
                <button onClick={() => setModalShow(true)}>Заказать</button>

              </div>
            </div>
          </div>

          
        </div>

        
      </div>

      <ModalForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  )
}
