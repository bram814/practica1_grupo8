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