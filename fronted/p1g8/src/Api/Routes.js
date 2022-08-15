// ruta primer problema
const url_api_setIMPAROPAR = "http://localhost:3000/PAROIMPAR/";

export async function setIMPAROPAR(num){ // Traer todo el cargo

    return fetch(url_api_setIMPAROPAR+num, {
        method: "GET",
        params: JSON.stringify({
            numero: num,
        }),

    });
}


// ruta segundo problema
const url_api_setfibo = "http://localhost:3000/fibo/";

export async function setfibo(num){

    return fetch(url_api_setfibo+num, {
        method: "GET",
        params: JSON.stringify({
            numero: num,
        }),

    });
}

// ruta tercer problema
const url_api_setAlrevez = "http://localhost:3000/ALREVEZ/";

export async function setALREVEZ(cadena){

    return fetch(url_api_setAlrevez+cadena, {
        method: "GET",
        params: JSON.stringify({
            palabra: cadena,
        }),

    });
}

// ruta cuarto problema
const url_api_setPotencia = "http://localhost:3000/Potencia/";

export async function setpotencia(numero_){

    return fetch(url_api_setPotencia+numero_, {
        method: "GET",
        params: JSON.stringify({
            numero: numero_,
        }),

    });
}


// ruta cuarto parte 2 problema
const url_api_setRaiz = "http://localhost:3000/Raiz/";

export async function setRaiz(num){

    return fetch(url_api_setRaiz+num, {
        method: "GET",
        params: JSON.stringify({
            numero: num,
        }),

    });
}


// ruta cuarto parte 2 problema
const url_api_setMulti = "http://localhost:3000/multi/";

export async function setMulti(num1, num2){

    return fetch(url_api_setMulti+num1 + "/" + num2, {
        method: "GET",
        params: JSON.stringify({
            numero1: num1,
            numero2: num2
        }),

    });
}