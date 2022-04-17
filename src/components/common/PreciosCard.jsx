// eslint-disable-next-line no-unused-vars
export function PreciosCard(props) {
    return (
        <div className="tabla-precios hover">
            <h2>{props.title}</h2>
            <img src={props.img} alt="LogoMarca"></img>
            <h3>{props.precio} <sup>$</sup></h3>
            <p>{props.infopc}</p>
            <a href="#1" className="boton">Paga ahora</a>
        </div>
  );
}