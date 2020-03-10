"use strict"


function isrinktiRaides( text, step ) {
    //validuojame teksta
    if (typeof(text) !== 'string') {
        return 'ERROR: pirma reiksme turi buti textine.';
    }

    //validuojame zingsni
    if (typeof(step) !== 'number') {
        return 'ERROR: pirma reiksme turi buti skaicius.';
    }
    if ( !isFinite(step) ) {
        return 'ERROR: Antra reiksme turi buti sveikasis skaicius.';
    }
    if ( step % 1 !== 0 ) {
        return 'ERROR: Antra reiksme turi buti skaicius be desimtaines dalies.';
    }
    if ( step === 0 ) {
        return 'ERROR: Antra reiksme negali buti 0.';
    }
    if ( text.length < step ) {
        return 'ERROR: Antra reiksme negali buti didesne nei teksto.';
    }

    console.log('_________');
    console.log(text, step);
    
    //all good -> logika

    let answer = '';
    if ( step > 0) {
    for (let i = step-1; i < text.length; i=i+step) {
        const raide = text[i];
        answer = answer + raide;
    }    }
    if ( step < 0) {
    for (let i = text.length+step; i >= 0; i=i+step) {
        const raide = text[i];
        answer += raide;
        }
    }
    return answer;  
}
console.log( isrinktiRaides( 1561, 2 ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( "1561", "2" ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( 'abc', Infinity ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( 'abc', NaN ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( 'abc', 4 ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( 'abc', 0 ), ' -> ', 'ERROR' );
console.log( isrinktiRaides( 'abcdefghijkl', 3.13 ), ' -> ', 'ERROR' );

console.log( isrinktiRaides( 'abcdefg', 2 ), ' -> ', 'bdf' );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ), ' -> ', 'cfil' );

console.log( isrinktiRaides( 'abcdefg', -2 ), ' -> ', 'fdb' );
console.log( isrinktiRaides( 'abcdefghijkl', -3 ), ' -> ', 'jgda' );

// ? reiskia betkoki matematini operatoriu
// a = a ? b; tas pats kas -->
//  a ?= b;
