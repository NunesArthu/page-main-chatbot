
let ss = document.querySelector("#ss");
let se = document.querySelector("#se");
let bd = document.querySelector("#bd");
let bu = document.querySelector("#bu");
let lua = document.querySelector(".lua");
let modo = 'noturno';

function Sesq() {
bu.style.color = "white";
bd.style.color = "rgb(71, 71, 71)";
const img = document.querySelector('.img');
img.style.backgroundColor = "green";
const div = document.querySelector('.vdd-img');
div.classList.remove('img-2');
div.classList.add('img-3');
}

function Sdir() {
bd.style.color = "white";
bu.style.color = "rgb(71, 71, 71)";
const img = document.querySelector('.img');
img.style.backgroundColor = "blueviolet";
const div = document.querySelector('.vdd-img');
div.classList.remove('img-3');
div.classList.add('img-2');
}

function Lua() {
    if (modo == 'noturno') {
        modo = 'claro';
    lua.style.color = "black";
    const ini = document.querySelector('.inicio');
    ini.style.backgroundColor = "white";
    const t = document.querySelector('.t');
    t.style.backgroundColor = "gray";
    const chatL = document.querySelectorAll('.l-chatf');
    let chat = [...chatL]
    chat.forEach((item) => {
    item.classList.remove('l-chatf');
    item.classList.add('lchatd');       
     });    
    }else{
       modo = 'noturno';
    lua.style.color = "white";
    const ini = document.querySelector('.inicio');
    ini.style.backgroundColor = "black";
    const t = document.querySelector('.t');
    t.style.backgroundColor = "rgb(23, 23, 23, 1)";
    const chatL = document.querySelectorAll('.lchatd');
    let chat = [...chatL]
    chat.forEach((item) => {
    item.classList.remove('lchatd'); 
    item.classList.add('l-chatf');        
     });
}
}
