import React from 'react';
import { Message } from "../common/message"

export default function Contactos() {
    return <div>
        <main>
            <div className="contact">
                <form className="form" onSubmit={PreventSubmit}>
                    <h1>Contacto</h1>
                    <h3>Escríbenos!</h3>
                    <Message title="Nombre" type="text" info="Escribe tu Nombre" span="*" auto="name" />
                    <Message title="Email" type="email" info="Escribe tu Email" span="*" auto="email" />
                    <Message title="Teléfono" type="tel" info="Escribe tu Teléfono" auto="tel" />
                    <Message title="Asunto" type="text" info="Escribe un Asunto" span="*" />
                    <Message title="Mensaje" info="Deja aquí tu comentario..." span="*" />
                    <button className="button-contact" type="submit">
                        <p>Enviar</p>
                    </button>
                    <p>
                        <span> * </span>Los campos son obligatorios.
                    </p>
                </form>
            </div>
        </main>
    </div>;
}

function PreventSubmit(event) {
    const e = event || window.event;
    e.preventDefault();
}