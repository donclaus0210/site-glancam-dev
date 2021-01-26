import './Servicos.css';
import ImagemInformativo from './imgs/informativo.svg';
import ImagemPublicitario from './imgs/publicitario.svg';
import ImagemEcommerce from './imgs/e-commerce.svg';
import ImagemLogo from './imgs/logo.svg';
import ImagemManutencao from './imgs/manutencao.svg';
import ImagemHospedagm from './imgs/hospedagem.svg';
import React from 'react';

const servicos = [
  { id: 0, nome: 'SITES INFORMATIVOS', imagem: ImagemInformativo },
  { id: 1, nome: 'SITES PUBLICITÁRIOS', imagem: ImagemPublicitario },
  { id: 2, nome: 'E-COMMERCE', imagem: ImagemEcommerce },
  { id: 3, nome: 'LOGOS', imagem: ImagemLogo },
  { id: 4, nome: 'MANUTENÇÃO', imagem: ImagemManutencao },
  { id: 5, nome: 'HOSPEDAGEM', imagem: ImagemHospedagm },
];

function alterarImagem(id) {

  let circulos = document.querySelectorAll(".botoes btn")
  circulos = Array.from(circulos)
  circulos.forEach(item=>item.className = "")
  circulos[id].classList.add("botao-colorido")

  let itens = document.querySelectorAll(".div-servicos ul li")
  itens = Array.from(itens)
  itens.forEach(item=>{
    item.querySelector("img").src = servicos.filter(servico => servico.id === id)[0].imagem;
    item.querySelector("img").alt = servicos.filter(servico => servico.id === id)[0].nome;
    item.querySelector("h2").innerHTML = servicos.filter(servico => servico.id === id)[0].nome;
    id++;
  })
}

const Servicos = () => {

  return (
    <div className="div-servicos">
      <h1>&lt;NOSSOS SERVIÇOS/&gt;</h1>
      <ul>
        <li>
          <img src={ImagemInformativo} alt="Sites Informativos" />
          <h2>SITES INFORMATIVOS</h2>
        </li>
        <li className="central">
          <img src={ImagemPublicitario} alt="Sites Publicitários" />
          <h2>SITES PUBLICITÁRIOS</h2>
        </li>
        <li>
          <img src={ImagemEcommerce} alt="E-Commerce" />
          <h2>E-COMMERCE</h2>
        </li>
      </ul>
      <div className="botoes">
        <btn className="botao-colorido" onClick={() => alterarImagem(0)}></btn>
        <btn onClick={() => alterarImagem(1)}></btn>
        <btn onClick={() => alterarImagem(2)}></btn>
        <btn onClick={() => alterarImagem(3)}></btn>
      </div>
      <div className="btn-saiba-mais">
        <a href="./saibamais.html">SAIBA MAIS</a>
      </div>
    </div>
  );
};

export default Servicos;