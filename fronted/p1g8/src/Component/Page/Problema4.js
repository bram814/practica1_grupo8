import React, {useState} from 'react';
import './css/style.css'
import { setpotencia } from '../../Api/Routes';


function Problema4(props){ 

    const [numero, setNumero] = useState('');
    const [result, setresult] = useState('');


    function handleInputChangeNumero(e){
        setNumero(e.target.value)
    }

    async function handleAplicante(e){
        e.preventDefault();
        console.log(numero);
        var response = await setpotencia(parseInt(numero));
        var query = await response.json();
        console.log(query);
        setresult(query.result)
        alert(query.result);
        setNumero('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>Potencia</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero" value={numero} onChange={handleInputChangeNumero} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
                <center>
                <h1>Su resultado es : {result}</h1>
                </center>
            </div>
        </div>
        </>  
                
    );
}


export default Problema4;