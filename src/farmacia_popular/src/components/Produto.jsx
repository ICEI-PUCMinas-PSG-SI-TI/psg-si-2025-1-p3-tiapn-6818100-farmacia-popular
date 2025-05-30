import React from 'react'

const Produto = (
    id,
    descricao,
    precoVenda,
    laboratorio,
    lote,
    vencimento,
    area,
    estoque
) => {


    return (
        <div className='produto-box flex flex-col p-4 gap-4'>
            <div className='flex flex-row justify-between content-center'>
                <img src="editIcon.png" alt="edit icon"/>
                <p className='text-green-400'>Preco de venda</p>
            </div>
            <div className='bg-white/60 p-2 rounded-xl flex flex-col'>
                <p>Descrição Produto</p>
                <div className='flex flex-row gap-4 justify-end'>
                    <p>Laboratorio</p>
                    <p>Lote</p>
                    <p className='text-red-900'>02/2026</p>
                </div>
            </div>
            <div className='flex flex-row gap-4 justify-end'>
                <p>
                    Area do produto
                </p>
                <p className='text-red-900'>
                    4/20
                </p>
            </div>
        </div>
    )
}
export default Produto
