const Button = props => {

    const getIcon = () => props.icon && <i className={`icon-${props.icon}`}></i>

    return (
        <button className={`${props.color}${props.large ? ' large' : ''}`}>
            {getIcon()}
            {props.title}
        </button>
    )
}

export default Button;