//TERCEIRO CENÁRIO
var mensagem;
var mensagemBalao;
//Função onload para carregar figura e mensagens
function sherlock() {
    //Carregando Sherlock e seu texto
    const caixa = document.createElement('div');
    const balao = document.createElement('div');
    mensagemBalao = document.createElement("p");
    mensagem = document.createTextNode("Você também acredita nessa história de fantasma? Diga-me, John.")
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
    var imagem5 = new Image();
    var imagem6 = new Image();
    var imagem7 = new Image();

    //Atribuindo a imagem na variável
    imagem1.src = "img/cartao.png";
    imagem2.src = "img/sanguee.png";
    imagem3.src = "img/sapato.png";
    imagem4.src = "img/remedio.png"
    imagem5.src = "img/telefone.png"
    imagem6.src = "img/bolsa.webp"
    imagem7.src = "img/celular.png"

    //Criando um id para estilizar
    imagem1.id = "cartao";
    imagem2.id = "sanguee"
    imagem3.id = "sapato";
    imagem4.id = "remedio";
    imagem5.id = "telefone";
    imagem6.id = "bolsa";
    imagem7.id = "celular";


    //Criando um array e setando os objetos criados nas posições do array
    var objetos = new Array();
    objetos[0] = imagem1;
    objetos[1] = imagem2;
    objetos[2] = imagem3;
    objetos[3] = imagem4;
    objetos[4] = imagem5;
    objetos[5] = imagem6;
    objetos[6] = imagem7;

    //Variável para identificar o corpo do HTML
    const corpo = document.body;
    //Inserindo objetos do array no HTML
    corpo.appendChild(objetos[0]);
    corpo.appendChild(objetos[1]);
    corpo.appendChild(objetos[2]);
    corpo.appendChild(objetos[3]);
    corpo.appendChild(objetos[4]);
    corpo.appendChild(objetos[5]);
    corpo.appendChild(objetos[6]);


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
        mensagem = document.createTextNode("Vamos checar os dados desse cartão para obter suspeitos.");
        //Inserindo elementos na tela através do appendChild
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        //Se o objeto for encontrado, atribuir +1 para objetos encontrados
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        //Condição se encontrar todos os objetos, exibir uma div e mensagem
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
            boxFinal.appendChild(boxImgs);
            corpoTodo.appendChild(boxFinal);
            //Função para delay da div criada anteriormente sumir após exibir mensagem
            setTimeout(function () {
                $('#boxFinal').fadeOut('fast');
            }, 7000);
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
        mensagem = document.createTextNode("Podemos coletar o DNA do suspeito. Bom trabalho!");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

        mensagem = document.createTextNode("Agora sabemos que o suspeito é um homem.");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

        mensagem = document.createTextNode("Anarcóticos... Interessante!");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

    objetos[4].addEventListener("click", () => {
        objetos[4].remove();
        seta.remove();
        mensagem.remove();

        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        mensagem = document.createTextNode("Podemos olhar o registro de ligações.");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

    objetos[5].addEventListener("click", () => {
        objetos[5].remove();
        seta.remove();
        mensagem.remove();

        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        mensagem = document.createTextNode("Abra a bolsa e procure por mais pistas!");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

    objetos[6].addEventListener("click", () => {
        objetos[6].remove();
        seta.remove();
        mensagem.remove();

        setTimeout(function () {
            $('.balao').fadeIn('fast');
        }, 1000);

        setTimeout(function () {
            $('.balao').fadeOut('fast');
        }, 3000);

        mensagem = document.createTextNode("Um celular... Consigo descobrir a senha.");
        mensagemBalao.appendChild(mensagem);
        balao.appendChild(mensagemBalao)
        caixa.appendChild(balao);
        corpo.appendChild(caixa);
        pontuacao += 1;
        document.getElementById('objetosEncontrados').innerHTML = pontuacao;
        if (pontuacao == 7) {
            const corpoTodo = document.body;
            const boxFinal = document.createElement('div');
            const boxImgs = document.createElement('div');
            const textoFinal = document.createElement('p');
            const final = document.createTextNode("Parabéns, você encontrou todos os objetos suspeitos na cena");
            const imgCartao = document.createElement('img');
            const imgSanguee = document.createElement('img');
            const imgSapato = document.createElement('img');
            const imgRemedio = document.createElement('img');
            const imgTelefone = document.createElement('img');
            const imgBolsa = document.createElement('img');
            const imgCelular = document.createElement('img');

            imgCartao.src = "img/cartao.png";
            imgSanguee.src = "img/sangue.png";
            imgSapato.src = "img/sapato.png";
            imgRemedio.src = "img/remedio.png";
            imgTelefone.src = "img/telefone.png";
            imgBolsa.src = "img/bolsa.webp";
            imgCelular.src = "img/celular.png";

            imgCartao.id = "img-cartao";
            imgSanguee.id = "img-sanguee";
            imgSapato.id = "img-sapato";
            imgRemedio.id = "img-remedio";
            imgTelefone.id = "img-telefone";
            imgBolsa.id = "img-bolsa";
            imgCelular.id = "img-celular";

            boxImgs.id = "boxImgs";
            boxFinal.id = "boxFinal";
            textoFinal.id = "txtFinal"

            textoFinal.appendChild(final);
            boxFinal.appendChild(textoFinal);
            boxImgs.appendChild(imgCartao);
            boxImgs.appendChild(imgSanguee);
            boxImgs.appendChild(imgSapato);
            boxImgs.appendChild(imgRemedio);
            boxImgs.appendChild(imgTelefone);
            boxImgs.appendChild(imgBolsa);
            boxImgs.appendChild(imgCelular);
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

        mensagem = document.createTextNode("Viemos aqui para provar que se trata de um ser como nós por trás disso tudo!");
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
    const dica = document.createTextNode("Procure por objetos com cores distintas do cenário.");
    const imgDica = document.createElement('img');
    imgDica.src = "img/sherlock2.webp";

    imgDica.id = "shDica";
    boxMeio.id = "boxMeio"
    textoDica.classList.add("mensagem-balao");
    //Removendo botão após clicado
    var botao = document.querySelector("#botaoDica");
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