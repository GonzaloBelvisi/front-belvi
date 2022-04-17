// eslint-disable-next-line no-unused-vars
export function Sobrenosotroscard(props) {
  return (
    <article className="item-about">
      <img src={props.img} alt="about_us"></img>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </article>
  );
}