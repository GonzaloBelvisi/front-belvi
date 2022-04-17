import { SocialNetwork } from "../components/common/SocialNetwork"
import { ContactInfo } from "./common/ContactInfo";
import React from 'react';
import Facebook from "../assets/Images/facebook.png"
import Twitter from "../assets/Images/Twitter.png"
import Instagram from "../assets/Images/instagram.png"
import Youtube from "../assets/Images/Youtube.png"
import HouseLogo from "../assets/Images/House.png"
import PhoneLogo from "../assets/Images/Phone.png"
import emailLogo from "../assets/Images/email.png"

export default function footer() {
    return <div>
        <footer>
            <div className="container-footer-all">
                <div className="container-body">
                    <div className="column1">
                        <h1>Mas informacion de la empresa</h1>
                        <p>Actualmente TecnoBelvi. es una empresa sólida en el sector tecnológico Uruguayo, que brinda consultoría, soporte técnico especializado, capacitación, educación dirigida a profesionales, e invierte en desarrollo de software y
                            soluciones optimas para cubrir las necesidades de nuestros clientes contamos tambien con los mejores equipos y accesorios de diversas marcas. Estamos enfocados en atender las necesidades de empresas y personas que hacen uso de
                            tecnologías le damos la seguridad de tener un equipo de especialistas a su servicio, colocamos a su disposición las herramientas tecnológicas, la innovación y el constante mejoramiento de nuestros servicios; Siempre pensando
                            en la comodidad y el bienestar de nuestros clientes.</p>
                    </div>
                    <div className="column2">
                        <h1>Redes Sociales</h1>
                        <SocialNetwork info="Siguenos en Facebook" img={Facebook} />
                        <SocialNetwork info="Siguenos en Twitter" img={Twitter} />
                        <SocialNetwork info="Siguenos en Instagram" img={Instagram} />
                        <SocialNetwork info="Siguenos en YouTube" img={Youtube} />
                    </div>
                    <div className="column3">
                        <h1>Informacion Contactos</h1>
                        <ContactInfo img={HouseLogo} ContactInfo="Ejido 1209 Esq Canelones" />
                        <ContactInfo img={PhoneLogo} ContactInfo="+598 99 244 062" />
                        <ContactInfo img={emailLogo} ContactInfo="gonzalobelvisi@gmail.com" />
                    </div>
                </div>
            </div>

            <div className="container-footer">
                <div className="footer">
                    <div className="copyright">
                        © Copyright 2003-2021 by Refsnes Data. All Rights Reserved. TecnoBelvi is Powered by Gonzalo Belvisi
                    </div>
                    <div className="information">
                        <a href="#1">Informacion Compañia</a> | <a href="#1">Privacion y Politica</a> | <a href="#1">Terminos y
                            Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>;
}
