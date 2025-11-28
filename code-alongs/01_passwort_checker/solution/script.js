const password = prompt('Gib hier ein Passwort ein, dass du prüfen möchtest');

function check_password(password) {
    let password_is_secure = true;
    // -> passwortlänge
    if (password.length < 12) {
        password_is_secure = false;
    }
    // -> zahlen
    if (!/\d/.test(password)) {
        password_is_secure = false;
    }

    if (password_is_secure) {
        console.log('Dein Passwort ist sicher!');
    } else {
        console.log('Dein Passwort muss optimiert werden.')
    }
}

check_password(password)
