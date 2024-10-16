import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <div className="video-background">
                {/* Background Video */}
                <video autoPlay muted loop className="background-video">
                    <source src="./matrix.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content Section */}
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <div className="flex">
                                <img className="h-8 w-auto" src="./image/logo.png" alt="Logo" />
                                <h1 style={{color:"white",fontSize:"24px"}}>EthAi</h1>
                                </div>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12" style={{ backgroundColor: "#0C2B2FB2", color: "white", borderRadius: "48px", padding: "20px", borderWidth: "1px",borderColor:"#0F373C" }}>
                            <a href="#" className="text-sm font-semibold leading-6" style={{ color: "#B0FAFFB2" }}>Features</a>
                            <a href="#" className="text-sm font-semibold leading-6" style={{ color: "#B0FAFFB2" }}>Why Us</a>
                            <a href="#" className="text-sm font-semibold leading-6" style={{ color: "#B0FAFFB2" }}>Tokenomics</a>
                            <a href="#" className="text-sm font-semibold leading-6" style={{ color: "#B0FAFFB2" }}>Roadmap</a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <button className="WhitepaperButton">Whitepaper</button>
                        </div>
                    </nav>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">When Innovation</h1>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Meets <span style={{backgroundColor:"#B0F9FF",color:"#0B2A2D",borderRadius:"48px",fontSize:"50px",padding:"3px"}}>Investment</span></h1>
                        <p className="mt-6 text-lg leading-8 text-white ">Empowering Trading Through Advanced Technology </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button className="opened">Opened App</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;


