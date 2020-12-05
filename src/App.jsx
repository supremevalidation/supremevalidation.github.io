import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux'

import Turkish from "./language/tr.json";
import English from "./language/en.json";

import Header from './components/layout/header'

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

function App() {
    const language = useSelector(state => state.language);

    return (
        <Router>
            <IntlProvider locale={language} messages={language === 'EN' ? English : Turkish}>
                <Header />
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Container>
            </IntlProvider>
        </Router>
    );
}

export default App;