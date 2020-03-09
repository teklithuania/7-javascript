"use strict"

function didziausiasSkaiciusSarase( list, correct ) {
    //validavimas
    if ( !Array.isArray(list) ) {
        return console.error('ERROR: Netinkamo tipo reiksme.');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: tuscias masyvas.');
    }
    
    let biggest = -Infinity;
    console.log(list);
    //logika
    for ( let i=1; i<list.length; i++ ){
        const elementas = list[i];
        if (typeof(elementas) !== 'number' || 
        !isFinite(elementas)) {
            // isitikinu kad dirbu su skaiciumi
            continue;
        }
            //jei ne, einu prie kito saraso elemento
    if ( elementas > biggest ) {
        biggest = elementas;
        }
    }
    return console.log( biggest, ' -> ', correct );
}

didziausiasSkaiciusSarase( 'pomidoras' );
didziausiasSkaiciusSarase( [] );
didziausiasSkaiciusSarase( [515] );
didziausiasSkaiciusSarase( [true] );
didziausiasSkaiciusSarase( [false] );
didziausiasSkaiciusSarase( [null] );
didziausiasSkaiciusSarase( [undefined] );

didziausiasSkaiciusSarase( [ 1 ], 1 );
didziausiasSkaiciusSarase( [ 1, 2, 3 ], 3 );
didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ], 78 );
didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ], 69 );
didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ], -1 );
