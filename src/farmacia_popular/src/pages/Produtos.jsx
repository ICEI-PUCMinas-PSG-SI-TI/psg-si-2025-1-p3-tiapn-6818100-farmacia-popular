import React from 'react'
import Navbar from "../components/Navbar.jsx";
import ProdutosContainer from "../components/ProdutosContainer.jsx";

const Produtos = () => {
    return (
        <div >
            <Navbar />
            <ProdutosContainer className="max-w-[90%] md:max-w-full"/>
        </div>
    )
}
export default Produtos
