/* eslint-disable import/extensions */

import create from './utils/create.js';

export default class Key {
constructor( {small, code, shift} ) {
    this.small = small; //определяем свойства полей
    this.shift = shift;
    this.code = code;
    this.isFnKey = Boolean(small.match(/Ctrl|arr|Alt|Shift|Tab|Back|Del|Enter|Caps|Win/));

    if (shift && shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) { //отрицание, лежит спецсимвол
        this.sub = create('div', 'sub', this.shift);
    } else {
        this.sub = create('div', 'sub', '');
    }

    this.letter = create('div', 'letter', small);
    this.div = create('div', 'keyboard__key', [this.sub, this.letter], null, ['code', this.code]);
    }
}



// new Key({obj}); передаем из layout
//keyB.sub.innerHTML = ''
