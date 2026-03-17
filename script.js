const produtos = [];
const infoTabela = document.getElementById("tabela-vendedores");

function atualizarLista() {
    infoTabela.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
        const item = document.createElement('tr');
        item.className = 'item-lista';
        produtos[i].id = i+1;
        
        item.innerHTML = `
            <td>${produtos[i].id}</td>
            <td>${produtos[i].nome}</td>
            <td>${produtos[i].valor}</td>
            <td>${produtos[i].desconto}</td>
            <td>${produtos[i].valorDesconto}</td>
            <td>${produtos[i].data}</td>
            <button onclick="deletarItem(${i+1})">Deletar</button>
        `;
        
        infoTabela.appendChild(item);
    }
}

function inserirVenda(){
    const nomeVendedor = document.getElementById("nome").value;
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    console.log(valorVenda);
    const valorDesconto = valorVenda * 0.9;
    let id;

    if(nomeVendedor.trim() === "" || isNaN(valorVenda) || valorVenda <= 0){
        alert("Preencha o nome do vendedor ou  valor corretamente!");
        return;
    }

    

    if(produtos.length === 0){
        id = 1;
    }else{
        id = produtos.length + 1;
    }

    produtos.push({
        id: produtos.length+1,
        nome: nomeVendedor,
        valor: valorVenda,
        desconto: 10,
        valorDesconto: valorDesconto,
        data: new Date().toLocaleString('pt-BR')
    });

        
    atualizarLista();

    document.getElementById("nome").value = "";
    document.getElementById("valorVenda").value = "";

    document.getElementById("nome").focus();


}

function limparVendas(){
    const tamanho = produtos.length;

    if(tamanho === 0){
        alert("ERRO: Não existem vendas a serem limpas!");
        return;
    }

    produtos.length = 0;

    infoTabela.innerHTML = "";

    console.log("Lista limpa com sucesso!");
    
}

function deletarItem(item){
    const indice = produtos.findIndex(produtos => produtos.id === item);

    if (indice !== -1) {
        produtos.splice(indice, 1);
        
        atualizarLista(); 
    }
}
