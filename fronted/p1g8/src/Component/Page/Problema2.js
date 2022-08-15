import React, {useState} from 'react';
import './css/style.css'
import { setfibo } from '../../Api/Routes';


function Problema2(props){ 

    const [numero, setNumero] = useState('');


    function handleInputChangeNumero(e){
        setNumero(e.target.value)
    }

    async function handleAplicante(e){
        e.preventDefault();
        console.log(numero);
        var response = await setfibo(parseInt(numero));
        var query = await response.json();
        console.log(query);
        alert(query.Resultado);
        setNumero('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>Fibonacci</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero" value={numero} onChange={handleInputChangeNumero} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>  
                
    );
}


export default Problema2;