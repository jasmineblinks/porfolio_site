
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
      <h6><FontAwesomeIcon icon={faMapMarkerAlt} />
River State,Nigeria</h6>
    <p>#21 Potts Johnson street</p>
   </div>
        
        <div className="info_item">
       
        <h6><FontAwesomeIcon icon={faPhoneAlt} />
        00 (958) 9865 562</h6>        
        <p>Mon to Fri 9am to 5pm</p>
        </div>
        <div className="info_item">
        <h6><FontAwesomeIcon icon={faEnvelope} />
        jasmineconcept12@gmail.com</h6>
        </div>
      
      </div>
      <div >
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
      height:100px;
      color:#fff;
      }
      .contact-text{
        color:#000;
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
      }
      .info_item{
        margin-left:50px;
      }

       {
        background-color:#E8685D;
      }
    

     
    
    
    
    .contactform input{
        margin: 10px;
        padding: 8px;
    
    }
    
    .contactform input{
        border-radius: 8px;
        border: solid 1px #000;
        width: 50%;

    }
         
    .area-input{
      
      border: solid 1px #000;
      width: 50%;

  }
    .contactform button{
        padding:10px;
        border-radius:50px;
        border:1px solid #E8685D;
        width:150px;
        background-color:#E8685D;
        color:#fff;
       
    }
    
    // .contactform label{
    //     margin: 10px 2px 10px -15px;
    //     padding: 8px;
    // } 
      .contact-info{
        display:flex;
        justify-content:space between;
      }
      h4{
        color:#000;
      }

      `}</style>
    </Layout>
  );
  
  export default Contact;