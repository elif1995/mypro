import React, {useState, useEffect} from 'react'
import "./Modal.css";


function Modal ({closeModal}) {
    
    return(
        <div  className = 'modalBackground'> 
                
                    <form  >  
                <div className = 'modalContainer'>
                    
                      <div className="titleCloseBtn"> 
                        <button onClick = {() => closeModal(false)}>X</button>
                      </div>
                   
                        
                    <div className= 'body'>
                        
                        <img src="" height="500" width="500" ></img>
                        
                    </div>
                    <div className= 'footer'></div>
                        
                        <button onClick = {() => closeModal(false)} id="cancelBtn">Exit</button>

                </div>
                    </form>    
                
           </div>
    );
}

export default Modal
