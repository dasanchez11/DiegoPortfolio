import Header from '../components/header/header.component';
import About from '../components/about/about.component';
import Portfolio from '../components/portfolio/portfolio.component';





const Home = () => {
    return(
        <div className='homePage'>
            <Header/>
            <About/>
            <Portfolio/>
            
        </div>
    )
}

export default Home;