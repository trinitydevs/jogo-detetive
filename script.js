//Criando funções para mostrar informações sobre a cidade escolhida

function cidadeUm(){
    //Criando elementos
    const pai = document.body;
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const texto = document.createElement('p');
    const infoTxt = document.createTextNode('Mulheres têm desaparecido na Flórida... Ninguém, nem mesmo as câmeras são capazes de solucionar esse caso! Sherlock precisa de uma mãozinha para essa investigação, ajude-o a achar pistas pela cidade.');
    const titulo = document.createElement('h5');
    const tituloCidade = document.createTextNode('Saint Petersburg');
    const imagemCidade = document.createElement('img');
    const mulher = document.createElement('img');
    mulher.src = "img/faca.png";
    imagemCidade.src = "img/fechar.png";

    //Dando classes e id para estilizar elementos
    div.classList.add("caixa");
    div2.id = "div-fechar";
    div3.id = 'div-sh';
    imagemCidade.id = "fechar";
    texto.classList.add('txt-infos')
    titulo.classList.add('titulo-cidade');
    mulher.id = "icon-mulher";

    //Adicionando elementos ao corpo da página
    titulo.appendChild(tituloCidade);
    texto.appendChild(infoTxt);
    div3.appendChild(mulher);
    div2.appendChild(imagemCidade);
    div.appendChild(div2);
    div.appendChild(titulo)
    div.appendChild(texto);
    div.appendChild(div3);
    pai.appendChild(div);

     //Fechar caixa da cidade ao clicar no ícone
     const botao = document.querySelector("#fechar");
     botao.addEventListener("click", (e) => {
         div.remove(); 
     });
}

function cidadeDois(){
    //Criando elementos
    const pai = document.body;
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const texto = document.createElement('p');
    const infoTxt = document.createTextNode('O inimigo de Sherlock está de volta em Detroit, e pior, te desafia para resolver um enigma do qual ele mesmo criou. Será que vocês serão capazes de desvendar o mistério?');
    const titulo = document.createElement('h5');
    const tituloCidade = document.createTextNode('Detroit');
    const imagemCidade = document.createElement('img');
    const faca = document.createElement('img');
    faca.src = "img/misterio.png";
    imagemCidade.src = "img/fechar.png";

    //Dando classes e id para estilizar elementos
    div.classList.add("caixa");
    div2.id = "div-fechar";
    div3.id = 'div-sh';
    imagemCidade.id = "fechar";
    texto.classList.add('txt-infos');
    titulo.classList.add('titulo-cidade');
    faca.id = "icon-faca";

    //Adicionando elementos ao corpo da página
    titulo.appendChild(tituloCidade);
    texto.appendChild(infoTxt);
    div3.appendChild(faca);
    div2.appendChild(imagemCidade);
    div.appendChild(div2);
    div.appendChild(titulo)
    div.appendChild(texto);
    div.appendChild(div3);
    pai.appendChild(div);

     //Fechar caixa da cidade ao clicar no ícone
     const botao = document.querySelector("#fechar");
     botao.addEventListener("click", (e) => {
         div.remove(); 
     });
}

function cidadeTres(){
    //Criando elementos
    const pai = document.body;
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const texto = document.createElement('p');
    const infoTxt = document.createTextNode('Portland é conhecida como cidade fantasma. Há alguns meses, os habitantes se queixam de haver um verdadeiro fantasma. E Sherlock precisará de sua ajuda para resolver o caso, afinal, é uma metrópole.');
    const titulo = document.createElement('h5');
    const tituloCidade = document.createTextNode('Portland');
    const imagemCidade = document.createElement('img');
    const misterio = document.createElement('img');
    misterio.src = "img/fantasma.png";
    imagemCidade.src = "img/fechar.png";

    //Dando classes e id para estilizar elementos
    div.classList.add("caixa");
    div2.id = "div-fechar";
    div3.id = 'div-sh';
    imagemCidade.id = "fechar";
    texto.classList.add('txt-infos');
    titulo.classList.add('titulo-cidade');
    misterio.id = "icon-misterio";

    //Adicionando elementos ao corpo da página
    titulo.appendChild(tituloCidade);
    texto.appendChild(infoTxt);
    div3.appendChild(misterio);
    div2.appendChild(imagemCidade);
    div.appendChild(div2);
    div.appendChild(titulo)
    div.appendChild(texto);
    div.appendChild(div3);
    pai.appendChild(div);

     //Fechar caixa da cidade ao clicar no ícone
     const botao = document.querySelector("#fechar");
     botao.addEventListener("click", (e) => {
         div.remove(); 
     });
}