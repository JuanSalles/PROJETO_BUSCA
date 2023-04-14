import './InputSearch.css'
import busca from '../Conteudo'

const InputSearch = () => {

    
    return(
        <div className="pesquisa">
            <input type='text' placeholder='Digite aqui seu filtro'/>
            <button onClick={busca}>GO!</button>
        </div>
        
      
    )
};

export default InputSearch;