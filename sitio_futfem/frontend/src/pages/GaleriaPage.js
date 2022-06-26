import React from 'react';
import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (
        <main class="holder">
            <h2>Fotos</h2>
                <div class="galeria">
                    <h3>Los Partidos</h3>
                        <img src="img/galeria/futfem01.jpg" alt="" />
                        <img src="img/galeria/futfem02.jpg" alt="" />
                        <img src="img/galeria/futfem04.jpg" alt="" />
                        <img src="img/galeria/futfem05.jpg" alt="" />
                        <img src="img/galeria/futfem03.jpg" alt="" />
                        <img src="img/galeria/futfem06.jpg" alt="" />
                        <img src="img/galeria/futfem07.jpg" alt="" />
                        <img src="img/galeria/futfem08.jpg" alt="" />

                    <h3>La Hinchada</h3>
                        <img src="img/galeria/hinchada01.jpg" alt="" />
                        <img src="img/galeria/hinchada03.jpg" alt="" />
                        <img src="img/galeria/hinchada04.jpg" alt="" />
                        <img src="img/galeria/hinchada02.jpg" alt="" />

                    <h3>El Tercer Tiempo</h3>
                        <img src="img/galeria/tercertiempo01.jpg" alt=""/>
                        <img src="img/galeria/tercertiempo02.jpg" alt=""/>
                        <img src="img/galeria/tercertiempo03.jpg" alt=""/>
                        <img src="img/galeria/tercertiempo04.jpg" alt=""/>
                </div>
        </main>

    );
}

export default GaleriaPage;