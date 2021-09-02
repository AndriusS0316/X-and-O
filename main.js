
let rez = 0;
let randomm;
let patikra = false;



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
}


function xClick() {
    title.innerText = "X Move";
    randomm = 2;
    document.querySelector('.random').disabled = 'true';
    document.querySelector('.x').disabled = 'true';
    document.querySelector('.o').disabled = 'true';

    deactivateRandom.style.background = 'grey';
    deactivateX.style.background = 'grey';
    deactivateO.style.background = 'grey';

    patikra = true;
}


function oClick() {
    title.innerText = "O Move";
    randomm = 3;
    document.querySelector('.random').disabled = 'true';
    document.querySelector('.x').disabled = 'true';
    document.querySelector('.o').disabled = 'true';

    deactivateRandom.style.background = 'grey';
    deactivateX.style.background = 'grey';
    deactivateO.style.background = 'grey';

    patikra = true;
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
}
function keturiClick() {
    console.log(4);
}
function penkiClick() {
    console.log(5);
}
function sesiClick() {
    console.log(6);
}
function septyniClick() {
    console.log(7);
}
function astuoniClick() {
    console.log(8);
}
function devyniClick() {
    console.log(9);
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
