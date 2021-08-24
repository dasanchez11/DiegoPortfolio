
import { useEffect } from 'react';

const SpecificDataPrediction = ({data, setName,name}) => {

    useEffect(()=>{
        for (let index = 0; index < data.attributes.length; index++) {

            setName(state=>({...state,[data.attributes[index]]:data.mean_values[index]}))
            
        }
    },[data,setName])

    const onInputChange = (e) =>{
        e.preventDefault();
        setName(state => ({...state,[e.target.name]:e.target.value}))
    }

    

    return ( <>
                {data.attributes.map((parameter,idx) => {
                                        
                                        return(
                                            <div className="parameter" key={idx}>
                                                    <div className="parameter__desc">
                                                        <div className="parameter__desc-title">{parameter.toUpperCase()}</div>    
                                                        <input type='field' onChange={onInputChange} name={`${parameter}`} className='parameter__desc-input' placeholder={name[parameter]}></input>
                                                    </div>
                                                    <p className='parameter__text'>{data.attributes_info[idx]}</p>
                                            </div>
                                        )
                                        
                                        
                })}
        </>
    )
}

export default SpecificDataPrediction;