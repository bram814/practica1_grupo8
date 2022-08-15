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