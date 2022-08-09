import './form.css';
import 'bootstrap/dist/css/bootstrap.css'
import emailjs from 'emailjs-com'
import react,{useState} from 'react';


function Form () {
    
    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm("service_525l2ot",
        "template_6m8eauo",
        e.target,
        "user_mCywm2gmcbJZQ0pcCu0JY").then(res=>{
            console.log(reload());
        }).catch(err =>console.log(err))
        ;
    }
    function reload(e){
        window.location.reload()
    }
    
    const[data,setData]= useState(null);
    
    function afterChange (e){
            setData(e.target.value);
    }
    
    

    return(
        
        <div className="form" id='form'>
        
        
        <h1 style={{fontFamily:'CursiveNew'}} className="form-control" id="hello" >Hello <span style={{fontWeight:'bold'}}>{data}</span>  Leave A Message</h1>
        <form style={{margin:"25px 40px 75px 10px"}} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" id="name" name="name" onChange={afterChange} className="form-control" style={{margin:'10px',boxShadow:'1px 1px 20px lightgrey'}}/>

            <label>Email</label>
            <input type="email" name="user_email" className="form-control" style={{margin:'10px',boxShadow:'1px 1px 20px lightgrey'}}/>

            <label>Message</label>
            <textarea name="message" rows='4' className="form-control" style={{margin:'10px',boxShadow:'1px 1px 20px lightgrey'}}/>
            <input type="submit" value="Send" style={{margin:'10px'}} className="btn"  />
        </form>
        </div>    
        
    );
}

export default Form;