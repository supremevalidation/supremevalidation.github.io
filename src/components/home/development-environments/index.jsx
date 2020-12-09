import DevelopmentEnvironmentItem from "./item";
import { FormattedMessage } from "react-intl";
import { Row, Col } from "react-bootstrap"

const DevelopmentEnvironments = props => {
    return (
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
                <div className="development-environments-section">
                    <DevelopmentEnvironmentItem
                        icon="codacy"
                        color="indigo"
                        title="Codacy"
                        detail={<FormattedMessage id="home.environments.codacy.detail" defaultMessage="As fast as a Ferrari" />}
                    />
                    <DevelopmentEnvironmentItem
                        icon="github"
                        color="aliceblue"
                        title="Github"
                        detail={<FormattedMessage id="home.environments.github.detail" defaultMessage="As fast as a Ferrari" />}
                    />
                    <DevelopmentEnvironmentItem
                        icon="npm"
                        color="guardsmanred"
                        title="NPM"
                        detail={<FormattedMessage id="home.environments.npm.detail" defaultMessage="As fast as a Ferrari" />}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default DevelopmentEnvironments