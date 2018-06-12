const API_URL = 'https://us-central1-cangjie-dictionary.cloudfunctions.net/';
const ENDPT = API_URL + 'decompose?q=';

function createEntry(c, defList) {
    let joint = defList.map(item => item.code).join(' or ');
    return '<span class="char">' + c + '</span>' +
        ' : <span class="codes">' + joint + '</span><br>';
}

$(function() {
    // Submit on "enter" key pressed
    $('#query').on('keyup', function(key) {
        if (key.keyCode == 13) {
            let query = $('#query').val();
            $.get(ENDPT + query, data => {
                $('#result').html(
                    // Filter out the irrelevant codes
                    Object.keys(data)
                    .filter(k => data[k].length > 0)
                    .map(k => createEntry(k, data[k]))
                    .join('')
                );
            });
        }
    });
});
