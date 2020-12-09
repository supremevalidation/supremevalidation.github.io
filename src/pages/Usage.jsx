import Detail from '../components/detail';
import CodeWidget from '../components/code-widget';

const Usage = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>JS</h4>
                <p className="mb-4">Place one of the following script near the end of your pages, right before the closing body tag, to enable them. jQuery must come first, then our JavaScript plugin.</p>
                <CodeWidget>
                    <code>{"<script src=“https://code.jquery.com/jquery-3.5.1.min.js”></script>"}</code>
                    <code>{"<script src=“assets/js/supreme.validation.min.js”></script>"}</code>
                </CodeWidget>
            </article>
            <article className="detail-item">
                <h4>CSS</h4>
                <p className="mb-4">Copy-paste the stylesheet into your before all other stylesheets to load our CSS. You can use ready-made theme if you want.</p>
                <CodeWidget>
                    <code>{"<link href=“assets/css/supreme.validation.min.css” rel=“stylesheet”>"}</code>
                    <code>{"<link href=“assets/css/supreme.validation.theme.min.css” rel=“stylesheet”>"}</code>
                </CodeWidget>
            </article>
            <article className="detail-item">
                <h4>HTML</h4>
                <p className="mb-4">You can clone repo from Github and free use in your project. Copy this code and paste code in console.</p>
                <CodeWidget>
                    <code>{'<form id="contact-form" class="supreme-validate">'}</code>
                    <code>{'<div class="supreme-validate-element" error-message="Required field">'}</code>
                    <code>{'<label>Name:</label>'}</code>
                    <code>{'<input type="text" placeholder="Name" name="name">'}</code>
                    <code>{'</div>'}</code>
                    <code>{'</form>'}</code>
                </CodeWidget>
            </article>
        </Detail >
    )
}

export default Usage;