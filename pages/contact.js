
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

      <div>
      <div className="contact-text">
      <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    <h6>River State,Nigeria</h6>
    <p>#21 Potts Johnson street</p>
  </div>
        
       
        <FontAwesomeIcon icon={faPhoneAlt} />
        <h6>00 (958) 9865 562</h6>        
        <p>Mon to Fri 9am to 5pm</p>
        <FontAwesomeIcon icon={faEnvelope} />
        <h6>jasmineconcept12@gmail.com</h6>
      
      </div>
      <div>

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

      `}</style>
    </Layout>
  );
  
  export default Contact;