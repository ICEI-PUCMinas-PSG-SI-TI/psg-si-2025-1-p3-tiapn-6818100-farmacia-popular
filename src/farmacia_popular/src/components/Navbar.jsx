import React, {useState} from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = (
        <>
            <div className="navbar_btn">
                <img src="home.png" alt="home button" />
            </div>
            <div className="navbar_btn">
                <img src="user.png" alt="user button" />
            </div>
            <div className="navbar_btn">
                <img src="storeCar.png" alt="store button" />
            </div>
            <div className="navbar_btn">
                <img src="box.png" alt="storage button" />
            </div>
        </>
    );
    return (
        <>
            <div className="navbar hidden md:flex  fixed">
                {navItems}
            </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="block md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow"
                >
                    <p className='text-red-600'>oi sou o menu</p>
                </button>
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
                        <div className="container p-6 w-[90%] max-w-sm h-[90%]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-right w-full text-red-500 font-bold"
                            >
                                ✕ Fechar
                            </button>
                            <div className="flex flex-col justify-between">{navItems}</div>
                        </div>
                    </div>
                )}

        </>

    )
}
export default Navbar
