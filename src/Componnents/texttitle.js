import './texttitle.css'
import Typewriter from 'typewriter-effect';

const HandleTextTitle = (typewriter) => {
    
    for (let i = 0; i < 20; i++){
    typewriter.start()
    .pauseFor(500)
    .typeString("Hello My name is Eli Frenkin")
    .pauseFor(1500)
    .deleteAll()
    .typeString("I'm a frontend developer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("I'm a SQL developer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("I'm a web designer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("And a python developer")
    .deleteAll()
    .typeString("This is my protfolio!")
    }
}

function texttitle(){
    return(
        <div className="texttitle">
            
            <Typewriter 
            
            onInit={(typewriter) => 
                {HandleTextTitle(typewriter)}}
            
            />
        </div>
        
    );
}

export default texttitle;