const Footer = () => (
    <div className="footer-wrapper">
      <div className="copyright">© {new Date().getFullYear()} Faith Pueneh.</div>
      <style jsx>{`
      .footer-wrapper {
        text-align: center;
        background-color:#E8685D;
        color:#fff;
        margin-top: 80px;
        padding: 25px 20px;
        
        
      }
      .copyright {
        margin-bottom: 20px;
        text-align: center;
        
      }
      `}</style>
    </div>
  );
  
  export default Footer;