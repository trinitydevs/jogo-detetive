//PRIMEIRO CENÁRIO
var mensagem;
var mensagemBalao;
//Função onload para carregar figura e mensagens
function sherlock() {
    //Carregando Sherlock e seu texto
    const caixa = document.createElement('div');
    const balao = document.createElement('div');
    mensagemBalao = document.createElement("p");
    mensagem = document.createTextNode("Esse lugar parece inabitável... Mas não se engane, Watson! Grande parte dos crimes foram cometidos aqui!")
    const figurante = document.createElement("img");
    const seta = document.createElement("img");

    //Atribuindo o arquivo img da pasta para o elemento criado
    seta.src = "img/seta.png"
    figurante.src = "img/figurante.png"

    //Criando id e classes para estilizar e formatar
    seta.classList.add("passar-mensagem");
    figurante.id = "figurante";
    balao.classList.add("balao");
    mensagem.id = "msg";
    mensagemBalao.classList.add("mensagem-balao");
    caixa.classList.add("caixa-itens");

    //Criando objetos do tipo imagem
    var imagem1 = new Image();
    var imagem2 = new Image();
    var imagem3 = new Image();
    var imagem4 = new Image();

    //Atribuindo a imagem na variável
    imagem1.src = "img/sutia.png";
    imagem2.src = "img/sangue.png";
    imagem3.src = "img/bebida.webp";
    imagem4.src = "img/chaves.png"

    //Criando um id para estilizar
    imagem1.id = "sutia";
    imagem2.id = "sangue"
    imagem3.id = "bebida";
    imagem4.id = "chaves";

    //Criando um array e setando os objetos criados nas posições do array
    var objetos = new Array();
    objetos[0] = imagem1;
    objetos[1] = imagem2;
    objetos[2] = imagem3;
    objetos[3] = imagem4;

    //Variável para identificar o corpo do HTML
    const corpo = document.body;
    //Inserindo objetos do array no HTML
    corpo.appendChild(objetos[0]);
    corpo.appendChild(objetos[1]);
    corpo.appendChild(objetos[2]);
    corpo.appendChild(objetos[3]);

    var pontuacao = 0;
    document.getElementById('objetosEncontrados').innerHTML += pontuacao;

    //Adicionando a objetos encontrados ao clicar
    objetos[0].addEventListener("click", () => {
        objetos[0].remove();
        seta.remove();

        mensagem.remove();
        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        //Criando um texto tipo Node para atribuir a uma tag 'p'
        mensagem = document.createTextNode("Isso me parece que foi utilizado pela vítima...");
        //Inserindo elementos na tela através do appendChild
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        //Se o objeto for encontrado, atribuir +1 para objetos encontrados
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        //Condição se encontrar todos os objetos, exibir uma div e mensagem
        if (pontuacao == 4) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgSutia = document.createElement('img');
            const imgSangue = document.createElement('img');
            const imgBebida = document.createElement('img');
            const imgChaves = document.createElement('img');

            imgSutia.src = "img/sutia.png";
            imgSangue.src = "img/sangue.png";
            imgBebida.src = "img/bebida.webp";
            imgChaves.src = "img/chaves.png";

            imgSutia.id = "img-sutia";
            imgSangue.id = "img-sangue";
            imgBebida.id = "img-bebida";
            imgChaves.id = "img-chaves";
            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgSutia);
            boxImgs.appendChild(imgSangue);
            boxImgs.appendChild(imgBebida);
            boxImgs.appendChild(imgChaves);
            boxFinal.appendChild(boxImgs);
            corpoTodo.appendChild(boxFinal);

            //Função para delay da div criada anteriormente sumir após exibir mensagem
            setTimeout(function () {
                $('#boxFinal').fadeOut('fast');
            }, 6000);
            //Redirecionamento após ganhar o jogo para a Home
            setTimeout(function () {
                window.location.href = "cidades.html";
            }, 8000);
        }
    });
    //Se o objeto for clicado, função para removê-lo
    objetos[1].addEventListener("click", () => {
        objetos[1].remove();
        seta.remove();

        mensagem.remove();
        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);
        //Substituição da mensagem anterior pela mensagem equivalente ao objeto encontrado
        mensagem = document.createTextNode("Podemos coletar o DNA do assassino. Bom trabalho!");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 4) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgSutia = document.createElement('img');
            const imgSangue = document.createElement('img');
            const imgBebida = document.createElement('img');
            const imgChaves = document.createElement('img');

            imgSutia.src = "img/sutia.png";
            imgSangue.src = "img/sangue.png";
            imgBebida.src = "img/bebida.webp";
            imgChaves.src = "img/chaves.png";

            imgSutia.id = "img-sutia";
            imgSangue.id = "img-sangue";
            imgBebida.id = "img-bebida";
            imgChaves.id = "img-chaves";
            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgSutia);
            boxImgs.appendChild(imgSangue);
            boxImgs.appendChild(imgBebida);
            boxImgs.appendChild(imgChaves);
            boxFinal.appendChild(boxImgs);
            corpoTodo.appendChild(boxFinal);

            setTimeout(function () {
                $('#boxFinal').fadeOut('fast');
            }, 6000);

            setTimeout(function () {
                window.location.href = "cidades.html";
            }, 8000);
        }
    });

    objetos[2].addEventListener("click", () => {
        objetos[2].remove();
        seta.remove();
        mensagem.remove();

        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        mensagem = document.createTextNode("A bebida está pela metade... Podemos coletar o DNA.");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 4) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgSutia = document.createElement('img');
            const imgSangue = document.createElement('img');
            const imgBebida = document.createElement('img');
            const imgChaves = document.createElement('img');

            imgSutia.src = "img/sutia.png";
            imgSangue.src = "img/sangue.png";
            imgBebida.src = "img/bebida.webp";
            imgChaves.src = "img/chaves.png";

            imgSutia.id = "img-sutia";
            imgSangue.id = "img-sangue";
            imgBebida.id = "img-bebida";
            imgChaves.id = "img-chaves";
            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgSutia);
            boxImgs.appendChild(imgSangue);
            boxImgs.appendChild(imgBebida);
            boxImgs.appendChild(imgChaves);
            boxFinal.appendChild(boxImgs);
            corpoTodo.appendChild(boxFinal);

            setTimeout(function () {
                $('#boxFinal').fadeOut('fast');
            }, 6000);

            setTimeout(function () {
                window.location.href = "cidades.html";
            }, 8000);
        }
    });

    objetos[3].addEventListener("click", () => {
        objetos[3].remove();
        seta.remove();
        mensagem.remove();

        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        mensagem = document.createTextNode("Um molho de chaves. O que você acha, Watson?");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 4) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgSutia = document.createElement('img');
            const imgSangue = document.createElement('img');
            const imgBebida = document.createElement('img');
            const imgChaves = document.createElement('img');

            imgSutia.src = "img/sutia.png";
            imgSangue.src = "img/sangue.png";
            imgBebida.src = "img/bebida.webp";
            imgChaves.src = "img/chaves.png";

            imgSutia.id = "img-sutia";
            imgSangue.id = "img-sangue";
            imgBebida.id = "img-bebida";
            imgChaves.id = "img-chaves";
            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgSutia);
            boxImgs.appendChild(imgSangue);
            boxImgs.appendChild(imgBebida);
            boxImgs.appendChild(imgChaves);
            boxFinal.appendChild(boxImgs);
            corpoTodo.appendChild(boxFinal);

            setTimeout(function () {
                $('#boxFinal').fadeOut('fast');
            }, 6000);

            setTimeout(function () {
                window.location.href = "cidades.html";
            }, 8000);
        }
    });
    //Setando o figurante do tipo img no HTML e alterando mensagem após clicar na seta
    caixa.appendChild(figurante);
    mensagemBalao.appendChild(mensagem);
    mensagemBalao.appendChild(seta);
    balao.appendChild(mensagemBalao)
    caixa.appendChild(balao);
    corpo.appendChild(caixa);
    //Selecionando o balão já exibido para alterar o textNode (substituir) se clicado
    const selecMensagem = document.querySelector(".balao");
    selecMensagem.addEventListener("click", () => {
        console.log("a");
        mensagem.remove();

        mensagem = document.createTextNode("Precisamos achar os objetos espalhados pelo cômodo, eles vão nos dar pistas para achar o assassino!");
        mensagemBalao.appendChild(mensagem)
        //Removendo seta após última mensagem
        seta.remove();
        balao.appendChild(mensagemBalao);
        //Setando tempo para a div ser removida com delay
        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 4000);

    });
}
//Função para ao pedir dica clicando no botão, ser criada uma div no centro da tela.
function pedirDica() {
    const pai = document.body;
    const boxMeio = document.createElement('div');
    const textoDica = document.createElement('p');
    const dica = document.createTextNode("Objetos ao redor da escada podem ser encontrados com facilidade, visto que sãos primeiros a caírem em uma tentativa de fuga da vítima.");
    const imgDica = document.createElement('img');
    imgDica.src = "img/sherlock2.webp";

    imgDica.id = "shDica";
    boxMeio.id = "boxMeio"
    textoDica.classList.add("mensagem-balao");
    //Removendo botão após clicado
    var botao = document.querySelector("#btnDica");
    botao.remove();

    textoDica.appendChild(dica);
    boxMeio.appendChild(imgDica);
    boxMeio.appendChild(textoDica)
    pai.appendChild(boxMeio);
    //Setando tempo para a div desaparecer após ser iniciada
    setTimeout(function () {
        $('#boxMeio').fadeOut('fast');
    }, 5000);
}