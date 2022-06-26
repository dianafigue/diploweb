import React from 'react';
import '../styles/components/pages/TorneosPage.css';

const TorneosPage = (props) => {
    return (
        <main className="holder">
            <h2>Torneos Sköl</h2>
            <div className="torneo">
                <img src="img/torneos/f5_fem.jpg" alt="f5_fem" />
                    <div className="f5_fem">
                        <h3>Futbol 5 - FEMENINO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias, nihil odit excepturi temporibus incidunt ea minima animi obcaecati sit debitis reprehenderit officia vel qui corrupti. Blanditiis reprehenderit autem aut?</p>
                    </div>
            </div>
            <div className="torneo">
                <img src="img/torneos/f5_mixto.jpg" alt="f5_mixto" />
                    <div className="f5_mixto">
                        <h3>Futbol 5 - MIXTO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias, nihil odit excepturi temporibus incidunt ea minima animi obcaecati sit debitis reprehenderit officia vel qui corrupti. Blanditiis reprehenderit autem aut?</p>
                    </div>
            </div>
            <div className="torneo">
                <img src="img/torneos/f8_fem.jpg" alt="f8_fem" />
                    <div className="f8_fem">
                        <h3>Futbol 8 - FEMENINO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias, nihil odit excepturi temporibus incidunt ea minima animi obcaecati sit debitis reprehenderit officia vel qui corrupti. Blanditiis reprehenderit autem aut?</p>
                    </div>
            </div>
            <div className="torneo">
                <img src="img/torneos/f8_mixto.jpg" alt="f8_mixto" />
                    <div className="f8_mixto">
                        <h3>Futbol 8 - MIXTO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias, nihil odit excepturi temporibus incidunt ea minima animi obcaecati sit debitis reprehenderit officia vel qui corrupti. Blanditiis reprehenderit autem aut?</p>
                    </div>
            </div>
        </main>

    );
}

export default TorneosPage;