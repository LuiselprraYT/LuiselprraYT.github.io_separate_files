function yes() {
    var text = [
        'gaming like everyday',
        'i wanna be the gamer pro',
        'what are you doing here?',
        'if you dont want to lose time just leave this page :)',
        'pretty hungry ngl',
        'i want some cookies, you have?'
    ];
    var item = text[Math.floor(Math.random()*text.length)];
    document.getElementById('randtext').innerHTML = item;
}