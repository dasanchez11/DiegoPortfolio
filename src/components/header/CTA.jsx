import React from "react";
import CV_esp from '../../assets/CV_esp.pdf';

const CTA = () => {
    return ( 
        <div className="cta">
            <a className="btn" href={CV_esp} download>Download CV</a>
            <a className="btn btn-primary" href="/contact">Contact Me</a>

        </div>
     );
}
 
export default CTA;