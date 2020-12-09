import { useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import Sidebar from "./sidebar";
import SidebarData from "../../data/sidebar";

const Detail = props => {

    let [titles, setTitles] = useState(null);

    useEffect(() => {
        SidebarData.forEach(item => {
            item.links.forEach(subItem => {
                if (subItem.url === props.match.path) {
                    setTitles({
                        h2: {
                            id: item.id,
                            title: item.title
                        },
                        h3: {
                            id: subItem.id,
                            title: subItem.title
                        }
                    })
                }
            })
        })
    }, [props.match.path])

    return (
        titles && (
            <section className="detail-section">
                <h1 className="blue large">Supreme Validation</h1>
                <h2 className="small">{<FormattedMessage id={titles.h2.id} defaultMessage={titles.h2.title} />}</h2>
                <Row>
                    <Col md={3}>
                        <Sidebar data={SidebarData} {...props} />
                    </Col>
                    <Col md={{ span: 8, offset: 1 }}>
                        <h3>{<FormattedMessage id={titles.h3.id} defaultMessage={titles.h3.title} />}</h3>
                        {
                            props.children
                        }
                    </Col>
                </Row>
            </section>
        )
    )
}

export default Detail