var n = -1
var questoes
var seuspontos = 0
var mostrarResposta = document.getElementsByTagName("span")
var respostaChecked = document.getElementsByName("resposta")

var ajax = new XMLHttpRequest()
ajax.open("GET","https://quiz-trainee.herokuapp.com/questions")
ajax.send()

ajax.addEventListener("readystatechange", function() {
    if(ajax.readyState === 4 && ajax.status === 200){
        questoes = (JSON.parse(this.response))
        console.log(ajax)
        console.log(ajax.response)

        var resposta = ajax.response
        
    }
})

function mostrarQuestao() {
    if(n == -1){
        document.getElementById('listaRespostas').style.display = "inline"
        document.getElementById('resultado').style.display = "none"
        document.getElementById('confirmar').innerHTML = "PRÓXIMA"

    }else{
        for (var i = 0; i< 4; i++){
            if(document.getElementsByName("resposta")[i].checked)
                break
            else if(i==3)
            return;
        }
    }
    n++

    if(n >= questoes.length){
        finalizarQuiz()
        return
    }
    document.getElementById('titulo').innerHTML = questoes[n].title
    for (var s = 0 ; s < questoes[n].options.length; s++){
        if(respostaChecked[s].checked){
            respostaChecked[s].value = questoes[n].options[s].value
            pontos = ponto + parseInt(respostaChecked[s].value)
            respostaChecked[s].checked = false  
        }
        mostrarResposta[i].innerHTML = questoes[n].options[i].answer
    }


}


function finalizarQuiz() {
    var pontuacaoFinal = Math.round((seuspontos/9)*100)
    
    document.getElementById('titulo').innerHTML = 'QUIZ DOS VALORES DA GTI' ;
    document.getElementById("listaRespostas").style.display = "none" ;
    document.getElementById("resultado").style.display = 'block' ;
    document.getElementById("resultado").innerHTML = 'Sua pontuação: ' + pontuacaoFinal + '%' ;
    document.getElementById("confirmar").innerHTML = "Refazer Quiz";
    n = -1
    seuspontos = 0
}
