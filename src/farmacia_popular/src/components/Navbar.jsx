import React from 'react'

const Navbar = () => {
    return (
        <div className="relative flex justify-center mt-20">
            <div className="navbar">
                <div className="side">
                    <div className="navbar_btn">
                    <img src="home.png" alt="home button" className="w-[37px]" />
                    </div>
                    <div className="navbar_btn">
                    <img src="user.png" alt="user button" className="w-[37px]" />
                    </div>
                </div>
                <div className="w-[60px]"></div>
                <div className="side">
                    <div className="navbar_btn">
                    <img src="storeCar.png" alt="store button" className="w-[37px] " />
                    </div>
                    <div className="navbar_btn">
                    <img src="box.png" alt="storage button" className="w-[37px]" />
                    </div>
                </div>

                <div className="absolute left-1/2 -top-[40px] -translate-x-1/2 z-10">
                            <img src="logo.svg" alt="logo" className="w-[65px]" />
                </div>
            </div>
        </div>

    )
}
export default Navbar
