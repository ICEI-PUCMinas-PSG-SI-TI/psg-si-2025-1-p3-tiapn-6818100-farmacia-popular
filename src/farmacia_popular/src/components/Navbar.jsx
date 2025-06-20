import React from 'react'

const Navbar = () => {
    return (
        <div className="relative flex">
            <div className="navbar">
                <div className="side">
                    <a href='/'>
                        <div className="navbar_btn">
                            <img src="home.png" alt="home button" />
                        </div>
                    </a>
                    <a href='/usuarios'>
                        <div className="navbar_btn">
                            <img src="user.png" alt="user button" />
                        </div>
                    </a>
                </div>

                <div className="side">
                    <a href='/produtos'>
                        <div className="navbar_btn">
                            <img src="storeCar.png" alt="store button" />
                        </div>
                    </a>
                    <a href='/vendas'>
                        <div className="navbar_btn">
                            <img src="box.png" alt="storage button" />
                        </div>
                    </a>
                </div>

                <div className="absolute left-1/2 -top-[40px] -translate-x-1/2 z-10">
                    <img src="logo.svg" alt="logo" className="hidden md:block md:w-[65px]" />
                </div>
            </div>
        </div>

    )
}
export default Navbar
