// eslint-disable-next-line no-unused-vars
export function Message(props) {
    return (
        <p>
            <label className="label-contact">{props.title}
                <span>{props.span}</span>
            </label>
            <input className="input-contact" type={props.type} placeholder={props.info} autoComplete={props.auto}></input>
        </p>
    );
}