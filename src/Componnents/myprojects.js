import './myprojects.css'


function myprojects (){

    return(
        <div id='myprojects' className="OutP">
            <div className="OutT">
            <h1 className="titleH">My Project's</h1>
            <div className="myprojects">
            
            
            <a  href="https://superkids.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Socialwork web</h4 ><img className="proj-1" src={require("../images/superKids.png")} ></img></a>
            <a  href="https://react-material-table-zet.netlify.app/" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>React Table</h4 ><img className="proj-1" src={require("../images/reacttable.png")}   ></img></a>
            <a  href="https://yulia-frenkin.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Landing Page</h4 ><img className="proj-1"  src={require("../images/yulia_frenkin.png")}   ></img></a>
            <a  href="https://smile2me.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Clinic Site</h4 ><img className="proj-1" src={require("../images/smile2me.png")}   ></img></a>
            <a  href="https://eli-crypto-app.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Crypto App</h4 ><img className="proj-1" src={require("../images/cryptoApp.png")}   ></img></a>
            <a  href="https://papaya-dasik-4025ec.netlify.app" target="_blank" ><h4 style={{textAlign: "center", color: "black"}}>Ecommerce</h4 ><img className="proj-1" src={require("../images/Ecommerce.png")}   ></img></a>


            </div>
            </div>
        </div>
    );
}

export default myprojects;