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
    if ( typeof(num1) !== 'number' ) {
        return console.error('ERROR: netinkamo tipo reiksme 1');
    }
    if ( num1 === Infinity || num1 === -Infinity ) {
        return console.error('ERROR: Negalima operacija su begalybe.');
    }
    // if ( num1 === (-1*num1) ) {
    //     return console.error('ERROR: Negalima operacija su neigiamu skaiciumi.');
    // }
    if ( ''+num1 === "NaN" ) {
        return console.error('ERROR: Negalima operacija su NaN.');
    }
    if ( typeof(num2) !== 'number' ) {
        return console.error('ERROR: netinkamo tipo reiksme 2');
    }
    // console.log('dave: ', num1, num2);
    
    return console.log(num1 * num2);
    
}

 daugyba( skaicius1, skaicius2 );
 daugyba( skaicius3, skaicius2 );
 daugyba( skaicius1, skaicius3 );

 daugyba( 'gdfgfdgdf', 555 );
 daugyba( Infinity, 555 );
 daugyba( -Infinity, 555 );
 daugyba( NaN, 555 );
 daugyba( -200, 555 );


 