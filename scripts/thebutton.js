function pushP(event) {
    var code = event.keyCode;
    if (code == 32) {
        fartr();
    }
}
function fartr() {
    var sound =  document.getElementById('fart');
    var fard = sound.cloneNode();

    fard.play();
}
function changeToBoom() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected vine boom';
    sound.src = '/assets/thebutton/bom.mp3'
}
function changeToFart() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected reverb fard';
    sound.src = '/assets/thebutton/fard.mp3'
}
function changeToBruh() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected the bruh';
    sound.src = '/assets/thebutton/bruh.mp3'
}
function changeToBas() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected bass drop';
    sound.src = '/assets/thebutton/bas.mp3'
}
function changeToOmaga() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected omaga';
    sound.src = '/assets/thebutton/omaga.mp3'
}
function changeToBell() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected taco bel';
    sound.src = '/assets/thebutton/bong.mp3'
}
function changeToSus() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected the sus';
    sound.src = '/assets/thebutton/amogos.mp3'
}
function changeToAAAA() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected aaaaaaaaaaa';
    sound.src = '/assets/thebutton/a.mp3'
}
function changeToAugh() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected augh';
    sound.src = '/assets/thebutton/augh.mp3'
}
function changeToJijijija() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected jijijija';
    sound.src = '/assets/thebutton/jijijija.mp3'
}
function changeToSansum() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected sansum';
    sound.src = '/assets/thebutton/sansum.mp3'
}
function changeToDog() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected what the dog doin?';
    sound.src = '/assets/thebutton/dog.mp3'
}
function changeToGoku() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected goku';
    sound.src = '/assets/thebutton/goku.mp3'
}
function changeToTueniguan() {
    var sound = document.getElementById('fart');
    document.getElementById('text').innerHTML = 'you selected tueniguan';
    sound.src = '/assets/thebutton/tueniguan.mp3'
}