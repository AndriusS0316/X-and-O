
let rez = 0;
let randomm;



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



function randomClick() {
    rez = (Math.floor(Math.random() * 10) + 1);

    if(rez % 2 == 0) {
        title.innerText = "X Move";
        console.log("x");
        randomm = 2;
    } else {
        title.innerText = "O Move";
        console.log("o");
        randomm = 3;
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
}


function vienasClick() {
    console.log(1);
}
function duClick() {
    console.log(2);
}
function trysClick() {
    console.log(3);
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
