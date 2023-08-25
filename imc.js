const calcular = document.getElementById("calcular"); /* Const é o tipo de variavel, após é digitado o nome que se quer dar a esta variável  */  

calcular.addEventListener("click",imc); /* Médoto para pegar o evento, o evento .addEventListener pode ser usado tanto em botão, quanto em imagens ou outros dentro do site */

function imc(){ /* Entre parenteses é adicionado os parâmetros, ou não, não é obrigatório (Parâmetros é algo que precisa ser passado)*/
   /* CRIANDO VARIAVEIS */ 
   const nome = document.getElementById("nome").value; /* get quer dizer pegar, u seja, pegar um elemento no documento (html), ById quer dizer que quero pegar o valor que está no ID */
   const altura = document.getElementById("altura").value;
   const peso = document.getElementById("peso").value;
   const resultado = document.getElementById("resultado"); /* Neste caso não se passa valor, pois ele vai receber os valores e não passar */
/* FAZENDO COMPARAÇÃO LÓGICA */

if(nome !=="" && altura !=="" && peso !==""){ /* Aqui diz que se uma das funções estiver vazia é falso */
const valorIMC = (peso / (altura * altura)).toFixed(1);  /* .toFixed */ 

let classificacao = ""; /* Aqui o valor é vazio, pois o uduário que irá digitar o valor */

if(valorIMC < 18.5){  //se valor for menor que 18
    classificacao = "abaixo do peso."
    }else if(valorIMC < 25){ //se valor for menor que 25
    classificacao = "de Parabéns! Seu peso está ideal."
    }else if(valorIMC<30){ // se valor for menor que 30
    classificacao = "levemente acima do peso."
    }else if(valorIMC<35){ // se valor for menor que 35
        classificacao = "Obesidade tipo I."
    }else if(valorIMC<40){ // se valor for menor que 40
        classificacao = "Obesidade tipo II."
    }else{
        classificacao = "Obesidade tipo III." //Se nenhuma das anteriores
    }

    /* ENVIANDO O RESULTADO PARA A <DIV> COM ID="Resultado" */
    resultado.textContent = `${nome} Seu IMC é ${valorIMC} e você está ${classificacao}` // Aqui diz que pegar o valor nome recebido pelo o usuário + valor IMC calculado pelo o sistema e informa a classificação 
}else{
        resultado.textContent = "Preecha todas as informações."
    }



} 




