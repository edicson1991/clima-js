import'./module.js';
// console.log('hola mundo, desde js externo');
// console.log('edicson');

// var name = 'edicson' 
// name

// {
//     let name = 'edicson h'
//     name
   
// }

// {
//     let lastName = 'hurtado'
//     lastName
//     {      
//         lastName = 'gonzalez'
//         lastName
//     }
// }


// {
// const lastName = 'perez'
// lastName
// {
  
//     lastName = 'perez'
// }

// }

// const name = 'Edicson' //string
// const booleano = false // boolen
// const edad = 20 //number
// const  objetos = {
//     name: 'edicson',
//     lastname:'hurtado'
// }
// objetos.name // ?

// let zzz
// console.log(zzz);// ?

// typeof(zzz)// ?
// typeof(objetos) // ?
// typeof (booleano) // ? 
// typeof(name)// ?

// let c = null // ?

// c = {

// }
// typeof(c)// ?


// Number.MAX_SAFE_INTEGER // ?

// let fff = 1n  //? 

// fff * 2n // ?

// BigInt (8) // ? 


//     const id = Symbol ('id')

//     const user2 = {
//         name: ''
//     }


// const name = 'Edicson'
// const lastName = 'Hurtado'

// // const fullname = name + ' ' + lastName // 
// const fullName = `${name} ${lastName}` // ?

// fullName.length // ?

// fullName.charAt(14) // ?

// fullName.replace('Edicson', 'Armando')// ?
// fullName.search('Edi') // ?
// fullName.toUpperCase () // ?

// if (name) {
// console.log('la condicion SI se cumplio')
// } else {
//     console.log('la condicion no se cumplio')
// }

// // falsy Values
// Boolean('') //?

// // Truthly Values
// Boolean('Edicson')// ?

// 5   
// 0.5 
// .5 // ?

// Number ('5') //?
// typeof(Number('5'))//?

//Aritmetica basica

// 10 + 5//?
// 10 - 5//?
// 5 * 5 //?
// 10/5 //?
// 5%2 //? reciduo

// Math.pow(5, 2) //?
// Math.sqrt(9)//?

// metodos

// const sum = 5 + 7 //?
// typeof sum.toFixed(2)//?
// typeof sum //?

// // sum.toString ()

// 5 + '5'//?
// typeof (5 + '5') //?
// '6' + 5 //?
// ''+ 10 //?

// Number (sum) + 5 //?

// 10 - '5'//?


// typeof (10 - '')//?


// 10 * '' //?
// 10/ '' //?

// 10 * 'edicson' //?

// const nan = 10 - 'edicson'

// if(nan === NaN){
//     console.log('Si son iguales')
// }else{
//     console.log('No son iguales')
// }

// typeof(NaN) //?


//Object <<<<<<>>>>>>>

// const user = {

//     name: 'Edicson',
//     lastName: 'Hurtado',

// }

// user.name //?
// user['name']//?

// const find = 'name'
// user[find] //?

// user.age = 30 
// user.married = false //?
// user //?

// user.course = {
//     name: 'javaScrip',
//     clase: 50
// }
// user //?

// const{name} = user //?

// // Propiedades - mettodo

// user.fullname = function(){retourn `${user.name} ${}`//?

//FUNCIONES <<<<<>>>>>>

// declaracion de funcion 

// function suma(a, b) {
   
//       return a + b  //?   
// }

// suma(5, 5) //?

// // expresion de funcion
// const resta = function(a, b){
//     return a - b //?
// }

// resta(6, 3)

// // funcion especial arroun fuction
// const multi = (a, b)=>{
//     return a*b 
// }

// multi(5, 7) //?


// arrays <<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Array ()

// const nameList = ['Edicson','Andres', 'Juan', 'Paula']

// nameList[0]//?
// nameList.length //?
// nameList[nameList.length - 1] //?

// //propiedades

// nameList ['wtf'] = 'what the dkfnewjfb'
// nameList //?


// const newList = nameList.concat('Juanito') //?
// newList //?

// const newList = [...nameList, 'Maria'] //?

// newList.push('Leonardo') //?
// newList //?

// newList.pop() //?
// newList//?

// //Muktidimencion
// nameList.push(['Gonzalez', 'fernandes', 'pacheco', 'peluche'])//?
// nameList //?

// nameList[4] [3]//?

// const bidimencional = [[0,1,2], [3,4,5], [0,1,1]]
// bidimencional[0][0]//?

// iterar objetos

// for(prop in user){

// }

//juanito escribe planas por 100 que digan NO DEBO OLVIDAR MI CUADERNO EN CASA

for (let i = 0; i <= 1000; i=i+1){
    console.log('No debo olvidad mi cuaderno en casa') //?
}


// IMPORTANTE OPERADORES == === != !== < > || && ! <= >=

const myValue = 'value'
//comparar resultado ==
if (5 == 5 ) {
    console.log('funciona')
}

// compara el valor y el tipo del valor ===
5==='6' //?

// diferencia en operando
5 != 6 //?
5 != 5 //?

5 != '5' //?

5 !== '5' //?

10 > 5 //?
5 >= 5 //?
5 <= 5 //?

// operador de negacion && ||

if(true && true){ //?
    console.log('finciona')
}


if(true || true){ //?
    console.log('finciona')
}

let name = 'edicson'


if(name === 'Armando' ){
console.log('Armando')
}else if(name == 'paula') {
    console.log('es paula')
}else if(name == 'Andres') {
    console.log('es andres')
} else{
    console.log('Edicson')
}

// ejercicio

function isPrimeNumber (number){
    for(let i = 2; i < number ; i = + 1){
        if (number % i === 0){
            return false //?
    }
}

return number > 1 //?

}
isPrimeNumber(9) //?


// switch('edicson'){
//     case 
// }
try{
    user.course.modules.list //?
}catch{
    console.log('algo ha fallado')

}finally{

}

