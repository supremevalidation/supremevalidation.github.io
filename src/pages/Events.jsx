import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";

const Events = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>onSuccess</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> Function</p>
                <p>
                    <FormattedMessage id="sidebar.api.events.onSuccess.detail" defaultMessage="This function will work after success form validation." />
                </p>
            </article>
            <article className="detail-item">
                <h4>onError</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> Function</p>
                <p>
                    <FormattedMessage id="sidebar.api.events.onError.detail" defaultMessage="This function will work after fail form validation." />
                </p>
            </article>
        </Detail>
    )
}

export default Events;