import React from 'react'
import Produto from "./Produto.jsx";

const ProdutosContainer = () => {
    //Da um fetch de todos os produtos e pega todas as infos pra usar no produto
    return (
        <>
            <div className='container produtoContainer flex flex-col p-[19px] gap-8'>
                <div className='PesquisarAdicionarBox gap-20 flex flex-row flex-wrap justify-between'>
                    <div className='PesquisarBox w-96 flex flex-col gap-4'>
                        <p>
                            Pesquisar Produto
                        </p>
                        <div className='relative w-full'>
                            <input className='p-2 w-full container' name='pesquisar' type="search"
                                   placeholder='Nome do produto...'/>
                            <button className='absolute top-0 end-4 ' type='submit'>
                                <img className='w-[36px]' src="lupaicon.svg" alt="Icon_Lupa"/>
                            </button>
                        </div>
                    </div>
                    <div className='AdicionarBox self-start flex flex-row content-center justify-center items-center gap-4'>
                        <p>Adicionar produto</p>
                        <img className='w-[50px]' src="adicionar-produto.svg" alt="add produto icon"/>
                    </div>
                </div>
                <div className='flex flex-col max-h-96 overflow-x-auto gap-4 p-2'>
                    <Produto
                        //id={id}
                        //descricao={descricao}
                        //precoVenda={precoVenda}
                        //laboratorio={laboratorio}
                        //lote={lote}
                        //vencimento={vencimento}
                        //area={area}
                        //estoque={estoque}
                    />
                    <Produto
                        //id={id}
                        //descricao={descricao}
                        //precoVenda={precoVenda}
                        //laboratorio={laboratorio}
                        //lote={lote}
                        //vencimento={vencimento}
                        //area={area}
                        //estoque={estoque}
                    />
                    <Produto
                        //id={id}
                        //descricao={descricao}
                        //precoVenda={precoVenda}
                        //laboratorio={laboratorio}
                        //lote={lote}
                        //vencimento={vencimento}
                        //area={area}
                        //estoque={estoque}
                    />
                    <Produto
                        //id={id}
                        //descricao={descricao}
                        //precoVenda={precoVenda}
                        //laboratorio={laboratorio}
                        //lote={lote}
                        //vencimento={vencimento}
                        //area={area}
                        //estoque={estoque}
                    />
                    <Produto
                        //id={id}
                        //descricao={descricao}
                        //precoVenda={precoVenda}
                        //laboratorio={laboratorio}
                        //lote={lote}
                        //vencimento={vencimento}
                        //area={area}
                        //estoque={estoque}
                    />
                </div>

            </div>
        </>
    )
}
export default ProdutosContainer
