import {useEffect, useState} from 'react' ;

import './home.styles.scss'
import Loader from '../components/loader/loader.component';
import axios from 'axios'
import Card from '../components/card/card.component';




const Home = () => {
    const [activeProject, setActiveProject] = useState([])
    const [projectLoading, setProjectLoading] = useState(false)
    const [fetchData, setFetchData] = useState([])
    
    
    useEffect(() => {
        const startProject = async () =>{
            setProjectLoading(true)
            try {
                const data = await axios.get('https://portfolioapidiego.herokuapp.com/devProject/getDevProjects/')
                // const data = await axios.get('http://localhost:3001/devProject/getDevProjects/')
                setFetchData(data.data.project)
                setActiveProject({'active': 'all'})
                setProjectLoading(false) 
            } catch (error) {
                console.log(error)
            }
        }
        startProject();
    },[setProjectLoading,setFetchData,setActiveProject])


    const resetProjectSelection = () =>{
        setActiveProject({
        'active': ''})
    }

    const handleProjectClick = (e) =>{
        e.preventDefault()
        resetProjectSelection()
        setActiveProject({'active':e.target.getAttribute('name')})
    }

    

  

    return(
        <div className='homePage'>
            <section  id='header' className='headerSection' style={{ backgroundImage: `linear-gradient(to right bottom, rgba(0, 139, 139, 0.7), rgba(224, 255, 255, 0.7)),url('https://i.ibb.co/R49c3XF/background.jpg')` }}>
                <h1 className='headerSection__name'>
                    Diego Sanchez
                </h1>
                <h2 className='headerSection__description'>
                    Web Development, Full Stack, Data Science, Artificial Intelligence
                </h2>
            </section>
            <section  id='about' className='aboutSection' style={{ backgroundImage: `linear-gradient(to right bottom, rgba(0, 139, 139, 0.7), rgba(224, 255, 255, 0.7))` }}>
                <div className='aboutSection__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime adipisci eum incidunt similique enim numquam assumenda cupiditate commodi voluptatibus?
                </div>
                <div className='aboutSection__skills'>
                    <h3>SKILLS</h3>
                    <div className='aboutSection__skills-list'>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>MongoDB</li>
                        </ul>
                        <ul>
                            <div>
                                Python 
                                <li className='python'>Pandas</li>
                                <li className='python'>Nummpy</li>
                                <li className='python'>Seaborn</li>
                                <li className='python'>Tatplotlib</li>
                                <li className='python'>Tensorflow</li>
                            </div>
                        </ul>
                    </div>


                </div>
            </section>
            <section  id='projects' className='proyectsSection' style={{ backgroundImage: `linear-gradient(to right bottom, rgba(0, 139, 139, 0.7), rgba(224, 255, 255, 0.7))` }}>
                <h3 className='proyectsSection__description'>
                    PROJECTS
                </h3>
                <div className='proyectsSection__categoryContainer'>
                    <ul>
                        <li className={`proyectsSection__categoryContainer-item ${activeProject['active']==='webDevelopment'?'active':''}`} name='webDevelopment' onClick={handleProjectClick} >Web Development</li>
                        <li className={`proyectsSection__categoryContainer-item ${activeProject['active']==='machineLearning'?'active':''}`} name='machineLearning' onClick={handleProjectClick} >Machine Learning</li>
                        <li className={`proyectsSection__categoryContainer-item ${activeProject['active']==='backEnd'?'active':''}`} name='backEnd' onClick={handleProjectClick} >BackEnd</li>
                        <li className={`proyectsSection__categoryContainer-item ${activeProject['active']==='python'?'active':''}`} name='python' onClick={handleProjectClick} >Python</li>
                        <li className={`proyectsSection__categoryContainer-item ${activeProject['active']==='all'?'active':''}`} name='all' onClick={handleProjectClick} >All</li>

                    </ul>
                </div>
                
                <div className={`proyectsSection__projects ${projectLoading? 'loading' : ''}`} >
                    {projectLoading ? 
                     <Loader /> : 
                     <>
                         {
                         fetchData.filter(data => {
                            if (activeProject['active']==='all'){
                                return !data.tags.includes('')
                            }
                            return data.tags.includes(activeProject['active'])}
                        ).map((data,idx) => {
                             return (
                                 <div key={idx}>
                                        <Card  cardData={data} /> 
                                </div>
                             )
                         })}
                     </>
                    }
                </div>

                
              
            </section>
            
        </div>
    )
}

export default Home;