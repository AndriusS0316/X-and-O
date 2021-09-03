
let rez = 0;
let randomm;
let patikra = false;
let newGameSauga = true;



const title = document.querySelector('.title');
const random = document.querySelector('.random');
const x = document.querySelector('.x');
const o = document.querySelector('.o');

const vienas = document.querySelector('.vienas');
const du = document.querySelector('.du');
const trys = document.querySelector('.trys');

const keturi = document.querySelector('.keturi');
const penki = document.querySelector('.penki');
const sesi = document.querySelector('.sesi');

const septyni = document.querySelector('.septyni');
const astuoni = document.querySelector('.astuoni');
const devyni = document.querySelector('.devyni');



title.innerText


let deactivateRandom = document.querySelector('.random');
let deactivateX = document.querySelector('.x');
let deactivateO = document.querySelector('.o');

let deactivateVienas = document.querySelector('.vienas');
let deactivateDu = document.querySelector('.du');
let deactivateTrys = document.querySelector('.trys');

let deactivateKeturi = document.querySelector('.keturi');
let deactivatePenki = document.querySelector('.penki');
let deactivateSesi = document.querySelector('.sesi');

let deactivateSeptyni = document.querySelector('.septyni');
let deactivateAstuoni = document.querySelector('.astuoni');
let deactivateDevyni = document.querySelector('.devyni');




function randomClick() {
    rez = (Math.floor(Math.random() * 10) + 1);

    if (rez % 2 == 0) {
        title.innerText = "X Move";
        console.log("x");
        randomm = 2;
        patikra = true;
    } else {
        title.innerText = "O Move";
        console.log("o");
        randomm = 3;
        patikra = true;
    }
    document.querySelector('.random').disabled = 'true';
    document.querySelector('.x').disabled = 'true';
    document.querySelector('.o').disabled = 'true';

    deactivateRandom.style.background = 'grey';
    deactivateX.style.background = 'grey';
    deactivateO.style.background = 'grey';

    newGameSauga = false;

    if (newGameSauga) {
        document.querySelector('.new_game').disabled = true;
        deactivateNewGame.style.background = 'grey';
    } else {
        document.querySelector('.new_game').disabled = false;
        deactivateNewGame.style.background = 'yellowgreen';
    }
}


function xClick() {
    console.log("X");

    title.innerText = "X Move";
    randomm = 2;
    document.querySelector('.random').disabled = 'true';
    document.querySelector('.x').disabled = 'true';
    document.querySelector('.o').disabled = 'true';

    deactivateRandom.style.background = 'grey';
    deactivateX.style.background = 'grey';
    deactivateO.style.background = 'grey';

    patikra = true;
    newGameSauga = false;

    if (newGameSauga) {
        document.querySelector('.new_game').disabled = true;
        deactivateNewGame.style.background = 'grey';
    } else {
        document.querySelector('.new_game').disabled = false;
        deactivateNewGame.style.background = 'yellowgreen';
    }
}


function oClick() {
    console.log("O");

    title.innerText = "O Move";
    randomm = 3;
    document.querySelector('.random').disabled = 'true';
    document.querySelector('.x').disabled = 'true';
    document.querySelector('.o').disabled = 'true';

    deactivateRandom.style.background = 'grey';
    deactivateX.style.background = 'grey';
    deactivateO.style.background = 'grey';

    patikra = true;
    newGameSauga = false;

    if (newGameSauga) {
        document.querySelector('.new_game').disabled = true;
        deactivateNewGame.style.background = 'grey';
    } else {
        document.querySelector('.new_game').disabled = false;
        deactivateNewGame.style.background = 'yellowgreen';
    }
}



let newGame = document.querySelector('.new_game');

let deactivateNewGame = document.querySelector('.new_game');

if (newGameSauga) {
    document.querySelector('.new_game').disabled = true;
    deactivateNewGame.style.background = 'grey';
}



function vienasClick() {
    if (patikra) {
        console.log(1);
        if (randomm % 2 == 0) {
            document.querySelector('.vienas').disabled = 'true';
            deactivateVienas.style.background = 'blue';
            deactivateVienas.style.color = 'red';
            title.innerText = "O Move"
            vienas.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.vienas').disabled = 'true';
            deactivateVienas.style.background = 'red';
            deactivateVienas.style.color = 'blue';
            title.innerText = "X Move"
            vienas.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function duClick() {
    if (patikra) {
        console.log(2);
        if (randomm % 2 == 0) {
            document.querySelector('.du').disabled = 'true';
            deactivateDu.style.background = 'blue';
            deactivateDu.style.color = 'red';
            title.innerText = "O Move"
            du.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.du').disabled = 'true';
            deactivateDu.style.background = 'red';
            deactivateDu.style.color = 'blue';
            title.innerText = "X Move"
            du.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function trysClick() {
    if (patikra) {
        console.log(3);
        if (randomm % 2 == 0) {
            document.querySelector('.trys').disabled = 'true';
            deactivateTrys.style.background = 'blue';
            deactivateTrys.style.color = 'red';
            title.innerText = "O Move"
            trys.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.trys').disabled = 'true';
            deactivateTrys.style.background = 'red';
            deactivateTrys.style.color = 'blue';
            title.innerText = "X Move"
            trys.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function keturiClick() {
    if (patikra) {
        console.log(4);
        if (randomm % 2 == 0) {
            document.querySelector('.keturi').disabled = 'true';
            deactivateKeturi.style.background = 'blue';
            deactivateKeturi.style.color = 'red';
            title.innerText = "O Move"
            keturi.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.keturi').disabled = 'true';
            deactivateKeturi.style.background = 'red';
            deactivateKeturi.style.color = 'blue';
            title.innerText = "X Move"
            keturi.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function penkiClick() {
    if (patikra) {
        console.log(5);
        if (randomm % 2 == 0) {
            document.querySelector('.penki').disabled = 'true';
            deactivatePenki.style.background = 'blue';
            deactivatePenki.style.color = 'red';
            title.innerText = "O Move"
            penki.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.penki').disabled = 'true';
            deactivatePenki.style.background = 'red';
            deactivatePenki.style.color = 'blue';
            title.innerText = "X Move"
            penki.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function sesiClick() {
    if (patikra) {
        console.log(6);
        if (randomm % 2 == 0) {
            document.querySelector('.sesi').disabled = 'true';
            deactivateSesi.style.background = 'blue';
            deactivateSesi.style.color = 'red';
            title.innerText = "O Move"
            sesi.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.sesi').disabled = 'true';
            deactivateSesi.style.background = 'red';
            deactivateSesi.style.color = 'blue';
            title.innerText = "X Move"
            sesi.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function septyniClick() {
    if (patikra) {
        console.log(7);
        if (randomm % 2 == 0) {
            document.querySelector('.septyni').disabled = 'true';
            deactivateSeptyni.style.background = 'blue';
            deactivateSeptyni.style.color = 'red';
            title.innerText = "O Move"
            septyni.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.septyni').disabled = 'true';
            deactivateSeptyni.style.background = 'red';
            deactivateSeptyni.style.color = 'blue';
            title.innerText = "X Move"
            septyni.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function astuoniClick() {
    if (patikra) {
        console.log(8);
        if (randomm % 2 == 0) {
            document.querySelector('.astuoni').disabled = 'true';
            deactivateAstuoni.style.background = 'blue';
            deactivateAstuoni.style.color = 'red';
            title.innerText = "O Move"
            astuoni.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.astuoni').disabled = 'true';
            deactivateAstuoni.style.background = 'red';
            deactivateAstuoni.style.color = 'blue';
            title.innerText = "X Move"
            astuoni.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}
function devyniClick() {
    if (patikra) {
        console.log(9);
        if (randomm % 2 == 0) {
            document.querySelector('.devyni').disabled = 'true';
            deactivateDevyni.style.background = 'blue';
            deactivateDevyni.style.color = 'red';
            title.innerText = "O Move"
            devyni.innerText = "X"
            randomm = randomm + 1;
        } else {
            document.querySelector('.devyni').disabled = 'true';
            deactivateDevyni.style.background = 'red';
            deactivateDevyni.style.color = 'blue';
            title.innerText = "X Move"
            devyni.innerText = "O"
            randomm = randomm + 1;
        }
    } else {
        alert("Pirma pasirinkit, kieno ėjimas bus pirmas");
    }
    if (vienas.innerText === "O" && du.innerText === "O" && trys.innerText === "O" ||
        keturi.innerText === "O" && penki.innerText === "O" && sesi.innerText === "O" ||
        septyni.innerText === "O" && astuoni.innerText === "O" && devyni.innerText === "O" ||
        vienas.innerText === "O" && penki.innerText === "O" && devyni.innerText === "O" ||
        septyni.innerText === "O" && penki.innerText === "O" && trys.innerText === "O" ||
        vienas.innerText === "O" && keturi.innerText === "O" && septyni.innerText === "O" ||
        du.innerText === "O" && penki.innerText === "O" && astuoni.innerText === "O" ||
        trys.innerText === "O" && sesi.innerText === "O" && devyni.innerText === "O") {
        title.innerText = "O laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    } else if (vienas.innerText === "X" && du.innerText === "X" && trys.innerText === "X" ||
        keturi.innerText === "X" && penki.innerText === "X" && sesi.innerText === "X" ||
        septyni.innerText === "X" && astuoni.innerText === "X" && devyni.innerText === "X" ||
        vienas.innerText === "X" && penki.innerText === "X" && devyni.innerText === "X" ||
        septyni.innerText === "X" && penki.innerText === "X" && trys.innerText === "X" ||
        vienas.innerText === "X" && keturi.innerText === "X" && septyni.innerText === "X" ||
        du.innerText === "X" && penki.innerText === "X" && astuoni.innerText === "X" ||
        trys.innerText === "X" && sesi.innerText === "X" && devyni.innerText === "X") {
        title.innerText = "X laimėjo";
        document.querySelector('.vienas').disabled = 'true';
        document.querySelector('.du').disabled = 'true';
        document.querySelector('.trys').disabled = 'true';
        document.querySelector('.keturi').disabled = 'true';
        document.querySelector('.penki').disabled = 'true';
        document.querySelector('.sesi').disabled = 'true';
        document.querySelector('.septyni').disabled = 'true';
        document.querySelector('.astuoni').disabled = 'true';
        document.querySelector('.devyni').disabled = 'true';
    }
}

function newGameClick() {
    console.log("bandymas testas");

    newGameSauga = true;
    patikra = false;

    document.querySelector('.vienas').disabled = false;
    deactivateVienas.style.background = 'orange';
    deactivateVienas.style.color = 'orange';
    title.innerText = ""
    vienas.innerText = "_"
    randomm = 0;

    document.querySelector('.du').disabled = false;
    deactivateDu.style.background = 'orange';
    deactivateDu.style.color = 'orange';
    title.innerText = ""
    du.innerText = "_"
    randomm = 0;

    document.querySelector('.trys').disabled = false;
    deactivateTrys.style.background = 'orange';
    deactivateTrys.style.color = 'orange';
    title.innerText = ""
    trys.innerText = "_"
    randomm = 0;

    document.querySelector('.keturi').disabled = false;
    deactivateKeturi.style.background = 'orange';
    deactivateKeturi.style.color = 'orange';
    title.innerText = ""
    keturi.innerText = "_"
    randomm = 0;

    document.querySelector('.penki').disabled = false;
    deactivatePenki.style.background = 'orange';
    deactivatePenki.style.color = 'orange';
    title.innerText = ""
    penki.innerText = "_"
    randomm = 0;

    document.querySelector('.sesi').disabled = false;
    deactivateSesi.style.background = 'orange';
    deactivateSesi.style.color = 'orange';
    title.innerText = ""
    sesi.innerText = "_"
    randomm = 0;

    document.querySelector('.septyni').disabled = false;
    deactivateSeptyni.style.background = 'orange';
    deactivateSeptyni.style.color = 'orange';
    title.innerText = ""
    septyni.innerText = "_"
    randomm = 0;

    document.querySelector('.astuoni').disabled = false;
    deactivateAstuoni.style.background = 'orange';
    deactivateAstuoni.style.color = 'orange';
    title.innerText = ""
    astuoni.innerText = "_"
    randomm = 0;

    document.querySelector('.devyni').disabled = false;
    deactivateDevyni.style.background = 'orange';
    deactivateDevyni.style.color = 'orange';
    title.innerText = ""
    devyni.innerText = "_"
    randomm = 0;


    document.querySelector('.random').disabled = false;
    document.querySelector('.x').disabled = false;
    document.querySelector('.o').disabled = false;

    deactivateRandom.style.background = 'yellowgreen';
    deactivateX.style.background = 'yellowgreen';
    deactivateO.style.background = 'yellowgreen';

    // deactivateRandom.classList.add('random');
    // deactivateRandom.classList.add('random:hover');

    document.querySelector('.new_game').disabled = true;
    deactivateNewGame.style.background = 'grey';
}




random.addEventListener('click', randomClick);
x.addEventListener('click', xClick);
o.addEventListener('click', oClick);

vienas.addEventListener('click', vienasClick);
du.addEventListener('click', duClick);
trys.addEventListener('click', trysClick);

keturi.addEventListener('click', keturiClick);
penki.addEventListener('click', penkiClick);
sesi.addEventListener('click', sesiClick);

septyni.addEventListener('click', septyniClick);
astuoni.addEventListener('click', astuoniClick);
devyni.addEventListener('click', devyniClick);

newGame.addEventListener('click', newGameClick);
