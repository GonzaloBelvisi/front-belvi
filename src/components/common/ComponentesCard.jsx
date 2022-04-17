// eslint-disable-next-line no-unused-vars
export function ComponentesCard(props) {
    return (
        <article className='item'>
        <img src={props.img} alt="Componente"></img>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
        </article>
        
  );
}