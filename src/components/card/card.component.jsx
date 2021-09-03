import React from 'react';
import './card.styles.scss';
import {SiGithub,SiRedux, SiFirebase,SiFlask,SiReact,SiPython,SiPostgresql,SiReactrouter,SiNodeDotJs,SiMongodb, SiTensorflow} from 'react-icons/si';
import SiSklearn from '../iconComponent/SiSklearn';
import SiPandas from '../iconComponent/SiPandas';

import {BsLink} from 'react-icons/bs';
import { useHistory } from 'react-router';


const Card = ({cardData}) =>{
   const {title,shortDescription,resources,gitHubLink,liveLink,tags,machineLearningId,image} = cardData
   const history = useHistory();
   const components = {
    redux:SiRedux,
    firebase: SiFirebase,
    routerDom: SiReactrouter,
    react: SiReact,
    node: SiNodeDotJs,
    flask: SiFlask,
    postgressSQL: SiPostgresql,
    mongoDb: SiMongodb,
    python: SiPython,
    scikitLearn:SiSklearn,
    pandas: SiPandas,
    tensorflow: SiTensorflow
    };
    const gitHubClick = (e) =>{
        e.preventDefault()
        window.open(gitHubLink, '_blank', 'noopener,noreferrer')
    }

    const liveLinkClick = (e) =>{
        e.preventDefault()
        if(tags.includes('machineLearning')){
            history.push(`aiProjects/${liveLink}`,({machineLearningId,tags}))
        }else{
            window.open(liveLink, '_blank', 'noopener,noreferrer')
        }
    }
    

    return(
        <div className='card' style={{backgroundImage: `url(${image})` }}>
                <div className='opacity card__content' >
                    <div className='card__content__title'>
                        <h2>{title}</h2>
                    </div>
                    <div className='card__content__description'>
                        <p>{shortDescription}</p>
                    </div>
                    <div className='card__content__references'>
                        <div className='card__content__references-item' onClick={gitHubClick}>
                            <SiGithub  className='card__content__references-item-logo'/>
                            <p className='card__content__references-item-text'>Code</p>
                        </div>
                        {liveLink !== '' ? <div className='card__content__references-item' onClick={liveLinkClick}><BsLink size={30}/></div> : ''}
                        

                    </div>
                    <div className='card__content__technologies'>
                    {resources.map((resource,idx) => {
                        const CompName = components[`${resource}`]
                        if (typeof CompName === 'undefined') {
                            return <div key={idx}/>
                        }
                        return <CompName key={idx} className='card__content__technologies-item' size={40}/>

                        
                    })}

                    </div>
                </div>
          
        </div>
    )

};

export default Card

