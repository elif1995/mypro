import './myprojects.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import superKidsImg from '../images/superKids.png';
import reactTable from '../images/reacttable.png';
import landingPage from '../images/yulia_frenkin.png';
import ClinicSite from '../images/smile2me.png'
import CryptoWeb from '../images/cryptoApp.png';
import EcommerceWeb from '../images/Ecommerce.png'

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
                    
                    <div className="carousel-proj">
                        <img src={reactTable}/>
                        <h4><a  href="https://react-material-table-zet.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>React Table</h1></a>a table built with "material-table" with CRUD options.
                        </h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <div className="carousel-proj">
                        <img src={landingPage}/>
                        <h4><a  href="https://yulia-frenkin.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>Landing Page</h1></a>landing page built for a estetic clinic using "React".
                        </h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <div className="carousel-proj">
                        <img src={ClinicSite}/>
                        <h4><a  href="https://smile2me.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>Clinic Site</h1></a>Clinic Site built for a dental clinic using "React".
                        </h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <div className="carousel-proj">
                        <img src={CryptoWeb}/>
                        <h4><a  href="https://eli-crypto-app.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>Crypto App</h1></a>a crypto web app showing cryptocurrencies and news reports, built by "React" and "Redux" also using RapidApi.
                        </h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <div className="carousel-proj">
                        <img src={EcommerceWeb}/>
                        <h4><a  href="https://papaya-dasik-4025ec.netlify.app" target="_blank" ><h1 style={{color: "darkRed"}}>Ecommerce Web</h1></a>a complex ecommerce web with autentication and paying option built by "React", "Redux", "firebase", "Strip". 
                        </h4>
                    </div>
                </Carousel.Item>
                </Carousel>
            </div>
            
            </div>
            
        </div>
    );
}

export default Myprojects;