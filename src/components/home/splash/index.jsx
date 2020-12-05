import Background from './background';
import { FormattedMessage } from 'react-intl'

const Splash = props => {
    return (
        <section className="splash-section">
            <Background />
            <article>
                <h1 className="blue"><FormattedMessage id='home.splash.h1' defaultMessage="Supreme Validation" /></h1>
                <h2><FormattedMessage id='home.splash.h2' defaultMessage="Form validation solution for any developer." /></h2>
                <p><FormattedMessage id='home.splash.p' defaultMessage="Simple to use, good features and user-friendly interface." /></p>
            </article>
        </section>
    )
}

export default Splash;