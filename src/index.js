const cangjie = require('./cangjie5.json');

const alphabet = "日月金木水火土竹戈十大中一弓人心手口尸廿山女田難卜重";

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

function onKeyUp(e) {
  if (e.code === 'Enter') {
    let q = document.getElementById('query').value;
    let resultBox = document.getElementById('result');

    resultBox.innerHTML = q.split('')
      .map(c => createEntry(c, toCode(c)))
      .join('');
  }
}

document.getElementById('query').addEventListener('keyup', (e) => {
  onKeyUp(e);
});
