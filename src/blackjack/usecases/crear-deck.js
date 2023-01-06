import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * 
 * @param {array<string>} tiposDecarta Ejemplo: ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array} retorna un nuevo deck de carta
 */
export const crearDeck = (tiposDecarta, tiposEspeciales) => {

    if( !tiposDecarta || tiposDecarta.lenght === 0) 
    throw new Error('tiposDeCarta es  obligatorio como un arreglo de string ');

    if( !tiposEspeciales || tiposEspeciales.lenght === 0) 
    throw new Error('tiposDeCarta es  obligatorio como un arreglo de string ');

    let deck = [];  

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}