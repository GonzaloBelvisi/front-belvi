// eslint-disable-next-line no-unused-vars
export function ContactInfo(props) {
    return (
        <div className="row2">
            <img src={props.img} alt="Contact-Logo"></img>
            <label>
                {props.ContactInfo}
            </label>
        </div>
    );
}