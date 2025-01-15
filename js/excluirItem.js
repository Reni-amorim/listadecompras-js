import { verificarListacomprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("Lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Deseja realmente excluir este item?")
    
    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListacomprados(listaComprados);
    }
}

export { excluirItem };