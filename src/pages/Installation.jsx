import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";
import CodeWidget from "../components/code-widget";

const Installation = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>Github</h4>
                <p className="mb-4">
                    <FormattedMessage
                        id="sidebar.gettingStarted.installation.github.detail"
                        defaultMessage="You can clone repo from Github and free use in your project. Copy this code and paste code in console."
                    />
                </p>
                <CodeWidget code="git clone https://github.com/supremevalidation/supremevalidation.git" />
            </article>
            <article className="detail-item">
                <h4>NPM</h4>
                <p className="mb-4">
                    <FormattedMessage
                        id="sidebar.gettingStarted.installation.npm.detail"
                        defaultMessage="You can download up to date npm package. Copy this code and paste code in console."
                    />
                </p>
                <CodeWidget code="npm install supreme-validation" />
            </article>
        </Detail>
    )
}

export default Installation;