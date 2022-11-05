function yes() {
    var text = [
        'gaming like everyday',
        'i wanna be the gamer pro',
        'what are you doing here?',
        'if you dont want to lose time just leave this page :)',
        'pretty hungry ngl',
        'i want some cookies, you have?',
        'how many messages can fit within 1gb?',
        'can i put ma balls in yo jaw?',
        'this thing will never be finished'
    ];
    var theChance = Math.floor(Math.random() * 1000);
    if (theChance === 727) {
        document.getElementById('randtext'). innerHTML = 'this message has 1/1000 or 0.1% to appear, fr';
    } else {
        var item = text[Math.floor(Math.random() * text.length)];
        document.getElementById('randtext').innerHTML = item;
    };
};
function yesV2() {
    var textV2 = [
        'loadin\'...',
        'makin\' the website work...',
        'finishing to do nothing...',
        'bakin\' cookies...',
        'setup has failed to install, try again',
        'waiting for input...',
        'press ctrl+alt+del to continue',
        '<a href="https://youtu.be/dQw4w9WgXcQ">click here to load faster</a>'
    ];
    var itemV2 = textV2[Math.floor(Math.random() * textV2.length)];
    document.getElementById('theLoad').innerHTML = itemV2;
};