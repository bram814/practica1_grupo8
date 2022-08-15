import React, {useState} from 'react';
import './css/style.css'
import { setALREVEZ } from '../../Api/Routes';


function Problema3(props){ 

    const [palabra, setPalabra] = useState('');


    function handleInputChangeNumero(e){
        setPalabra(e.target.value)
    }

    async function handleAplicante(e){
        e.preventDefault();
        console.log(palabra);
        var response = await setALREVEZ(palabra);
        var query = await response.json();
        console.log(query);
        alert(query.Result);
        setPalabra('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>ALREVEZ</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Palabra" value={palabra} onChange={handleInputChangeNumero} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>  
                
    );
}


export default Problema3;