const cangjie = require('./cangjie5.json');

const alphabet = "日月金木水火土竹戈十大中一弓人心手口尸廿山女田難卜重";

/**
 * Convert a sequence of keyboard letters into Chinese characters.
 */
function lettersToAlphabet(letters) {
    let ret = ""
    for (const c of letters) {
        let i = c.charCodeAt(0) - 97;
        if (i < alphabet.length) {
            ret += alphabet[i];
        }
    }

    return ret;
}

/**
 * Get the sequence of keyboard letters that create a single Chinese character.
 */
function toCode(c) {
    if (cangjie.hasOwnProperty(c)) {
        return cangjie[c].map(lettersToAlphabet);
    } else {
        return [];
    }
}

function createEntry(c, defList) {
    let joint = defList.join(' or ');
    return '<span class="char">' + c + '</span>' +
        ' : <span class="codes">' + joint + '</span><br>';
}

function onInput() {
    let q = document.getElementById('query').value;
    let resultBox = document.getElementById('result');

    resultBox.innerHTML = q.split('')
        .map(c => createEntry(c, toCode(c)))
        .join('');
}

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    const searchInput = document.getElementById('query');
    query.addEventListener('input', onInput);
    query.addEventListener('keyup', e => {
        if (e.code === 'Enter') {
            onInput();
        }
    });
});
