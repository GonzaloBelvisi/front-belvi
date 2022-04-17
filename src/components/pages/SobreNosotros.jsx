import { Sobrenosotroscard } from "../common/Sobrenosotroscard"
import React from 'react';
import Serviciotecnico from "../../assets/Images/Quienessomos.png";
import Serviciotecnico2 from "../../assets/Images/Aboutus.jpg";

export default function Sobrenosotros() {
  return <div>
    <main>
      <div className="blocks-about">
        <Sobrenosotroscard title="NOSOTROS" img={Serviciotecnico} info="Establecida en Uruguay desde 2007, nuestra empresa es líder en el desarrollo y ventas de productos tecnologicos. Apuntando no sólo a la venta de artículos informáticos y tecnologicos, sino también a la atención personalizada y asesoramiento
            adaptado a cada necesidad del cliente. Nuestro equipo, está capacitado para brindarle la mejor atención y satisfacer sus consultas y necesidades. Siempre estamos en busca de mejorar nuestros procesos de trabajo para garantizar la calidad
            de nuestros productos y servicios. Logrando cubrir los requerimientos de grandes, medianos y pequeños clientes acorde a las exigencias del mercado y el ritmo de los cambios tecnológicos. Nuestro objetivo es ofrecerle soluciones rapidas
            y confiables con la mejor tecnologia a su alcance. Estamos para servirlo, no dude en consultarnos!" />
        <Sobrenosotroscard title="Experiencia" img={Serviciotecnico2} info="Disponemos de laboratorios dotados de herramientas y equipo humano capacitado para brindar soluciones educativas en diversos campos tecnológicos. Resaltando nuestro conocimiento en el campo de tecnología e informática por mas de 20 años
                    en el sector corporativo y educativo estamos seguros de poder ofrecerle todo el apoyo, soporte y respaldo que requieran aliados, clientes o usuarios para el desarrollo o actualización de sus proyectos, buscamos la mejor opción en costo
                    beneficio sumando confiabilidad, respaldo y economía en sus requerimientos."/>
      </div>
    </main>
  </div>;
}
