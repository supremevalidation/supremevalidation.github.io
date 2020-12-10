import { FormattedMessage } from "react-intl";
import Detail from "../components/detail";

const Classes = props => {
    return (
        <Detail {...props}>
            <article className="detail-item">
                <h4>supreme-validate</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> String</p>
                <p>
                    <FormattedMessage id="sidebar.api.classes.supremeValidate.detail" defaultMessage="You must add this class on form element if you want form validation." />
                </p>
            </article>
            <article className="detail-item">
                <h4>supreme-validate-element</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> String</p>
                <p>
                    <FormattedMessage id="sidebar.api.classes.supremeValidateElement.detail" defaultMessage="You must add this class on form item element for to be validation." />
                </p>
            </article>
            <article className="detail-item">
                <h4>checkbox-list</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> String</p>
                <p>
                    <FormattedMessage id="sidebar.api.classes.checkboxList.detail" defaultMessage="You must add this class on check-box element for validation." />
                </p>
            </article>
            <article className="detail-item">
                <h4>radio-list</h4>
                <p className="feature"><strong><FormattedMessage id="sidebar.api.options.type" defaultMessage="Type" />:</strong> String</p>
                <p>
                    <FormattedMessage id="sidebar.api.classes.radioList.detail" defaultMessage="You must add this class on radio-button element for validation." />
                </p>
            </article>
        </Detail>
    )
}

export default Classes;