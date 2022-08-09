import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Texttitle from './Componnents/texttitle';
import Particals from './Componnents/particals';
import Skills from './Componnents/skills';
import MyProjects from './Componnents/myprojects';
import EndPage from './Componnents/endpage'
import Form from './Componnents/form'
import React,{useState,useEffect} from 'react';
import Modal from './Componnents/Modal.js';
import Aos from 'aos';
import "aos/dist/aos.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [openModal,setOpenModal] = useState(false);
  useEffect(()=>{
    Aos.init({duration:800});
  },[])


  
  const [isBackgroundBlack, setColor] = useState(false);

  

  return (
    
    <div className="App" id="myBody" style={{backgroundColor: isBackgroundBlack ? 'grey':'black',}}>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <br/>

      <button className="Mood" onClick={() => setColor(true)} style={{backgroundColor: isBackgroundBlack ? 'red':'transparent',}}><FontAwesomeIcon icon={faSun}></FontAwesomeIcon></button>
      <button className="Mood" onClick={() => setColor(false)} style={{backgroundColor: isBackgroundBlack ? 'transparent':'red',}}><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></button>
      
      <Navbar   bg='' variant='dark' sticky="" expand="lg" collapseOnSelect >
      
        <Navbar.Brand style={{fontWeight:"bold"}}>
          <span style={{color:'red'}}>PRO</span>tfolio
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        >
          <Nav.Link href='#Home' style={{color:'red'}}>Home</Nav.Link>
          <Nav.Link href='#skills' style={{color:'white'}}>my skills</Nav.Link>
          <Nav.Link href='#myprojects' style={{color:'white'}}>my projects</Nav.Link>
          <Nav.Link href='#form' style={{color:'white'}}>send message</Nav.Link>
          <Nav.Link href='#contact' style={{color:'white'}}>contact</Nav.Link>
          
          
        </Nav >
        
        </Navbar.Collapse>
        
      </Navbar>
      
       

        <Particals />
       
        
        <Texttitle />
        
        <Skills />

        
        
        <MyProjects />
        
        
        <Form/>
        <EndPage />
        
        
        

        
        
        
        
        
        
        
      
      </div>
      
      
      



    
  );
}

export default App;
