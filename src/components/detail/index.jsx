import { Row, Col } from 'react-bootstrap'
import Sidebar from './sidebar'
import SidebarData from '../../data/sidebar'

const Detail = props => {

    const getTitles = () => {
        let title = "";
        let subTitle = "";

        SidebarData.forEach(item => {
            item.links.forEach(subItem => {
                if (subItem.url === props.match.path) {
                    title = item.title;
                    subTitle = subItem.title;
                }
            })
        })

        return {
            title: title,
            subTitle: subTitle
        }
    }

    return (
        <section className="detail-section">
            <h1 className="blue large">Supreme Validation</h1>
            <h2 className="small">{getTitles().title}</h2>
            <Row>
                <Col md={4}>
                    <Sidebar data={SidebarData} {...props} />
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <h3>{getTitles().subTitle}</h3>
                    {
                        props.children
                    }
                </Col>
            </Row>
        </section>
    )
}

export default Detail