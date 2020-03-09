"use strict"

function skaitmenuKiekisSkaiciuje( num, correct ) {
    let count = 0;

    // validuojame inputa
    if ( typeof(num) !== 'number') {
        return console.error('ERROR: skaicius netinkamo tipo.');
    }
    if (num === Infinity || num === -Infinity ) {
        return console.error('ERROR: skaicius netinkamos reiksmes.');
    }
    if ( !isFinite(num) ) {
        return console.error('ERROR: skaicius netinkamos reiksmes NaN.');
    }

    // skaiciujame

    // const skaiciusTekstu = num.toString();
    const skaiciusTekstu = ''+num;
    // const skaiciusTekstu = num+''();
    count = skaiciusTekstu.length;

    // jei randame '-', tai 
    // count = --;
    if (num < 0) {
        count--;
    }
    //jej randame ',', tai
    //count = --;
    if (num % 1 !== 0) {
        count--;
    }

    return console.log( count, ' -> ', correct );
}
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( 'asd' );
skaitmenuKiekisSkaiciuje( null );
skaitmenuKiekisSkaiciuje( true );
skaitmenuKiekisSkaiciuje( false );
skaitmenuKiekisSkaiciuje( ['ff'] );
skaitmenuKiekisSkaiciuje( [55] );
skaitmenuKiekisSkaiciuje( [55, 'kkk'] );
skaitmenuKiekisSkaiciuje( [55, 5635] );
skaitmenuKiekisSkaiciuje( Infinity );
skaitmenuKiekisSkaiciuje( -Infinity );
skaitmenuKiekisSkaiciuje( NaN );

skaitmenuKiekisSkaiciuje( 5, 1 );
skaitmenuKiekisSkaiciuje( 781, 3 );
skaitmenuKiekisSkaiciuje( 37060123456, 11 );
skaitmenuKiekisSkaiciuje( 3.14, 3 );
skaitmenuKiekisSkaiciuje( -3.1415, 5 );
skaitmenuKiekisSkaiciuje( -1989, 4 );
skaitmenuKiekisSkaiciuje( 370601234563706012345637060123456370601234563706012345637060123456, 66 );
