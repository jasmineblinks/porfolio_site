
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
      <div className="contactform">
        <h4>Send A Message</h4>
        <form>
        <input type="text" name="usernme" placeholder="Name" required="name" id="name" />        
        <input type="email" name="usernme" placeholder="Email" required="email" id="username" />
         <input type="text" name="pswrd" placeholder="Subject" required="subject" id="subeject" />
         <textarea class="input" name="message" placeholder="Enter your Message"></textarea>
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
    

      

      `}</style>
    </Layout>
  );
  
  export default Contact;