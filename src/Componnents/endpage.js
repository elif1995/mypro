
import './Endpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faArrowsAltV, faEnvelope, faGlasses, faImage, faPhone, faSearch, faUserCheck } from '@fortawesome/free-solid-svg-icons';

import profileImg from '../images/FB_IMG_1640389530854.jpg'

function Endpage () {
    

    return(
        <div id='contact' className="endpage">
            <div className="profile">
                <div className="profileP">
                   <img src={profileImg} /> 
                </div>
                
                <div className="profileT">
                    


                    <h3><FontAwesomeIcon  icon={faUserCheck} size="sm"></FontAwesomeIcon> Eli Frenkin</h3>
                    <p><FontAwesomeIcon  icon={faEnvelope} size="sm"></FontAwesomeIcon> email: e21211995@gmail.com</p>
                    <p><FontAwesomeIcon  icon={faPhone} size="sm"></FontAwesomeIcon> phone: 0545356112</p>
                    <div className="down">

                    <h5>Download My Resume</h5>
                    <a className="down" target="_blank" href={require('../images/new_resume.pdf')} download>
                    <button class="buttonCV" role="button"><FontAwesomeIcon  icon={faArrowDown} size="sm"></FontAwesomeIcon></button>
                    </a>
                    </div>
                   

                    <div>
                    
                    </div>
                </div>
            </div>
            <h4 style={{fontFamily:'Courier New',color: 'white', textAlign: 'center', boxShadow:' 0px -4px 0px rgb(134, 22, 22)',paddingTop:'10px'}}>you can find me here</h4>
            
            <div className="endofpage">
            
                <div className='boxI-1' ><a href="https://www.facebook.com/eli.frenkin.5" target="_blank"><FontAwesomeIcon  icon={faFacebook } size="sm" color="#3b5998"></FontAwesomeIcon></a></div>
                
                <div className='boxI-2'><a href="https://www.linkedin.com/in/eli-frenkin-6a75b4215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5SHBhxxkRqiPKaYnum7Zug%3D%3D" target="_blank"><FontAwesomeIcon  icon={faLinkedin} size="sm" color="#0e76a8"></FontAwesomeIcon></a></div>
                <div className='boxI-3'><a href="https://wa.me/972545356112" target="_blank"><FontAwesomeIcon  icon={faWhatsapp} size="sm" color="#075E54"></FontAwesomeIcon></a></div>
                
            </div>

        </div>
        
    );
}

export default Endpage;