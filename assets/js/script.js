( () => {const criarTarefa = (eventoClick) => {

    eventoClick.preventDefault()

    const lista = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const valor = input.value

    const tarefa = document.createElement("li")
    tarefa.classList.add("task")
    const conteudoTarefa = `<p class="content"> ${valor} </p>`

    tarefa.innerHTML = conteudoTarefa

    tarefa.appendChild(BotaoConlui())
    lista.appendChild(tarefa) 
    input.value = ""
}

const novaTarefa = document.querySelector("[data-form-button]")
novaTarefa.addEventListener('click', criarTarefa)

const BotaoConlui = () => {

    const botaoConclui = document.createElement("button")
    botaoConclui.classList.add("check-button")
    botaoConclui.innerText = "Concluído"
    botaoConclui.addEventListener ("click", concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (eventoClick) => {

    const botaoConclui = eventoClick.target
    const tarefaConcluida = botaoConclui.parentElement
    tarefaConcluida.classList.toggle("done")
}

})()