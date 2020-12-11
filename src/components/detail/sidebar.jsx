import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import SidebarMobile from "./sidebar-mobile";

const Sidebar = props => (
    <aside>
        <SidebarMobile {...props} data={props.data} />
        {
            props.data.map((item, index) => {
                return (
                    <ul key={index} className="d-none d-sm-none d-md-block">
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

export default Sidebar;