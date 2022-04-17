import React from 'react';
import ServicioTecnico from "../../assets/Images/services.jpg"

export default function Servicios() {
  return <div>
<main>
  <div className="blocks-services">
      <article className="item-services">
          <img src={ServicioTecnico} alt="Servicio Tecnico"></img>
          <h2>Servicio Técnico</h2>
          <p>TecnoBelvi provee servicio de venta. desarrollo y manejo de soluciones, soporte técnico tanto correctivo como preventivo, suministramos soluciones en equipos de cómputo, periféricos y software especializado, para todo tipo de plataformas.
              Como distribuidores y centros autorizados de servicio manejamos toda la linea de productos, accesorios compatibles y contamos con el mejor soporte en garantías directas.
          </p>
          <p>Cualquier consulta o pedido al: +598 99 244 062</p>
      </article>
  </div>
</main>
</div>;
}
