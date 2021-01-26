import './App.css';
import Header from './header/Header'
import Introduction from './introduction/Introduction'
import Servicos from './servicos/Servicos'
import Portifolio from './portifolio/Portifolio'
import Contato from './contato/Contato'
import Slogan from './slogan/Slogan'
import Footer from './footer/Footer'
import React from 'react'

function App() {
  return(
    <>
      <Header/>
      <section>
        <Introduction/>
      </section>
      
      <section>
        <Servicos/>
      </section>
      
      <section>
        <Portifolio/>
      </section>
      
      <section>
        <Contato />
      </section>
      
      <section>
        <Slogan/>
      </section>
      
      <Footer/>

    </>
  )
}

export default App;
