import Header from '../components/header/Header.component';
import About from '../components/about/About.component';
import Portfolio from '../components/portfolio/Portfolio.component';





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