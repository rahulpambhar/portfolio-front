import React from 'react'

const Navbar = ({ selectedLink, setLink, isNavOpen, toggleNav }) => {
    return (
        <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
            <div className="container">
                <img src="favicon.jpg" class="logo" />

                <ul className={`nav ${isNavOpen ? 'show' : ''}`}>
                    <li className="item">
                        <a className={selectedLink === "home" ? "link text-primary" : "link"} onClick={() => { setLink("home") }} href="#home">Home</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "about" ? "link text-primary" : "link"} onClick={() => { setLink("about") }} href="#about">About</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "portfolio" ? "link text-primary" : "link"} onClick={() => { setLink("portfolio") }} href="#portfolio">Portfolio</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "pricing" ? "link text-primary" : "link"} onClick={() => { setLink("pricing") }} href="#pricing">Pricing</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "testmonial" ? "link text-primary" : "link"} onClick={() => { setLink("testmonial") }} href="#testmonial">Testmonial</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "blog" ? "link text-primary" : "link"} onClick={() => { setLink("blog") }} href="#blog">Blog</a>
                    </li>
                    <li className="item">
                        <a className={selectedLink === "contact" ? "link text-primary" : "link"} onClick={() => { setLink("contact") }} href="#contact">Contact</a>
                    </li>

                </ul>
                <a id="nav-toggle" className={`hamburger hamburger--elastic ${isNavOpen ? 'is-active' : ''}`} onClick={toggleNav}>
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </a>
            </div>
        </nav >
    )
}

export default Navbar