import { Link } from 'react-router-dom'
import MenuData from '../../data/sidebar'

const Sidebar = props => {
    return (
        <aside>
            {
                MenuData.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li><h4>{item.title}</h4></li>
                            {
                                item.links.map((subItem, subIndex) => {
                                    return (
                                        <li key={subIndex}>
                                            <Link to={subItem.url}>{subItem.title}</Link>
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