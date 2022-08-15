import React, {useState} from 'react';
import './css/style.css'
import { setIMPAROPAR } from '../../Api/Routes';


function Problema1(props){ 

    const [numero, setNumero] = useState('');


    function handleInputChangeNumero(e){
        setNumero(e.target.value)
    }

    async function handleAplicante(e){
        e.preventDefault();
        console.log(numero);
        var response = await setIMPAROPAR(parseInt(numero));
        var query = await response.json();
        console.log(query);
        alert(query.Result);
        setNumero('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>Par o Impar</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero" value={numero} onChange={handleInputChangeNumero} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>  
                
    );
}


export default Problema1;