import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={ErrorPage} />
            </Switch>
        </Router>
    );
}

export default App;