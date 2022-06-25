import React from 'react';

const ContactoPage = (props) => {
    return (
        // <div>ContactoPage</div>
        <main className="holder contacto">
            <div>
                <h3>Participá de nuestos Torneos Sköl</h3>
                <p>Dejanos tus datos y te enviamos toda la información para la inscripción:</p>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre y Apellido</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mail">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                <div>
                    <h3>Contactanos</h3>
                    <p>También podés comunicarte con nosotros:</p>
                    <ul>
                        <li><i className="fa-brands fa-whatsapp"></i> Teléfono: 1543435566</li>
                        <li><i className="fa-solid fa-at"></i> Email: informacion@torneoskol.com.ar</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Seguinos</h3>
                <p>Buscanos en las redes sociales y seguinos para más información</p>
                <div className="redes">
                    <ul>
                        <li>Instagram<a href="#"><img
                            src="img/contacto/insta.png" target="_blank" /></a></li>
                        <li>Facebook<a href="#"><img
                            src="img/contacto/face.png" alt="facebook" target="_blank" /></a></li>
                        <li>Twitter<a href="#"><img
                            src="img/contacto/twit.png" alt="twitter" target="_blank" /></a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;