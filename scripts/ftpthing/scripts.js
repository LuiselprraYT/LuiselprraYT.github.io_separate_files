function testPwd() {
    var pwd = document.getElementById('pwd').value;

    if (pwd === 'hrllo') {
        alert('Nice!')
        alert('Now...')
        window.location.href = '../assets/ftpthing/die.gif';
    } else {
        alert('Wrong answer');
        alert('Now I redirect you to a another page');
        alert('Wait a moment...');
        alert('Done!');
        window.location.href = 'wrongpage.html';
    };
}

function mobBum(event) {
    var code = event.keyCode;

    if (code === 8) {
        var cipeBum = document.getElementById('moob');
        var sound = cipeBum.cloneNode();

        sound.play();
    };
}

function fardPlay() {
    var epicFard = document.getElementById('fard');
    var sound = epicFard.cloneNode();

    sound.play();
}

function boomPlay() {
    var epicBum = document.getElementById('boom');
    var sound = epicBum.cloneNode();

    sound.play();
}

function hintsRed() {
    window.location.href = 'hints.html';
}