const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    
    const containerNomeDoItem = document.createElement("div");
        
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
    
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
        } else {
            checkboxCustomizado.classList.remove("checked");
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)
    
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    
    const imageRemover = document.createElement("img");
    imageRemover.src = "img/delete.svg";
    imageRemover.alt = "Remover";

    botaoRemover.appendChild(imageRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");
    

    const imageEditar = document.createElement("img");
    imageEditar.src = "img/edit.svg";
    imageEditar.alt = "Editar";

    botaoEditar.appendChild(imageEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista)
}