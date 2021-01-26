import React from 'react'
import Logo from './imgs/logo.svg'
import LinkedIn from './imgs/linkedin.svg'
import WhatsApp from './imgs/whatsapp.svg'
import Facebook from './imgs/facebook.svg'
import Instagram from './imgs/instagram.svg'
import GitHub from './imgs/github.svg'
import Telegram from './imgs/telegram.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="rodape">
        <div className="sobre">
          <img src={Logo} alt="<GLANCAM/>"/>
          <p>Somos uma jovem empresa de desenvolvimento web, buscando trazer maior competitividade, inovação e simplicidade, modernizando empresas para o século XXI, através da criação de sites.</p>
          <a href="#">SAIBA MAIS</a>
        </div>
        <div className="redes">
          <h1>&lt;REDES SOCIAIS/&gt;</h1>
          <div className="grid-social">
            <div className="item1"><a href="https://www.google.com/search?q=batata&sxsrf=ALeKk035IqnfbYJilYTHlsJ_w7iziqgY7g:1611682174369&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj8vfn7j7ruAhVxHLkGHTZRDDQQ_AUoAXoECBIQAw&biw=1920&bih=969#imgrc=GP6OL6JuP64KEM"><img src={LinkedIn} alt="LinkedIn"/></a></div>
            <div className="item2"><a href="https://www.google.com/"><img src={WhatsApp} alt="WhatsApp"/></a></div>
            <div className="item3"><a href="https://www.google.com/"><img src={Facebook} alt="Facebook"/></a></div>
            <div className="item4"><a href="https://www.google.com/"><img src={Instagram} alt="Instagram"/></a></div>
            <div className="item5"><a href="https://www.google.com/"><img src={GitHub} alt="GitHub"/></a></div>
            <div className="item6"><a href="https://www.google.com/"><img src={Telegram} alt="Telegram"/></a></div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>Copyright &copy; 2021 Equipe GLANCAM LTDA - Alguns direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
