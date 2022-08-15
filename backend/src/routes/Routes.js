const {Router} = require('express');
const router = Router();

var numerosfibo = [];

// req : request
// res : responseve
router.get('/', (req, res) => {

    res.status(200).json({
        name : "Análisis y Diseño 1",
        website1 : "José Abraham Solórzano Herrera - 201800937 - Práctica 1 - Grupo 8",
        website2 : "Oscar René Rodríguez Vásquez - 201908335 - Práctica 1 - Grupo 8",
        website3 : "Uzzi Libni Aaron Pineda Solorzano - 201403541 - Práctica 1 - Grupo 8",
        website4 : "Bryan Gerardo Paez Morales - 201700945 - Práctica 1 - Grupo 8",
        website5 : " WIlfred Stewart Perez Solorzano - 201408419 - Práctica 1 - Grupo 8"

    });
});

router.get('/PAROIMPAR/:numero', (req, res) => {

    var numero = req.params.numero;
    var result = "Impar";

    console.log(numero);
    if(numero%2 == 0){
        result = "Par";
    }

    res.status(200).json({
        Result : result
    });
});

router.get('/fibo/:numero', (req, res) => {

    numerosfibo = []

    var numero = req.params.numero;

    fib(numero);

    res.status(200).json({
        Resultado : numerosfibo
    });

});

var fib = function(n) {
    numerosfibo.push(n)
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}


router.get('/ALREVEZ/:palabra', (req, res) => {
    var cadena = req.params.palabra;
    var separada = cadena.split("");
    var invertida = separada.reverse();
    var unida = invertida.join("");

    console.log(unida);
    result = unida

    res.status(200).json({
        Result : result
    });
});

router.get('/Potencia/:numero', (req, res) => {
    const numero = req.params.numero
    //operating
    const pow = Math.pow(numero,3)
    //preformatting data
    const data = {
        name: "Potencia",
        result: pow
    };
    //answer
    res.json(data)
});

router.get('/Raiz/:numero', (req, res) =>{
    var numero1 = req.params.numero;

    const Cubica = Math.pow(numero1, 1/3);

    res.status(200).json({
    Resultado : Cubica
    });
});


module.exports = router;