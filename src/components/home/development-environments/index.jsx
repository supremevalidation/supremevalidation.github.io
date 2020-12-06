import DevelopmentEnvironmentItem from './item';
import { Row, Col } from 'react-bootstrap'

const DevelopmentEnvironments = props => {
    return (
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <div className="development-environments-section">
                    <DevelopmentEnvironmentItem icon="codacy" color="indigo" title="Codacy" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <DevelopmentEnvironmentItem icon="github" color="aliceblue" title="Github" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <DevelopmentEnvironmentItem icon="npm" color="guardsmanred" title="NPM" detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </div>
            </Col>
        </Row>
    )
}

export default DevelopmentEnvironments