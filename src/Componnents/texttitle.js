import './texttitle.css'
import Typewriter from 'typewriter-effect';



function texttitle(){
    return(
        <div className="texttitle">
            <Typewriter 
            onInit={(typewriter) => 
                {typewriter
                    .pauseFor(1000)
                    .typeString("Hello Im Eli Frenkin")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Im a frontend developer")
                    
                    .start();}}
            
            />
        </div>
        
    );
}

export default texttitle;