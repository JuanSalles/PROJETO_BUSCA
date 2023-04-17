import './Conteudo.css'
import { useState } from 'react';

const Conteudo = () => {
    

    const [wordSearch, setWordSearch] = useState('');
    const resultado = busca(wordSearch)
    
    return(
      <>
        <div className="pesquisa">

          <input type='text' placeholder='Digite aqui seu filtro' value={wordSearch} onChange={e => setWordSearch(e.target.value)}/>
        
        </div>

        <div className='styleConteudo'>

          {renderizarImagem(resultado.length-1, resultado)}
            
        </div>
      </>
    )
}

export default Conteudo;

const bancoDeDados = [
  {
      address: "./Imagens/ferrari.png",
      desc: "Carro de luxo da Ferrari na cor vermelha",
      classe: "carro"
  },
  {
      address: "./Imagens/ps5.png",
      desc: "video game playstation 5",
      classe: "game"
  },
  {
      address: "./Imagens/comida-arabe.png",
      desc: "comida da regiao do oriente medio",
      classe: "comida"
  },
  {
      address: "./Imagens/skate.png",
      desc: "skatista descendo uma rampa",
      classe: "esporte"
  },
  {
      address: "./Imagens/moqueca.png",
      desc: "comida tipica do nordeste feita normalmente com frutos do mar",
      classe: "comida"
  },
  {
      address: "./Imagens/porsche.png",
      desc: "Carro de luxo da marca porsche",
      classe: "carro"
  }
]


const busca = (nome) => {
  const resultado = [];
  let videoEncontrado = 0;
  
    for (let i=0; i<bancoDeDados.length ; i++){
      if (nome === "") {
        resultado[i] = bancoDeDados[i];
      }else if((bancoDeDados[i].classe) === nome){
        resultado[videoEncontrado] = bancoDeDados[i];
        videoEncontrado++;
      }
    }
  return(resultado);
} ;



const renderizarImagem = (n, resultado) => {
  if(n < 0){
    return 
  }else{
    return (
    <>
    <img src={resultado[n].address} alt={resultado[n].desc} className={resultado[n].classe}/>
    {renderizarImagem(n-1, resultado)}
    </>
    )
  }
}