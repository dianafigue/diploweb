import React from 'react';
import '../../styles/components/layout/Nav.css';
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
            
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-house"></i> Home</ NavLink></li>
                    <li><NavLink to="/torneos" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-futbol"></i> Torneos</ NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-file-lines"></i> Novedades</ NavLink></li>
                    <li><NavLink to="/galeria" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-camera"></i> Galeria</ NavLink></li>
                    {/* <li><NavLink to="/reglamento" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-file-contract"></i> Reglamento</ NavLink></li> */}
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}><i className="fa-solid fa-envelope"></i> Contacto</ NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;