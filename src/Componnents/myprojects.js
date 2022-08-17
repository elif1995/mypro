import './myprojects.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import superKidsImg from '../images/superKids.png'

function Myprojects (){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
        <div id='myprojects' className="OutP">
            <div className="OutT">
                
            <h1 className="titleH">My Project's</h1>
            
            <div className="myprojects">
            
{/*            
            <a  href="https://superkids.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Socialwork web</h4 ><img className="proj-1" src={require("../images/superKids.png")} ></img></a>
            <a  href="https://react-material-table-zet.netlify.app/" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>React Table</h4 ><img className="proj-1" src={require("../images/reacttable.png")}   ></img></a>
            <a  href="https://yulia-frenkin.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Landing Page</h4 ><img className="proj-1"  src={require("../images/yulia_frenkin.png")}   ></img></a>
            <a  href="https://smile2me.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Clinic Site</h4 ><img className="proj-1" src={require("../images/smile2me.png")}   ></img></a>
            <a  href="https://eli-crypto-app.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Crypto App</h4 ><img className="proj-1" src={require("../images/cryptoApp.png")}   ></img></a>
            <a  href="https://papaya-dasik-4025ec.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Ecommerce</h4 ><img className="proj-1" src={require("../images/Ecommerce.png")}   ></img></a>
             */}
            <Carousel  indicators={false} controls={false} className='w-100'  activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    
                    <div className="carousel-proj">
                        <img src={superKidsImg}/>
                        <h4><a  href="https://superkids.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>superkids</h1></a>i've built a website for a startup company in the fields of social work, 
                            this website was built using "React" and "antd".
                        </h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            
            </div>
            
        </div>
    );
}

export default Myprojects;