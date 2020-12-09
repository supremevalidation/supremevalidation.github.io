import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <aside>
            <h4>GETTING STARTED</h4>
            <ul>
                <li>
                    <Link to="/installation">Installation</Link>
                </li>
                <li>
                    <Link to="/usage">Usage</Link>
                </li>
            </ul>
            <h4>API</h4>
            <ul>
                <li>
                    <Link to="/options">Options</Link>
                </li>
                <li>
                    <Link to="/classes">Classes</Link>
                </li>
                <li>
                    <Link to="/attributes">Attributes</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
            </ul>
            <h4>SUPPORT</h4>
            <ul>
                <li>
                    <Link to="/browser">Browser</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;