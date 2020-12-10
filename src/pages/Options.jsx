import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";

const Options = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>buttonDisabled</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> Boolean</p>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.default" defaultMessage="Default" />:</strong> false</p>
                <p>
                    <FormattedMessage id="sidebar.api.options.buttonDisabled.detail" defaultMessage="Form button is disabled. If success fill form, form button is enabled." />
                </p>
            </article>
            <article className="detail-item">
                <h4>keyUpOption</h4>
                <p className="feature"><strong>Type:</strong> Boolean</p>
                <p className="feature"><strong>Default:</strong> false</p>
                <p>
                    <FormattedMessage id="sidebar.api.options.keyUpOption.detail" defaultMessage="If form element is changed, form element is validated." />
                </p>
            </article>
            <article className="detail-item">
                <h4>focusOutOption</h4>
                <p className="feature"><strong>Type:</strong> Boolean</p>
                <p className="feature"><strong>Default:</strong> false</p>
                <p>
                    <FormattedMessage id="sidebar.api.options.focusOutOption.detail" defaultMessage="Form element is validated only if focus out." />
                </p>
            </article>
        </Detail>
    )
}

export default Options;