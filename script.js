//region Variables
var nombre1 = "abc";
let nombre2 = 'def';
const nombre3 = `ghi
jkl`;
var fin = array(0,1,2,3,4);
var num1 = 10;
var num2 = 5;
//endregion

//region Mostrar
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
//endregion

//region Matematica
function calculoSuma(num1,num2){
    var total = num1+num2;
    return total;
}

function calculoResta(num1,num2){
    var total = num1-num2;
    return total;
}

function calculoMultiplicacion (num1, num2){
    var total = num1*num2;
    return total;
}

function calculoDivision (num1, num2){
    var total = num1/num2;
    return total;
}
//endregion

//region Repetitiva
    for (value of fin){
        console.log(value++);
    }
//endregion