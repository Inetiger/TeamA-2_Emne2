"use strict";

function LeetSpeakConverter() {
    let text = model.input;
    model.end = '';
    for (let char of text) {
        let upper = char.toUpperCase()
        if (model.alphabet[upper]) {
            model.end += model.alphabet[upper]
        } else if (upper !== ' '){
            model.end += upper;
        } else {model.end += ''}
    }
    updateView()
}

//Lag et input felt, der brukeren kan skrive inn en tekst, og en knapp som konverterer teksten.
//A’er skal bli om til 4,
//E’er skal bli om til 3
//S’er skal bli om til 5
//O’er skal bli om til 0
//L’er og I’er skal bli om til 1,
//T’er skal bli om til 7,
//G’er skal bli om til 6,
//Z’er skal bli om til 2.
//Bonus:
//Annenhver bokstav bli stor (den skal ignorere mellomrom, men telle med tall).