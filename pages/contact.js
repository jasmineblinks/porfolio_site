

import Layout from '../components/layout';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact= () => (
    <Layout title="contact">
      
      <div className="contact-head">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-info">
      <div className="contact-text">
      <div className="info_item">
      <h6> <span className="font"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
River State,Nigeria</h6>
    <p>#21 Potts Johnson street</p>
   </div>

        <div className="info_item">

        <h6>  <span className="font"><FontAwesomeIcon icon={faPhoneAlt} /></span>  
        00 (958) 9865 562</h6>        
        <p>Mon to Fri 9am to 5pm</p>
        </div>
        <div className="info_item">
        <h6> <span className="font"> <FontAwesomeIcon icon={faEnvelope} /></span> 
        jasmineconcept12@gmail.com</h6>
        </div>

      </div>
      <div className="form-text" >
        <h4>Send A Message</h4>
        <form className="contactform">
        <input type="text" name="name" placeholder="Name" required="name" id="name" />        
        <input type="email" name="email" placeholder="Email" required="email" id="username" />
        <input type="text" name="subject" placeholder="Subject" required="subject" id="subeject" />
         <textarea className="area-input" name="message" placeholder="Enter your Message"></textarea>
								<button >Send Message</button>
        </form>
      </div>
      </div>
    


      <style jsx>{`
      *{
        padding:0;
        margin:0;
      }
      
      .contact-head{
        text-align: center;
      margin:auto;
       font-family:BlinkMacSystemFont;
      background: linear-gradient(
        rgba(232, 104, 93, 0.45),
        rgba(232, 104, 93, 0.45) 
      
      ), 
      url("/static/lap.jpg");
      background-repeat:no-repeat;
      height:100px;
      color:#fff;
      }
      .contact-text{
        color:#000;
        line-height:30px;
        
      }
      .contact-text h6{
        font-weight:bold;
        font-family:Fira Sans;
      }
      .contact-text p{
        font-size:12px;
        font-family:Fira Sans;
      }
      .contact-info{
        padding-top:40px;     
          display:flex;
          padding-left:100px;
          min-height: calc(100vh - 40px);
        
      }
      .info_item{
        margin-left:50px;
      }
      .form-text{
        
      }
      .form-text{
        padding-left:250px;
      }
       
    .icon{
    
       color:#E8685D;
    }
      
      
    
    
   
    
    .contactform input{
          margin: 10px;
          padding: 8px;    
          border-radius: 8px;
          border: solid 1px #000;
          display:block;
            width: 150%;
     }
     .area-input{
      margin: 10px;
      padding: 30px;    
      border-radius: 8px;
      border: solid 1px #000;
      display:block;
      width: 150%;
      
     }   
  
    .contactform button{
        padding:10px;
        border-radius:50px;
        border:1px solid #E8685D;
        width:150px;
        background-color:#E8685D;
        color:#fff;
       
    }
    .font{
      margin:5px;
      color:#E8685D;
    }
    .info_item p{
      margin-left:20px;
    }
    
      
      h4{
        color:#000;
      }
      `}</style>
    </Layout>
    
  );

  export default Contact;