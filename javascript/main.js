import Api from "./api.js";
import { form } from "./formulario.js";
import { buscador } from "./buscador.js";
import { mostraTres } from "./aniversariantesHoje.js";


buscador();
window.addEventListener('DOMContentLoaded', mostraTres());