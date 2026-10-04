import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <h2>Rifaya Parveen</h2>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
                <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar