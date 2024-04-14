import React from 'react'
import product from '../Images/product.png'

export default function Products() {
  return (
    <section className='Products'>
      <div className="container">
        <h2>Nega bizni tanlash kerak?</h2>
        <p>Sifat, tajriba va innovatsiyalarimiz bilan biznesingizni yangi <br /> bosqichlarga olib chiqing</p>

        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card">
              <p className='size'>60х30х10</p>
              <div className="card-body">
                <img src={product} alt="" />
                <h4 className='price'>9000 UZS</h4>
                <h5>Газобетонные блоки перегородочные <b>D600</b> Голицыно</h5>
                <button>Buyurtma berish</button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
