const calcular = document.getElementById('calcular');//como não tem valor, pega apenas o id, sem o  .value, por exemplo

function idade () {
    //usar const
    // pegando os resultados dos inputs em htlm segundo seus 'ids'
    const nome = document.getElementById('nome').value;//value: pega o valor da célula, se não colocar, o get considera o elemento html, se não colocar value, considera o objeto
    const inicial = new Date(document.getElementById('inicial').value);
    const final = new Date(document.getElementById('final').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && inicial !== '' && final !== '') {


       const parcial = Math.abs( final.getTime() - inicial.getTime());
       const idade = Math.ceil(parcial / (1000 * 3600 * 24)); 

       const anos = (idade/365).toFixed(0);


        resultado.textContent = `${nome} sua idade é  de ${idade} dias.Aproximadamente ${anos} anos.`;  //resultado.textContent: O espaço, inicialmente vazio,'resultado', será preenchido com....pego um espaço
        //se usar o innerHtml também funciona...com value não funciona(value pega valores de input)
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', idade);
// o metodo do botão calcular//elemento calcular quando clicar, será chamada a função imc