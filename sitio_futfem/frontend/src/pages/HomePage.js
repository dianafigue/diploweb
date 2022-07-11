import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main class="foto_portada">
            <div>
                <section className="holder inscribite">
                    <h2>¡Vení a jugar con tu equipo!</h2>
                    <p>Jugá en nuestros torneos y viví momentos inolvidables con tus amigas. Tenemos F5, F8 femenino y
                        mixtos. Torneos de Verano, Apertura, Invierno y Clausura.</p>
                    <button type="button" className="button"><a href="contacto.html">Inscribite</a></button>
                </section>
            </div>
        </main>

    );
}

export default HomePage;