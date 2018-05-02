const notes = '[CDEFGAB](#?|b?)';
const accidentals = '(b|bb)?';
const chords = '(/[CDEFGAB](#?|b?)|add|madd|m|maj7|maj|min7|min|sus)?';
const suspends = '(1|2|3|4|5|6|7|8|9)?';
const sharp = '(#)?';
export const chordsRegex = new RegExp(
    '\\b' + notes + accidentals + chords + suspends + '\\b' + sharp,
    'g'
);
