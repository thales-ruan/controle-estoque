function validarProduto() {      //FUNÇÃO PARA VALIDAR OS CAMPOS ONDE VAI SER CADASTRADO OS PRODUTOS

    let codigo = document.getElementById('codigo').value;    //SELECIONANDO OS ELEMENTOS DO HTML E PEGANDO OS SEUS VALORES
    let nome = document.getElementById('nome').value;
    let marca = document.getElementById('marca').value;
    let categoria = document.getElementById('categoria').value;
    let quantidade = document.getElementById('quant').value;
    let valor = document.getElementById('valor').value;

    if (codigo == '') {
        alert('Código do produto em branco.')    // TESTE PARA VER SE NÃO FICOU NENHUM INPUT EM BRANCO
    }
    else if (nome == '') {
        alert('Nome do produto em branco.')
    }
    else if (marca == '') {
        alert('Marca do produto em branco.')
    }
    else if (categoria == '') {
        alert('Categoria do produto em branco.')
    }
    else if (quantidade == '') {
        alert('Quantidade do produto em branco.')
    }
    else if (valor == '') {
        alert('Valor do produto em branco.')
    }
    else {
        cadastrarProduto(codigo, nome, marca, categoria, quantidade, valor)   //SE NÃO TIVER NENHUM INPUT EM BRANCO EXECUTA O ELSE CADASTRANDO O PRODUTO
    };
};

function cadastrarProduto(cod, name, marcaa, catgoria, quantid, preco) {   //FUNÇÃO PARA CADASTRAR OS PRODUTOS
    let novoProduto = { codigo: cod, nome: name, marca: marcaa, categoria: catgoria, quantidade: quantid, valor: preco } //ESSA VARIAVEL É ONDE VAI ARMAZENAR OS PRODUTOS 
    if (typeof (Storage) !== 'undefined') { // VER SE A APLICAÇÃO É COMPATIVEL COM O NAVEGADOR
        let produtos = localStorage.getItem("produtos"); //PEGO ESSA VARIAVEL NO LOCALSTORAGE
        if (produtos == null) produtos = [];    //PARA VER SE ELA É IGUAL A NULL, SE FOR A PRIMEIRA VEZ SE CRIA ESSE VETOR
        else produtos = JSON.parse(produtos);  // SE NÃO PEGA A VARIAVEL PRODUTO ( QUE VAI SE ENCONTRA COMO STRING ) E TRANSFORMA ELA EM JSON
        produtos.push(novoProduto);   //ADICIONA PRODUTOS A VARIAVEL NOVOS PRODUTO
        localStorage.setItem("produtos", JSON.stringify(produtos))// SE TRANSFORMA EM STRING DE NOVO
        alert("Foi cadastrado" + " " + quantid + " " + "Unidades do produto" + " " + name + "!!!"); //EMITE UM ALERTA SE O PRODUTO FOI CADASTRADO
    };

};


function listarEstoque() {  //ESSA FUNCÃO MOSTRA O ESTOQUE NA ABA DE ESTOQUE
    var itens = JSON.parse(localStorage.getItem('produtos'));   // ESSA VARIAVEL TRANSFORMA A VARIAVEL PRODUTO EM UMA STRING
    var resultadoItens = document.getElementById('resultados'); //SELECIONA NO HTML ONDE VAI SER EXIBIDO O ESTOQUE

    resultadoItens.innerHTML = '';
    for (var i = 0; i < itens.length; i++) { // UTILIZA O FOR PARA FAZER UMA VARREDURA NO ARRAY 

        var codd = itens[i].codigo;
        var naame = itens[i].nome;
        var marcaa = itens[i].marca;
        var cate = itens[i].categoria;
        var qtt = itens[i].quantidade;
        var valoor = itens[i].valor;

        resultadoItens.innerHTML += '\
                <tr>\
                    <td style="word-wrap: break-word;">' + codd + '</td>\
                    <td style="word-wrap: break-word;">' + naame + '</td>\
                    <td style="word-wrap: break-word;">' + marcaa + '</td>\
                    <td style="word-wrap: break-word;">' + cate + '</td>\
                    <td style="word-wrap: break-word;">' + qtt + '</td>\
                    <td style="word-wrap: break-word;">' + valoor + '</td>\
                  \
                </tr>';

    };
};




function apagar() {  //UMA FUNCÃO ONCLICK PARA APAGAR OS ITEM QUANDO ESTIVER CADASTRANDO
    let codigo = document.getElementById('codigo').value = "";
    let nome = document.getElementById('nome').value = "";
    let marca = document.getElementById('marca').value = "";
    let categoria = document.getElementById('categoria').value = "";
    let quantidade = document.getElementById('quant').value = "";
    let valor = document.getElementById('valor').value = "";
};

function filtraTabelaProduto() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("busca-produto");
    filter = input.value.toUpperCase();
    table = document.getElementById("resultados");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
