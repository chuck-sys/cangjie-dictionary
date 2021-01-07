const API_URL = 'https://us-central1-cangjie-dictionary.cloudfunctions.net/';
const ENDPT = API_URL + 'decompose?q=';

function createEntry(c, defList) {
    let joint = defList.map(item => item.code).join(' or ');
    return '<span class="char">' + c + '</span>' +
        ' : <span class="codes">' + joint + '</span><br>';
}

function onKeyUp(e) {
  if (e.code === 'Enter') {
    let q = document.getElementById('query').value;
    fetch(ENDPT + q)
      .then(res => res.json())
      .then(res => {
        let resultBox = document.getElementById('result');
        result.innerHTML = Object.keys(res)
          .filter(k => res[k].length > 0)
          .map(k => createEntry(k, res[k]))
          .join('');
      })
      .catch(err => alert(err));
  }
}
