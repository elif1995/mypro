import './endpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function endpage() {
    return(
        <div className="endpage">
            <div className="profile">
                <div className="profileP">
                </div>

                <div className="profileT">
                    <h3>Eli Frenkin</h3>
                    <p>email: e21211995@gmail.com</p>
                    <p>phone: 0545356112</p>
                </div>
            </div>
            <h4 style={{color: 'white', textAlign: 'center'}}>you can find me here</h4>
            <div className="endofpage">
            
                <div className='box-1' ><a href="https://www.facebook.com/eli.frenkin.5"><FontAwesomeIcon  icon={faFacebook } size="sm"></FontAwesomeIcon></a></div>
                
                <div className='box-2'><a href="https://www.linkedin.com/in/eli-frenkin-6a75b4215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5SHBhxxkRqiPKaYnum7Zug%3D%3D"><FontAwesomeIcon  icon={faLinkedin} size="sm"></FontAwesomeIcon></a></div>
                <div className='box-2'><a href="https://wa.me/+972545356112"><FontAwesomeIcon  icon={faWhatsapp} size="sm"></FontAwesomeIcon></a></div>
            </div>

        </div>
        
    );
}

export default endpage;