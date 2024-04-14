import React from 'react'

export default function Form() {
  return (
    <section className='Form'>
      <div className="container">
        <h2>Qo'shimcha ma'lumotlar <br /> olmoqchimisiz?</h2>
        <p>Siz bilan bog’lanishimiz uchun, o’z ma’lumotlaringizni qoldiring</p>

        <form className='form-zayavka' action="">
          <div className='form-body'>
            <div>
              <h5>Ismingiz</h5>
              <input type="text" placeholder='Ismingiz'/>
            </div>

            <div>
              <h5>Telefon raqamingiz</h5>
              <input type="text" placeholder='+998'/>
            </div>
          </div>
          <div className='button-submit'>
            <button type='submit'>Yuborish</button>
          </div>
        </form>
      </div>
    </section>
  )
}
