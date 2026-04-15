function calcular(){
    // pontuação dos itens avulsos
    // recupera para uma variável do JS a quantidade de arroz digitado pelo user
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    // recupera para uma variável do JS a quantidade de feijão digitado pelo user
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    // recupera para uma variável do JS a quantidade de macarrão digitado pelo user
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // recupera para uma variável do JS a quantidade de óleo digitado pelo user
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    // calcula a pontuação total
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeMacarrao * 4) +
                (qtdeOleo * 2)

    // pontuação dos kits de alimentação
    // recupera a cor escolhida pelo usuário
    let cor = document.getElementById("cor").value
    // estrutura de seleção
    let metaKit // meta do kit de alimentação 
    if (cor == "verde"){
        metaKit = 61
    }
    else if (cor == "vermelho"){
        metaKit = 32
    }
    else if (cor == "laranja"){
        metaKit = 21
    }
    let qtdeKits = Number(document.getElementById("qtdeKits").value)
    if (qtdeKits >= metaKit){
        pontos = pontos + 5000
        if (qtdeKits > metaKit){
            pontos = pontos + (qtdeKits - metaKit) * (5000 / metaKit)
        }
    }
    else {
        pontos = pontos + (qtdeKits) * (5000 / metaKit)
    }

    // mostramos a pontuação total ao usuário
    document.getElementById("result").innerText = "Pontuação: " + pontos.toFixed(2)
}