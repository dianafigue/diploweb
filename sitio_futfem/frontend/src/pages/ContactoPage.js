import React from 'react';
import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData ] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        // <div>ContactoPage</div>
        <main className="holder contacto">
            <div>
                <h3>Participá de nuestos Torneos Sköl</h3>
                <p>Dejanos tus datos y te enviamos toda la información para la inscripción:</p>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre y Apellido</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mail">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}  />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" /></p>
                
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}


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