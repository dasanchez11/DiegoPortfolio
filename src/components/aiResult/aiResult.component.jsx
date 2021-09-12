import './aiResult.styles.scss';
import React, {useState, useEffect} from 'react';



const AIResult = ({response,results}) => {
    const[load,setLoad] = useState(!results)

    useEffect(()=> {
        setTimeout(() => {
        setLoad(state => !state)
          }, 100)

        // setLoad(results)

    },[setLoad])


    return (
        <div className={`aiResult ${load ? "aiResult__active" : ""}` }>
            <h3 className='aiResult__title'>Artificial Intelligence Result:</h3>
            <div className='aiResult__prediction'>{response.split(';').map((res,idx) =>{
                return(<p key={idx} className='aiResult__prediction'>{res}</p>)
            })} </div>
            
        </div>
    )
};

export default AIResult;