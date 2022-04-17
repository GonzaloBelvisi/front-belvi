// eslint-disable-next-line no-unused-vars
export function SocialNetwork(props) {
    return (
        <div className="row">
            <a href="#1"><img src={props.img} alt="Network-Logo"></img></a>
            <label>{props.info}</label>
        </div>
    );
}
