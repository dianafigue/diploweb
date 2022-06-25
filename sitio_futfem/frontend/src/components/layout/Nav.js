import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/" className="activo"><i className="fa-solid fa-house"></i> Home</Link></li>
                    <li><Link to="/torneos"><i className="fa-solid fa-futbol"></i> Torneos</Link></li>
                    <li><Link to="/novedades"><i className="fa-solid fa-trophy"></i> Novedades</Link></li>
                    {/* faltaría cambiar el icono de "novedades" ya que anteriormente esta seccion era "premios" */}
                    <li><Link to="/galeria"><i className="fa-solid fa-camera"></i> Galeria</Link></li>
                    {/* <li><Link to="/reglamento"><i className="fa-solid fa-file-contract"></i> Reglamento</Link></li> */}
                    <li><Link to="/contacto"><i className="fa-solid fa-envelope"></i> Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;