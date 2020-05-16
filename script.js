var questoes
var ajax = new XMLHttpRequest()
ajax.open("GET","https://quiz-trainee.herokuapp.com/questions")
ajax.send()

ajax.addEventListener("readystatechange", function() {
    if(ajax.readyState === 4 && ajax.status === 200){
        questoes = (JSON.parse(this.response))
        console.log(ajax)
        console.log(ajax.response)

        var resposta = ajax.response
        var lista = document.
    }
})

function mostrarQuestao() {

}






//function finalizarQuiz() {}