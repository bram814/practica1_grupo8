import React, {useState} from 'react';
import './css/style.css'
import { setIMPAROPAR } from '../../Api/Routes';


function Problema1(props){ 

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
        var newNum = parseInt(numero) + parseInt(numero2)
        var response = await setIMPAROPAR(parseInt(newNum));
        var query = await response.json();
        console.log(query);
        alert(query.Result + " - Suma: " + newNum);
        
        setNumero('');
        setNumero2('');

    }
    return(
        <>
        <div>
            <div className="row-md-6">
                <form className="form-aplicante" onSubmit={handleAplicante}>
                    <h1>Par o Impar</h1>
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero 1" value={numero} onChange={handleInputChangeNumero} />
                    <input className="etiqueta-aplicante" type="text" placeholder="Numero 2" value={numero2} onChange={handleInputChangeNumero2} />
                    <button className="boton-aplicante" type="submit">Enviar</button>
                </form>
            </div>
        </div>
        </>  
                
    );
}


export default Problema1;