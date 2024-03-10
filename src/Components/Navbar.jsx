import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import file CSS untuk gaya navbar
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const [isRotating, setIsRotating] = useState(false); // State untuk menyimpan status rotasi

    const handleToggleClick = () => {
        setIsRotating(true); // Set state untuk mulai rotasi
        toggleTheme(); // Panggil fungsi toggleTheme setelah menambah kelas rotasi
        setTimeout(() => setIsRotating(false), 1000); // Setelah 1 detik, hentikan rotasi
    };

    return (
        <nav className={`navbar ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/">Portofolio</Link> {/* Mengubah tulisan navbar brand menjadi "Portofolio" */}
                </div>
                <div className={`toggle-theme ${isRotating ? 'rotate' : ''}`} onClick={handleToggleClick}>
                    {/* Icon bulan dan matahari untuk toggle tema */}
                    {darkTheme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
