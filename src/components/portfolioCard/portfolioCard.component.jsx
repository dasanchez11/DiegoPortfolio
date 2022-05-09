import './portfolioCard.styles.css'
import {SiRedux, SiFirebase,SiFlask,SiReact,SiPython,SiPostgresql,SiReactrouter,SiNodedotjs,SiMongodb, SiTensorflow} from 'react-icons/si';
import SiSklearn from '../iconComponent/SiSklearn';
import SiPandas from '../iconComponent/SiPandas';

import { useHistory } from 'react-router';

const PortFolioCard = ({cardData}) => {
   const {title,shortDescription,resources,gitHubLink,liveLink,tags,machineLearningId,image} = cardData
   const history = useHistory();
   const components = {
    redux:SiRedux,
    firebase: SiFirebase,
    routerDom: SiReactrouter,
    react: SiReact,
    node: SiNodedotjs,
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

    return (
        <article className="portfolio__item" style={{backgroundImage: `url(${image})`}} >
            {/* <div className="portfolio__item-image">
                <img src={image}/>
            </div> */}
            <div className='portfolio__opacity'>
                <h3>{title}</h3>
                <h5>{shortDescription}</h5>
                <div className='card__content__technologies'>
                    {resources.map((resource,idx) => {
                        const CompName = components[`${resource}`]
                        if (typeof CompName === 'undefined') {
                            return <div key={idx}/>
                        }
                        return <CompName key={idx} className='card__content__technologies-item' size={40}/>

                        
                    })}

                </div>
                <div className="portfolio__item-cta">
                    <div className="btn" target="_blank" rel="noreferrer" onClick={gitHubClick} >GitHub</div>
                    {liveLink !== '' ? 
                    (
                        <div className="btn btn-primary" target="_blank" rel="noreferrer"  onClick={liveLinkClick} >Live Demo</div>
                    ): ('')}
                </div>
            </div>
      </article>
      );
}
 
export default PortFolioCard;