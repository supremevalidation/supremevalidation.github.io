import { Row, Col } from 'react-bootstrap'
import Sidebar from './sidebar'

const Detail = props => {
    return (
        <section className="detail-section">
            <h1 className="blue large">Supreme Validation</h1>
            <h2 className="small">Getting Started</h2>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={{ span: 7, offset: 1 }}>
                    <h3>Installation</h3>
                    {
                        props.children
                    }
                </Col>
            </Row>
        </section>
    )
}

export default Detail