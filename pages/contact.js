
import Layout from '../components/layout';
const Contact= () => (
    <Layout title="contact">
      <div className="contact-head">
        <h1>Get In Touch</h1>
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

      `}</style>
    </Layout>
  );
  
  export default Contact;