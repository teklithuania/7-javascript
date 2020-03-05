"use strict"

function tusciaFunkcija() {
    console.log('KKK');
}

tusciaFunkcija();

console.log('-------------');


const skaicius1 = 2;
const skaicius2 = -8;
const skaicius3 = 5;

function daugyba( num1, num2 ) {
    console.log('dave: ', num1, num2);
    
    return num1 * num2;
}

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
