import './Conteudo.css'


const Conteudo = () => {
  
    return(
       
        <div className='styleConteudo'>

          <Exibir/>
          
        </div>
    )
}
export default Conteudo;

var videos = {
  video1: {
      address: "./Imagens/ferrari.png",
      desc: "Carro de luxo da Ferrari na cor vermelha",
      classe: "Carro"
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
    
    
    switch (videos[`video${i+1}`].classe){
      case nome:
        resultado[teste] = videos[`video${i+1}`];
        teste++;
        break;
      default:
    }

  } 
  return(resultado);
} ;

const Exibir = () => {
  var resultado = busca("carro");

  for(let a=0; a<Object.keys(resultado).length; a++){
    return(
      <img src={resultado[a].address} alt={resultado[a].desc} className={resultado[a].classe}/>
    )
  }
  

}
