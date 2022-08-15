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

    res.status(200).json({
        Resultado : fib(numero)
    });

});

var fib = function(n) {
    if (n === 1) {
        return [0, 1];
      } else {
        var arr = fib(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
      }
}


router.get('/ALREVEZ/:palabra', (req, res) => {
    var cadena = req.params.palabra;
    var separada = cadena.split("");
    var separada2 = cadena.split("");
    for(i=1; i<separada2.length; i++){
        separada2[i]=separada2[i]+"|"
    }
    var invertida = separada.reverse();
    var invertida2 = separada2.reverse();
    var unida = invertida.join("");
    var unida2= invertida2.join("");
    console.log(unida);
    result = 'Palabra invertida: '+ unida +"\n" +"Letras separadas: "+ unida2;

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

router.get('/multi/:numero1/:numero2', (req, res) =>{
    var numero1 = req.params.numero1;
    var numero2 = req.params.numero2;

    resul = numero1*numero2

    res.status(200).json({
    Resultado : resul
    });
});

router.get('/div/:numero1/:numero2', (req, res) =>{
    var numero1 = req.params.numero1;
    var numero2 = req.params.numero2;

    if (numero2 == 0){
        res.status(200).json({
            Resultado : "No se puede realizar division entre 0"
        });
    }else{
        resul = numero1/numero2
    
        res.status(200).json({
            Resultado : resul
        });
    }
});


module.exports = router;