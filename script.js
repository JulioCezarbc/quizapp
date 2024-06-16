import { trocarTema, verificarTema } from "./helpers/tema-helper.js";


const body = document.querySelector("body");
const botaoTema = document.querySelector(".tema button");

botaoTema.addEventListener("click", () =>{
    trocarTema(body,botaoTema);

});

verificarTema(body, botaoTema);