//SEGUNDO CENÁRIO
//3 Charadas para resolver
//Criando elementos e alocando em variáveis
function quiz() {
    const pai = document.body;
    const divMaioral = document.createElement('div');
    const div = document.createElement('div');
    const div1 = document.createElement('div')
    const div3 = document.createElement('div')
    const div2 = document.createElement('div')
    const div4 = document.createElement('div')
    const texto = document.createElement('p');
    const texto1 = document.createElement('p');
    const texto2 = document.createElement('p');
    const texto3 = document.createElement('p');
    const texto4 = document.createElement('p');
    const nivel = document.createElement('p');
    const textoEscrito = document.createTextNode("Imagine que você está em uma sala escura ao lado de Sherlock. Nela há um fósforo, uma lâmpada de querosene, uma vela e uma lareira. O que você acenderia primeiro?");
    const opcao1 = document.createTextNode("Fósforo");
    const opcao2 = document.createTextNode("Lâmpada de querosene");
    const opcao3 = document.createTextNode("Vela");
    const opcao4 = document.createTextNode("Lareira");
    const textoNivel = document.createTextNode("Nível fácil")
    const imagem1 = document.createElement('img');
    const imagem2 = document.createElement('img');
    const imagem3 = document.createElement('img');
    const imagem4 = document.createElement('img');

    //Atribuindo imagens às variáveis criadas
    imagem1.src = "img/fosforo.png";
    imagem2.src = "img/lampada-querosene.png";
    imagem3.src = "img/vela.png";
    imagem4.src = "img/lareira.png";

    //Atribuindo id e classes para estilizar
    divMaioral.classList.add("divMaioral");
    div.classList.add("divCharada");
    texto.classList.add("textoCharada");
    texto1.classList.add('opcoes');
    texto2.classList.add('opcoes');
    texto3.classList.add('opcoes');
    texto4.classList.add('opcoes');
    nivel.classList.add('textoNivel');
    imagem1.id = "fosforo";
    imagem2.id = "lampada";
    imagem3.id = "vela";
    imagem4.id = "lareira";
    div1.classList.add("divOpcoes");
    div.id = "div1"
    div2.classList.add("divOpcoes");
    div3.classList.add("divOpcoes");
    div4.classList.add("divOpcoes");

    //Setando os elementos no HTML através do appendChild
    texto.appendChild(textoEscrito);
    nivel.appendChild(textoNivel);
    div.appendChild(nivel);
    div.appendChild(texto);
    div1.appendChild(imagem1);
    texto1.appendChild(opcao1);
    div1.appendChild(texto1);
    div2.appendChild(imagem2);
    texto2.appendChild(opcao2);
    div2.appendChild(texto2);
    div3.appendChild(imagem3);
    texto3.appendChild(opcao3);
    div3.appendChild(texto3);
    div4.appendChild(imagem4);
    texto4.appendChild(opcao4);
    div4.appendChild(texto4);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    divMaioral.appendChild(div);
    pai.appendChild(divMaioral);

    //Função para evento de click, opção com appendChild
    div1.addEventListener("click", () => {
        const divisoria = document.createElement('div');
        const acerto = document.createElement('p');
        //Criando texto para exibir mensagem 
        const textoAcerto = document.createTextNode('Parábens, você resolveu a primeira charada!')
        const sherlockRosto = document.createElement('img');
        //Setando arquivo na variável tipo img
        sherlockRosto.src = "img/sherlock.jpg";

        sherlockRosto.classList.add('sherlockRosto');
        divisoria.classList.add('divSherlock');

        acerto.appendChild(textoAcerto);
        divisoria.appendChild(sherlockRosto);
        divisoria.appendChild(acerto);
        pai.appendChild(divisoria);

        setTimeout(function () {
            $('.divSherlock').fadeOut('fast');
        }, 1500);

        //PRÓXIMO ENIGMA
        //Removendo opções anteriores
        div1.remove();
        div2.remove();
        div3.remove();
        div4.remove();
        texto.remove();
        textoNivel.remove();
        div.remove();

        //Alterando valores para o enigma começar e criando novos elementos
        const divMaiorall = document.createElement('div');
        const divv = document.createElement('div');
        const input = document.createElement('input');
        const form = document.createElement('form');
        const botao = document.createElement('input');
        const nivell = document.createElement('p');
        const textoo = document.createElement('p');
        const enviar = document.createTextNode("Enviar");
        const textoEscritoo = document.createTextNode('O detetive Sherlock encontrou um bilhete que faz parte de uma pista de um mistério que precisa ser solucionado. “Se você me tem, quer me compartilhar; se você não me compartilha, você me manteve. O que eu sou?');
        const textoNivell = document.createTextNode('Nível médio');

        divMaiorall.classList.add("divMaioral");
        divv.classList.add('divCharada');
        textoo.classList.add('textoCharada')
        nivell.classList.add('textoNivel');
        botao.id = "btnEnviar";
        input.id = "inputCharada";
        input.required;
        form.style.display = "flex";
        form.style.justifyContent = "left";
        form.style.flexDirection = "row";
        form.style.gap = "4%";
        form.style.alignItems = "center";
        botao.type = "submit"

        textoo.appendChild(textoEscritoo);
        nivell.appendChild(textoNivell)
        divv.appendChild(nivell)
        divv.appendChild(textoo);
        form.appendChild(input);
        form.appendChild(botao);
        botao.appendChild(enviar);
        divv.appendChild(form)
        divMaiorall.appendChild(divv)
        pai.appendChild(divMaiorall);

        //Condição para enviar o valor do input e checar resposta

        //Função para não recarregar a página após envio do valor no input
        $('form').on('submit', function (e) {
            e.preventDefault();
            var valorInput = document.getElementById('inputCharada').value;

            if (valorInput === "Segredo" || valorInput === "segredo" || valorInput === "SEGREDO" || valorInput === "sEGREDO") {
                input.style.borderColor = "green";
                const divisoriaa = document.createElement('div');
                //Criando texto para exibir mensagem 
                const acertoo = document.createElement('p');
                const textoAcertoo = document.createTextNode('Parábens, você resolveu a segunda charada!')
                const sherlockRostoo = document.createElement('img');
                //Setando arquivo na variável tipo img
                sherlockRostoo.src = "img/sherlock.jpg";

                sherlockRostoo.classList.add('sherlockRosto');
                divisoriaa.classList.add('divSherlock');

                acertoo.appendChild(textoAcertoo);
                divisoriaa.appendChild(sherlockRostoo);
                divisoriaa.appendChild(acertoo);
                pai.appendChild(divisoriaa);

                setTimeout(function () {
                    $('.divSherlock').fadeOut('fast');
                }, 1500);

                textoEscritoo.remove();
                textoNivell.remove();
                botao.remove();
                input.remove();
                divv.remove();

                const divMaioralll = document.createElement('div');
                const divvv = document.createElement('div');
                const divSuspeitos = document.createElement('div');
                const nivelll = document.createElement('p');
                const textooo = document.createElement('p');
                const enigmaa = document.createElement('p')
                const suspeitos = document.createElement('p');
                const suspeitoUm = document.createElement('p');
                const suspeitoDois = document.createElement('p');
                const suspeitoTres = document.createElement('p');
                const final = document.createElement('p');
                const textoEscritooo = document.createTextNode('Ajude Sherlock Holmes a resolver o caso do sumiço de Sra. Evans que mora em sua bela casa na rua Baker. O detetive encontrou um bilhete escrito pela vítima que está relacionado ao nome do sequestrador:');
                const textoEnigma = document.createTextNode('"Cinco de abril, dois de junho, primeiro de agosto e primeiro de novembro"');
                const textoSuspeitos = document.createTextNode("Os nomes dos três suspeitos são:");
                const primSuspeito = document.createTextNode("John Miller");
                const segSuspeito = document.createTextNode("Luan Fowles");
                const tercSuspeito = document.createTextNode("Anna Bryan");
                const textoFinal = document.createTextNode("Resolva o enigma do bilhete e encontre o nome do verdadeiro responsável pelo sumiço da Sra. Baker.");

                divMaioralll.classList.add('divMaioral');
                divvv.classList.add('divCharada');
                nivelll.classList.add('textoNivel');
                textooo.classList.add("textoCharada");
                enigmaa.id = "txtEnigma";
                suspeitos.style.textAlign = "center";
                divSuspeitos.id = "divSuspeitos";
                suspeitos.id = "suspeitos";
                suspeitoUm.id = "suspeitoUm";
                suspeitoDois.id = "suspeitoDois";
                suspeitoTres.id = "suspeitoTres";

                const textoNivelll = document.createTextNode('Nível difícil');

                textooo.appendChild(textoEscritooo)
                nivelll.appendChild(textoNivelll);
                enigmaa.appendChild(textoEnigma);
                suspeitoUm.appendChild(primSuspeito);
                suspeitoDois.appendChild(segSuspeito);
                suspeitoTres.appendChild(tercSuspeito);
                final.appendChild(textoFinal);
                divvv.appendChild(nivelll);
                divvv.appendChild(textooo)
                divvv.appendChild(enigmaa);
                suspeitos.appendChild(textoSuspeitos);
                divvv.appendChild(suspeitos)
                divSuspeitos.appendChild(suspeitoUm);
                divSuspeitos.appendChild(suspeitoDois);
                divSuspeitos.appendChild(suspeitoTres);
                divvv.appendChild(divSuspeitos);
                divvv.appendChild(final);
                divMaioralll.appendChild(divvv);
                pai.appendChild(divMaioralll);

                //Condição de resposta
                const sus = document.querySelector('#suspeitoUm');
                sus.addEventListener("click", () => {
                    const divisoriaaa = document.createElement('div');
                    const erroo = document.createElement('p');
                    //Criando texto para exibir mensagem 
                    const textoErroo = document.createTextNode('Pense com cuidado, não podemos perder!')
                    const sherlockRostoo = document.createElement('img');
                    //Setando arquivo na variável tipo img
                    sherlockRostoo.src = "img/sherlock.jpg";

                    sherlockRostoo.classList.add('sherlockRosto');
                    divisoriaaa.classList.add('divSherlock');

                    erroo.appendChild(textoErroo);
                    divisoriaaa.appendChild(sherlockRostoo);
                    divisoriaaa.appendChild(erroo);
                    pai.appendChild(divisoriaaa);

                    setTimeout(function () {
                        $('.divSherlock').fadeOut('fast');
                    }, 1500);
                });

                const suss = document.querySelector('#suspeitoDois');
                suss.addEventListener("click", () => {
                    const divisoriaaa = document.createElement('div');
                    const errooo = document.createElement('p');
                    //Criando texto para exibir mensagem 
                    const textoErrooo = document.createTextNode('Parabéns, caro amigo Watson, você resolveu os 3 enigmas.')
                    const sherlockRostooo = document.createElement('img');
                    //Setando arquivo na variável tipo img
                    sherlockRostooo.src = "img/sherlock.jpg";

                    sherlockRostooo.classList.add('sherlockRosto');
                    divisoriaaa.classList.add('divSherlock');
                    errooo.id = "txtErro";

                    errooo.appendChild(textoErrooo);
                    divisoriaaa.appendChild(sherlockRostooo);
                    divisoriaaa.appendChild(errooo);
                    pai.appendChild(divisoriaaa);

                    setTimeout(function () {
                        $('.divSherlock').fadeOut('fast');
                    }, 2500);
                    //Jogo encerra e redireciona para a página inicial
                    setTimeout(function () {
                        window.location.href = "cidades.html";
                        console.log('a')
                    }, 2500);
                });

                const susss = document.querySelector('#suspeitoTres');
                susss.addEventListener("click", () => {
                    const divisoriaaa = document.createElement('div');
                    const erroo = document.createElement('p');
                    //Criando texto para exibir mensagem 
                    const textoErroo = document.createTextNode('Você consegue, John!')
                    const sherlockRostoo = document.createElement('img');
                    //Setando arquivo na variável tipo img
                    sherlockRostoo.src = "img/sherlock.jpg";

                    sherlockRostoo.classList.add('sherlockRosto');
                    divisoriaaa.classList.add('divSherlock');

                    erroo.appendChild(textoErroo);
                    divisoriaaa.appendChild(sherlockRostoo);
                    divisoriaaa.appendChild(erroo);
                    pai.appendChild(divisoriaaa);

                    setTimeout(function () {
                        $('.divSherlock').fadeOut('fast');
                    }, 1500);

                });


            } else {
                input.style.borderColor = "red";
                const divisoriaa = document.createElement('div');
                const erro = document.createElement('p');
                //Criando texto para exibir mensagem 
                const textoErro = document.createTextNode('Pense com calma...')
                const sherlockRostoo = document.createElement('img');
                //Setando arquivo na variável tipo img
                sherlockRostoo.src = "img/sherlock.jpg";

                sherlockRostoo.classList.add('sherlockRosto');
                divisoriaa.classList.add('divSherlock');

                erro.appendChild(textoErro);
                divisoriaa.appendChild(sherlockRostoo);
                divisoriaa.appendChild(erro);
                pai.appendChild(divisoriaa);

                setTimeout(function () {
                    $('.divSherlock').fadeOut('fast');
                }, 1500);
            }
        })
    });

    div2.addEventListener("click", () => {
        div2.style.backgroundColor = "#ad0d0d48";
        divisoria = document.createElement('div');
        acerto = document.createElement('p');
        //Criando texto para exibir mensagem 
        textoAcerto = document.createTextNode('Pense mais um pouco!')
        sherlockRosto = document.createElement('img');
        //Setando arquivo na variável tipo img
        sherlockRosto.src = "img/sherlock.jpg";
        sherlockRosto.classList.add('sherlockRosto');
        divisoria.classList.add('divSherlock');
        //Appendchild
        acerto.appendChild(textoAcerto);
        divisoria.appendChild(sherlockRosto);
        divisoria.appendChild(acerto);
        pai.appendChild(divisoria);
        //Função para delay de remove da div
        setTimeout(function () {
            $('.divSherlock').fadeOut('fast');
        }, 1500);
    });
    div3.addEventListener("click", () => {
        div3.style.backgroundColor = "#ad0d0d48";
        divisoria = document.createElement('div');
        acerto = document.createElement('p');
        //Criando texto para exibir mensagem 
        textoAcerto = document.createTextNode('Você tem certeza?')
        sherlockRosto = document.createElement('img');
        //Setando arquivo na variável tipo img
        sherlockRosto.src = "img/sherlock.jpg";
        sherlockRosto.classList.add('sherlockRosto');
        divisoria.classList.add('divSherlock');
        //Appendchild
        acerto.appendChild(textoAcerto);
        divisoria.appendChild(sherlockRosto);
        divisoria.appendChild(acerto);
        pai.appendChild(divisoria);
        //Função para delay de remove da div
        setTimeout(function () {
            $('.divSherlock').fadeOut('fast');
        }, 1500);
    });
    div4.addEventListener("click", () => {
        div4.style.backgroundColor = "#ad0d0d48";
        divisoria = document.createElement('div');
        acerto = document.createElement('p');
        //Criando texto para exibir mensagem 
        textoAcerto = document.createTextNode('Não se perca na linha de raciocínio, Watson!')
        sherlockRosto = document.createElement('img');
        //Setando arquivo na variável tipo img
        sherlockRosto.src = "img/sherlock.jpg";
        sherlockRosto.classList.add('sherlockRosto');
        divisoria.classList.add('divSherlock');
        //Appendchild
        acerto.appendChild(textoAcerto);
        divisoria.appendChild(sherlockRosto);
        divisoria.appendChild(acerto);
        pai.appendChild(divisoria);
        //Função para delay de remove da div
        setTimeout(function () {
            $('.divSherlock').fadeOut('fast');
        }, 1500);
    });
}



