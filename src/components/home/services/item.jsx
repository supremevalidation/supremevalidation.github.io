const ServicesItem = props => {
    return (
        <div className="services-item">
            <figure className={props.color}>
                <i className={`icon-${props.icon}`}></i>
            </figure>
            <article>
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
            </article>
        </div>
    )
}

export default ServicesItem;