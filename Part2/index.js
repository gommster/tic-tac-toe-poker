let id = document.getElementById('idGrabber');
let style = document.getElementById('styleGrabber');

function setCard() {
    let card = document.getElementById(idGrabber.value);
    card.style.color = styleGrabber.value;
}

function diamondReset() {
    document.getElementById('diamonds').style.color = null;
}

function clubsReset() {
    document.getElementById('clubs').style.color = null;
}

function heartsReset() {
    document.getElementById('hearts').style.color = null;
}

function spadesReset() {
    document.getElementById('spades').style.color = null;
}