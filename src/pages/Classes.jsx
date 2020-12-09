import Detail from '../components/detail';

const Classes = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>supreme-validate</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>supreme-validate-element</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>checkbox-list</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>radio-list</h4>
                <p className="feature"><strong>Type:</strong> String</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
        </Detail>
    )
}

export default Classes;