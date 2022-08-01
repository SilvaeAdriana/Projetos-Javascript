const calcular = document.getElementById('calcular');//como não tem valor, pega apenas o id, sem o  .value, por exemplo

function imc () {
    //usar const
    // pegando os resultados dos inputs em htlm segundo seus 'ids'
    const nome = document.getElementById('nome').value;//value: pega o valor da célula, se não colocar, o get considera o elemento html, se não colocar value, considera o objeto
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1); //arredondamento para cima, em () quantidade de casas decimais

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;  //resultado.textContent: O espaço, inicialmente vazio,'resultado', será preenchido com....pego um espaço
        //se usar o innerHtml também funciona...com value não funciona(value pega valores de input)
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
// o metodo do botão calcular//elemento calcular quando clicar, será chamada a função imc
