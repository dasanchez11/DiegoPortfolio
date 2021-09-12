import './specific-project.styles.scss';
import {useState,useEffect} from 'react';
import Loader from '../loader/loader.component';
import Button from '../button/button.component';
import AIResult from '../aiResult/aiResult.component'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import ImageInput from './components/imageInput/imageInput.component';
import ParametersInput from './components/parametersInput/parametersInput.component';
import image from '../../images/AiPicture.jpg'


const SProject = () => {
    const [data,setData] = useState({attributes:[]})
    const [name, setName] = useState("")
   

    const location = useLocation()
    const machineLearningId = location.pathname.split("/")[2]
    
    const [isLoading, setLoading] = useState(false)
    const [results, setResults] = useState(false)
    const [responseResults, setResponse] = useState("")
    const [componentToRend, setComponentToRend] = useState("")

    const components = {
        parameters:ParametersInput,
        imageInput:ImageInput
        };


    useEffect(()=>{
        
        const getData = async () =>{
            const fetch = await axios.get(`https://portfolioapidiego.herokuapp.com/aiProject/${machineLearningId}/`);
            // const fetch = await axios.get(`http://localhost:3001/aiProject/${machineLearningId}/`);
            
            setComponentToRend(fetch.data.project.tag)
            setData(fetch.data.project);
        };
        getData();
        
    },[machineLearningId])  


    const handleClick = async  ()  => {
        setResults(false)
        setLoading(true)
        let fetch_results = ""
        try {
            
            fetch_results = await axios.post(` https://machinelearningpred.herokuapp.com/predict_${data.dir}`, {
                data: JSON.stringify(name)
            })
            
            setResponse(fetch_results.data.prediction)
        } catch (error) {
            console.log(error)
            fetch_results = 'error'
        }
        
        setLoading(false)
        setResults(true)
    }


    const outsideClick = (e) => {
        if (results === true) {
            if (e.target.className.substring(0,8) !== 'aiResult') {
                setResults(false)
                
            }
        } 
       
    }


    const CompName = components[`${componentToRend}`]

    return (
        <div className='specific-project' onClick={outsideClick} >
            <h1 className='specific-project__title'>
                {data.title}
                </h1>
            <div className='overview'>
                <div className='overview__info'>
                    < h2 className='overview__description-name'>Description</h2>
                    < p className='overview__description-content'>
                        {data.description}
                    </p>
                </div>
                <img src={image} alt='' className='overview__image'/>
            </div>
                    <fieldset className="parametersField">
                        <legend className=''>Parameters</legend>
                        { 

                        (isLoading || componentToRend==="") ? <Loader /> : (     
                                 <form className='specific-project__params'>
                                     <CompName data={data} setName={setName} name={name}/> 
                                </form>
                            )
                        } 
                        {results ? <AIResult response={responseResults} results={results}/> : "" }
                    </fieldset>
                    <Button onClick={handleClick} />
        </div>
    )
}

export default SProject;