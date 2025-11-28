/*
* 10.c - Schach
* Du siehst, wenn du den Ausgangslagen-Code im
* Browser öffnest, dass ein Schachbrett abgebildet ist.
* Fällt dir was auf? Vielleicht ja, dass dieser Code
* extrem redundant ist. Lösche alles was im Container
* #board drin ist und versuche mit JavaScript & Loops
* das Schachbrett effizienter darzustellen.
* */

const board = document.querySelector('#board');

function paintChessBoard() {
    for (let row_index = 0; row_index < 8; row_index++) {
        for (let field_index = 0; field_index < 8; field_index++) {
            const row_is_even = row_index % 2 === 0;
            const field_is_even = field_index % 2 === 0;

            let mode;
            if (row_is_even) {
                mode = field_is_even ? 'light' : 'dark';
            } else {
                mode = field_is_even ? 'dark' : 'light';
            }

            const field = document.createElement('div');
            field.dataset.color = mode;
            board.appendChild(field);

        }
    }
}
paintChessBoard();
