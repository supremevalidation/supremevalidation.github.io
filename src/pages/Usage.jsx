import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";
import CodeWidget from "../components/code-widget";

const HTML_CODE =
`<form id="contact-form" class="supreme-validate">
    <div class="supreme-validate-element" error-message="Required field">
        <label>Name:</label>
        <input type="text" placeholder="Name" name="name">
    </div>
</form>`

const Usage = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>JS</h4>
                <p className="mb-4">
                    <FormattedMessage id="sidebar.gettingStarted.usage.js.detail" defaultMessage="Place one of the following script near the end of your pages, right before the closing body tag, to enable them. jQuery must come first, then our JavaScript plugin." />
                </p>
                <CodeWidget>
                    <code>{"<script src=“https://code.jquery.com/jquery-3.5.1.min.js”></script>"}</code>
                    <code>{"<script src=“assets/js/supreme.validation.min.js”></script>"}</code>
                </CodeWidget>
            </article>
            <article className="detail-item">
                <h4>CSS</h4>
                <p className="mb-4">
                    <FormattedMessage id="sidebar.gettingStarted.usage.css.detail" defaultMessage="Copy-paste the stylesheet into your before all other stylesheets to load our CSS. You can use ready-made theme if you want." />
                </p>
                <CodeWidget>
                    <code>{"<link href=“assets/css/supreme.validation.min.css” rel=“stylesheet”>"}</code>
                    <code>{"<link href=“assets/css/supreme.validation.theme.min.css” rel=“stylesheet”>"}</code>
                </CodeWidget>
            </article>
            <article className="detail-item">
                <h4>HTML</h4>
                <p className="mb-4">
                    <FormattedMessage id="sidebar.gettingStarted.usage.html.detail" defaultMessage="You can clone repo from Github and free use in your project. Copy this code and paste code in console." />
                </p>
                <CodeWidget>
                    <code>{HTML_CODE}</code>
                </CodeWidget>
            </article>
        </Detail >
    )
}

export default Usage;