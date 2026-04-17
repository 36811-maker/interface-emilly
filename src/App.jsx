import { useState } from 'react'
import './App.css'
import pessoa from './assets/pessoa perfil.png'

function App() {

  return (
    <>
      <main>
        <section>
          <img src={pessoa} alt='pessoa amarela' />
          <h1>WELCOME</h1>
          <p>Log in and pick up right where you left off <br /> Ready to get started? <br /> Log in and enjoy everything!</p>
          <div className='botoes'>
           <button className='sign'>Sign in</button>
           <button className='log'>Log in</button>
          </div>
        </section>
      </main>
      </>
  )
}
export default App
