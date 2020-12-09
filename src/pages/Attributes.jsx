import Detail from '../components/detail';

const Attributes = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>error-message</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>min-check</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
        </Detail>
    )
}

export default Attributes;