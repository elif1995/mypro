 import './skills.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
 import {faHtml5, faGithub, faJs, faPython, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons'

 function skills (){
    
     return(
         <div className="skillsOut">
             
            <div className="skills">
            <h1 className="titleH">My Skills</h1>
            <div className="skillsIcons">
                <div className='box-1'><FontAwesomeIcon  icon={faGithub } size="2x"></FontAwesomeIcon></div>
                <div className='box-2'><FontAwesomeIcon  icon={faHtml5} size="2x"></FontAwesomeIcon></div>
                <div className='box-3'><FontAwesomeIcon  icon={faJs} size="2x"></FontAwesomeIcon></div>
                <div className='box-4'><FontAwesomeIcon  icon={faPython} size="2x"></FontAwesomeIcon></div>
                <div className='box-5'><FontAwesomeIcon  icon={faReact} size="2x"></FontAwesomeIcon></div>
                <div className='box-6'> <FontAwesomeIcon  icon={faCss3} size="2x"></FontAwesomeIcon></div>
            

            </div>
            <h4 className="titleH">Loading More...</h4>
            </div>
            
        </div>
     );
 }

 export default skills;