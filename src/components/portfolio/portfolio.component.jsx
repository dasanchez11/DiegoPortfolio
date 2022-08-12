import React, { useState, useEffect } from "react";
import axios from 'axios'
import './portfolio.styles.css';
import PortFolioCard from "../portfolioCard/portfolioCard.component";
import Loader from "../loader/loader.component";

const Portfolio = () => {
    const [activeProject, setActiveProject] = useState([])
    const [projectLoading, setProjectLoading] = useState(false)
    const [fetchData, setFetchData] = useState([])


    useEffect(() => {
        const startProject = async () => {
            setProjectLoading(true)
            try {
                const data = await axios.get('https://portfolioapidiego.herokuapp.com/devProject/getDevProjects/')
                // const data = await axios.get('http://localhost:3001/devProject/getDevProjects/')
                setFetchData(data.data.project)
                setActiveProject({ 'active': 'all' })
                setProjectLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        startProject();
    }, [setProjectLoading, setFetchData, setActiveProject])


    const resetProjectSelection = () => {
        setActiveProject({
            'active': ''
        })
    }

    const handleProjectClick = (e) => {
        e.preventDefault()
        resetProjectSelection()
        setActiveProject({ 'active': e.target.getAttribute('name') })
    }


    return (
        <section id='portfolio' className="portfolio">
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>

            <ul className='portfolio__categoryContainer'>
                <li className={`portfolio__categoryContainer-item ${activeProject['active'] === 'webDevelopment' ? 'active' : ''}`} name='webDevelopment' onClick={handleProjectClick} >Web Development</li>
                <li className={`portfolio__categoryContainer-item ${activeProject['active'] === 'machineLearning' ? 'active' : ''}`} name='machineLearning' onClick={handleProjectClick} >Machine Learning</li>
                <li className={`portfolio__categoryContainer-item ${activeProject['active'] === 'backEnd' ? 'active' : ''}`} name='backEnd' onClick={handleProjectClick} >BackEnd</li>
                <li className={`portfolio__categoryContainer-item ${activeProject['active'] === 'python' ? 'active' : ''}`} name='python' onClick={handleProjectClick} >Python</li>
                <li className={`portfolio__categoryContainer-item ${activeProject['active'] === 'all' ? 'active' : ''}`} name='all' onClick={handleProjectClick} >All</li>

            </ul>


            {projectLoading ? (<Loader />) : (

                <div className="container portfolio__container">

                    {
                        fetchData.filter(data => {
                            if (activeProject['active'] === 'all') {
                                return !data.tags.includes('')
                            }
                            return data.tags.includes(activeProject['active'])
                        }
                        ).map((data, idx) => {
                            return (
                                <div key={idx}>
                                    {/* <Card  cardData={data} />  */}
                                    <PortFolioCard cardData={data} />
                                </div>
                            )
                        })}
                </div>)}

        </section>
    );

}

export default Portfolio;
