import Detail from '../components/detail';

const Events = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>onSuccess</h4>
                <p className="feature"><strong>Type:</strong> Function</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>onError</h4>
                <p className="feature"><strong>Type:</strong> Function</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
        </Detail>
    )
}

export default Events;