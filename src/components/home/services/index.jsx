import { Row, Col } from 'react-bootstrap'
import ServicesItem from './item'

const Services = props => {
    return (
        <div className="services-section">
            <Row>
                <Col md={4}>
                    <ServicesItem icon="rocket" color="sunglo" title="As fast as a Ferrari" detail="High performance and quality code." />
                </Col>
                <Col md={4}>
                    <ServicesItem icon="cogs" color="portage" title="Simple to use" detail="Easy to use and understandable options." />
                </Col>
                <Col md={4}>
                    <ServicesItem icon="brush" color="tanhide" title="UI/UX" detail="User friendly interface." />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ServicesItem icon="open-source" color="periwinkle" title="Open source" detail="You can review my code and support me." />
                </Col>
                <Col md={4}>
                    <ServicesItem icon="book" color="algaegreen" title="Documentation" detail="Descriptive and easy to read documentation." />
                </Col>
                <Col md={4}>
                    <ServicesItem icon="design" color="chenin" title="Design" detail="You can use our own form theme if you wish." />
                </Col>
            </Row>
        </div>
    )
}

export default Services;