import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/edclogo.png";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const content = (
        <div className="lg:hidden block absolute top-16 left-0 right-0 bg-[#111111] transition">
            <ul className="text-center text-xl py-10">
                <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
                    <li className="my-4 py-4 border-b border-transparent hover:bg-transparent hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="Events" onClick={handleClick}>
                    <li className="my-4 py-4 border-b border-transparent hover:bg-transparent hover:rounded">Events</li>
                </Link>
                <Link spy={true} smooth={true} to="Speakers" onClick={handleClick}>
                    <li className="my-4 py-4 border-b border-transparent hover:bg-transparent hover:rounded">Speakers</li>
                </Link>
                <Link spy={true} smooth={true} to="Team" onClick={handleClick}>
                    <li className="my-4 py-4 border-b border-transparent hover:bg-transparent hover:rounded">Team</li>
                </Link>
                <Link spy={true} smooth={true} to="App" onClick={handleClick}>
                    <li className="my-4 py-4 border-b border-transparent hover:bg-transparent hover:rounded">App</li>
                </Link>
            </ul>
        </div>
    );
    const navbarStyles = `
    .nav-btn {
        display: none;
    }

    .icon {
        height: 2rem;
        width: 2rem;
    }

    @media (max-width: 768px) {
        .nav-btn {
            display: block;
        }
    }
`;
    return (
        <div className="h-lvh w-screen">
            <style>{navbarStyles}</style>
            <nav className="m-0 p-0">
                <div className={`h-10vh flex justify-between z-50 text-white lg:py-1 px-4 lg:px-20 py-1 fixed top-0 left-0 w-screen transition ${scroll ? 'bg-black' : 'bg-transparent'}`} style={{ ...(scroll ? { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {}) }}>
                    <div className="flex items-center flex-1">
                        <span className="lg:text-[18px] font-bold flex flex-row justify-center items-center">
                            <img src={logo} alt="" className="w-14 h-14" />
                            <span className="hidden sm:block">Entrepreneurship <br />Development Cell</span>
                        </span>
                    </div>
                    <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-4 lg:gap-8 text-[16px] lg:text-[18px]">
                                <Link spy={true} smooth={true} to="Home">
                                    <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
                                </Link>
                                <Link spy={true} smooth={true} to="Events">
                                    <li className="hover:text-yellow-400 transition cursor-pointer">Events</li>
                                </Link>
                                <Link spy={true} smooth={true} to="Speakers">
                                    <li className="hover:text-yellow-400 transition cursor-pointer">Speakers</li>
                                </Link>
                                <Link spy={true} smooth={true} to="Team">
                                    <li className="hover:text-yellow-400 transition cursor-pointer">Team</li>
                                </Link>
                                <Link spy={true} smooth={true} to="App">
                                    <li className="hover:text-yellow-400 transition cursor-pointer">App</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {click && content}
                    </div>

                    <button className="nav-btn" onClick={handleClick}>
                        {click ? <FaTimes className="icon" /> : <IoMenu className="icon" />}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
