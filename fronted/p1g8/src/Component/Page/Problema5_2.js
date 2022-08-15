import React, {useState} from 'react';
import './css/style.css'
import { setDiv } from '../../Api/Routes';


function Problema5_2(props){ 

    const [numero, setNumero] = useState('');
    const [numero2, setNumero2] = useState('');


    function handleInputChangeNumero(e){
        setNumero(e.target.value)
    }

    function handleInputChangeNumero2(e){
        setNumero2(e.target.value)
    }

    async function handleAplicante(e){
        e.preventDefault();
        console.log(numero);
        var response = await setDiv(parseInt(numero), parseInt(numero2));
        var query = await response.json();
        console.log(query);
        alert(query.Resultado);
        setNumero('');
        setNumero2('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>Division</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero 1" value={numero} onChange={handleInputChangeNumero} />
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero 2" value={numero2} onChange={handleInputChangeNumero2} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>  
                
    );
}


export default Problema5_2;