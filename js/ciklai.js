const pazymiai = [10, 5, 2, 8, 7];
console.log(pazymiai);

// console.log(pazymiai[0]);
// console.log(pazymiai[1]);
// console.log(pazymiai[2]);
// console.log(pazymiai[3]);
// console.log(pazymiai[4]);

for ( let i=0; i<5; i++ ) {
    console.log( i, '->', pazymiai[i] );
}

console.log('-----------------');

for (let o=-5; o<=5; o=o+2) {
    console.log(o); 
}

console.log('-----------------');

for ( let m = 10; m > 0; m-- ) {
    console.log(m);
}

console.log('-----------------');

for (let h=0; h<12; h++) {
    for (let m=0; m<60; m=m+5) {
        console.log(h + ':' + m);
    }
}

console.log('-----------------');

const dienos = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
console.log(dienos);
let counter = 0;

for (let m = 0; m < 12; m++) {
    for (let d=1; d<=dienos[m]; d++) {
        counter++;
        menuo = m+1;
        console.log( '(' + counter + ' d of y' + ') ' + menuo + ' m ' + d + ' d'); 
    }
}

console.log('-----------------');


let nuo = 0;
let iki = 100;
let suma = 0;
for ( let i=nuo; i<=iki; i++) {
    suma = suma + i;
}

console.log(nuo, iki, suma);

console.log('-----------------');

const tekstas = 'abcdef';
let atvirkstinis = '';
// for ( let i=tekstas.length-1; i>=0; i-- ) {
//     atvirkstinis = atvirkstinis + tekstas[i];
// }

// for ( let i=0; i<tekstas.length; i++) {
//     atvirkstinis = atvirkstinis + tekstas[tekstas.length - i -1];
// }

for ( let i=0; i<tekstas.length; i++) {
    atvirkstinis = tekstas[i] + atvirkstinis;
}

console.log(tekstas + ' -> ' + atvirkstinis);

console.log('-----------------');

const from = 0;
const till = 11;
const divider = 3;
let count = 0;

for ( let i=from; i<=till; i++ ) {
    console.log(i + ' -> ' + (i % divider));
    if (i % divider === 0) {
        count++;
    }
}
console.log('Skaičių intervale tarp ' + from + ' ir ' + till + ', besidalinančių be liekanos iš ' + divider +' yra ' + count + ' vienetai.');
