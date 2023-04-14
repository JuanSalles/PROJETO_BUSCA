import './Conteudo.css'
import { useState } from 'react';

var meajude = "";

const Conteudo = () => {
    var parse = require('html-react-parser');

    const [atualiza, setAtualiza] = useState('');
    meajude = atualiza
    
    return(
      <>
        <div className="pesquisa">

          <input type='text' placeholder='Digite aqui seu filtro' value={atualiza} onChange={e => setAtualiza(e.target.value)}/>
        
        </div>

        <div className='styleConteudo'>

          {parse(Exibir())}
            
        </div>
      </>
    )
}
export default Conteudo;

var videos = {
  video1: {
      address: "./Imagens/ferrari.png",
      desc: "Carro de luxo da Ferrari na cor vermelha",
      classe: "carro"
  },
  video2: {
      address: "./Imagens/ps5.png",
      desc: "video game playstation 5",
      classe: "game"
  },
  video3: {
      address: "./Imagens/comida-arabe.png",
      desc: "comida da regiao do oriente medio",
      classe: "comida"
  },
  video4: {
      address: "./Imagens/skate.png",
      desc: "skatista descendo uma rampa",
      classe: "esporte"
  },
  video5: {
      address: "./Imagens/moqueca.png",
      desc: "comida tipica do nordeste feita normalmente com frutos do mar",
      classe: "comida"
  },
  video6: {
      address: "./Imagens/porsche.png",
      desc: "Carro de luxo da marca porsche",
      classe: "carro"
  }
}


const busca = (nome) => {
  var resultado = {};
  let teste = 0;

    for (let i=0; i<Object.keys(videos).length ; i++){
      
      if (nome === "") {
        resultado[teste] = videos[`video${i+1}`];
        teste++;
      }else{
      
        switch (videos[`video${i+1}`].classe){
          case nome:
          
            resultado[teste] = videos[`video${i+1}`];
            teste++;
            break;
          
          default:
      }
      }

    } 
  
  return(resultado);
} ;



const Exibir = () => {
 
  var resultado = busca(meajude);
  var result = ""
  console.log(resultado)

  for(let a=0; a<Object.keys(resultado).length; a++){

    result = result.concat(`<img src="${resultado[a].address}" alt="${resultado[a].desc}" className="${resultado[a].classe}"/>`)
  
  }

  console.log(result)
  return(result)

}
