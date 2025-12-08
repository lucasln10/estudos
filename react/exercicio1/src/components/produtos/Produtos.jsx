import React from 'react'
import getProdutos from '../../data/produtos'

export const Produtos = () => {
    console.log(getProdutos());    
    const produtos = getProdutos().map((produto) => (
        <div key={produto.id}>
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <p>{produto.quantidade}</p>
        </div>
    ));
    return (
        <div>
            <h2>Produtos</h2>
            {produtos}
        </div>
    );
}