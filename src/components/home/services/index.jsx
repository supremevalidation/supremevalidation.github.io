import { Row, Col } from 'react-bootstrap'
import ServicesItem from './item'

const Services = props => {
    return (
        <div className="services-section">
            <Row>
                <Col md={4}>
                    <ServicesItem />
                </Col>
            </Row>
        </div>
    )
}

export default Services;