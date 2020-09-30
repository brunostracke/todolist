let botaoAdd = document.querySelector("#adicionar-tarefa");
let inputTarefa = document.querySelector("#tarefa-digitada");
let divTarefas = document.querySelector("#tarefas");


console.log("Projeto To-Do");

function addAcaoDeFinalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa');

    for (let i = 0; i < listaDeBotoes.length; i++){
        let botao = listaDeBotoes[i];
        botao.addEventListener('click', function(){
            if(window.confirm("Tem certeza que deseja excluir?")){
                botao.parentElement.parentElement.remove();
            }
        })
    }
}

addAcaoDeFinalizarTarefa();

function criarTarefa(){

    if(inputTarefa.value.trim() == '')
    {
        alert("Vc precisa inserir uma tarefa mano!");
    } 
    else 
    {
        let tarefa = `<div class="col-md-4">
                        <div class="card-tarefa">
                            <div class="texto-tarefa">
                                ${inputTarefa.value}
                            </div>
                            <div class="botao-tarefa">
                                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
                            </div>
                        </div>
                    </div>`
        divTarefas.innerHTML += tarefa
        //alert("Tarefa criada: " + inputTarefa.value)
        inputTarefa.value = ''
        addAcaoDeFinalizarTarefa();
    }
};

botaoAdd.addEventListener("click", criarTarefa);

inputTarefa.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        criarTarefa();
    }
});

