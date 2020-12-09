import Detail from '../components/detail';

const Options = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>buttonDisabled</h4>
                <p className="feature"><strong>Type:</strong> Boolean</p>
                <p className="feature"><strong>Default:</strong> false</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>keyUpOption</h4>
                <p className="feature"><strong>Type:</strong> Boolean</p>
                <p className="feature"><strong>Default:</strong> false</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
            <article className="detail-item">
                <h4>focusOutOption</h4>
                <p className="feature"><strong>Type:</strong> Boolean</p>
                <p className="feature"><strong>Default:</strong> false</p>
                <p>Place one of the following script near the end of your pages, right before the closing body tag, to enable them.</p>
            </article>
        </Detail>
    )
}

export default Options;