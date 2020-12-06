const DevelopmentItem = props => {
    return (
        <div className="development-environment-item">
            <figure className={props.color}>
                <i className={`icon-${props.icon}`}></i>
            </figure>
            <article>
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
            </article>
        </div>
    )
}

export default DevelopmentItem;