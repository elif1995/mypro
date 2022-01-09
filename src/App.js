import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Texttitle from './Componnents/texttitle';
import Particals from './Componnents/particals';
import Skills from './Componnents/skills';
import MyProjects from './Componnents/myprojects';
import EndPage from './Componnents/endpage'

function App() {
  
  return (
    <div className="App">
      
      <br/>
      
      <Navbar   bg='' variant='dark' sticky="" expand="lg" collapseOnSelect >
      
        <Navbar.Brand >
          Eli Frenkin
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        >
          <Nav.Link href='#Home' style={{color:'red'}}>Home</Nav.Link>
          <Nav.Link href='#Contact'>Contact</Nav.Link>
          <Nav.Link href='#Resume'>resume</Nav.Link>
        </Nav >
        
        </Navbar.Collapse>
        
      </Navbar>
       
        <Particals/>
        
        <Texttitle />
        <Skills/>
        
        <MyProjects/>
        <EndPage/>
        
        
        
        
      
      </div>
      
      
      



    
  );
}

export default App;
