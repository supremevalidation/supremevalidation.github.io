import { Link, useHistory } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const Sidebar = props => {

    let history = useHistory();

    const onSidebarSelectChange = e => history.push(e.target.value)

    return (
        <aside>
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
            {
                props.data.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li><h4>{<FormattedMessage id={item.id} defaultMessage={item.title} />}</h4></li>
                            {
                                item.links.map((subItem, subIndex) => {
                                    return (
                                        <li key={subIndex}>
                                            <Link to={subItem.url} className={props.match.path === subItem.url ? "active" : null}>{<FormattedMessage id={subItem.id} defaultMessage={subItem.title} />}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }
        </aside>
    )
}

export default Sidebar;