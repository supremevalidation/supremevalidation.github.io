import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { CaretDown } from "../svg";

export default function SidebarMobile(props) {
    let history = useHistory();

    const onSidebarSelectChange = e => history.push(e.target.value)

    return (
        <div className="select-container d-block d-sm-block d-md-none">
            <select id="sidebar" name="sidebar" onChange={onSidebarSelectChange} defaultValue={props.match.path}>
                {
                    props.data.map((item, index) => {
                        return (
                            <FormattedMessage id={item.id} defaultMessage={item.title} key={index}>
                                {(title) => {
                                    return (
                                        <optgroup label={title}>
                                            {
                                                item.links.map((subItem, subIndex) => {
                                                    return (
                                                        <FormattedMessage id={subItem.id} defaultMessage={subItem.title} key={subIndex}>
                                                            {(message) => <option value={subItem.url}>{message}</option>}
                                                        </FormattedMessage>
                                                    )
                                                })
                                            }
                                        </optgroup>
                                    )
                                }}
                            </FormattedMessage>
                        )
                    })
                }
            </select>
            <CaretDown />
        </div>
    )
}