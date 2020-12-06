import Splash from '../components/home/splash'
import Services from '../components/home/services'
import DevelopmentEnvironments from '../components/home/development-environments'

const Home = props => {
    return (
        <>
            <Splash />
            <Services />
            <DevelopmentEnvironments />
        </>
    )
}

export default Home;