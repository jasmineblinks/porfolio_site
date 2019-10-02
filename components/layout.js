import Header from '../components/header';
import Footer from '../components/footer';

const Layout = props => (
  <div className="site-wrapper">
    <Header />

    <div className="cover">{props.children}</div>
    
    
    

    <Footer />
    
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        
        color: #E8685D;
        font-family:  BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #E8685D;
        text-decoration: none;
      }

      a:hover {
        color: #3549e2;
      }

      // h1,
      // h2,
      // h3 {
      //   margin: 40px 0 30px;
      // }

      // h1 {
      //   font-size: 42px;
      // }

      // h2 {
      //   font-size: 36px;
      // }

      // p {
      //   margin: 0 0 10px;
      // }

      img {
        max-width: 100%;
      }

      /* Layout */

      .cover {
        /* The image used */
        background: linear-gradient(
          rgba(232, 104, 93, 0.45),
          rgba(232, 104, 93, 0.45) 
        
        ), url("/static/cu.jpeg");
  
       
        
      
        /* Set a specific height */
        min-height: 500px; 
      
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
        
       

      }
      .tex{
        font-size:30px;
        font-family:BlinkMacSystemFont;
      }
      .text{
        color:#fff;
        text-align:left;
        padding-top:20px;
        margin-left:30px;
        font-size:30px;
        line-height:20px; 
        
      }

      .text h1{
        line-height:45px;
      }


      .text button{
        color:#E8685D;
        background-color:#fff;
        padding:10px;
        border-radius:50px;
        width:150px
      }

      // .text button:hover{
      //   color:#fff;
      //   background-color:transparent;
      //   padding:10px;
      //   border:1px solid #fff;
      //   border-radius:50px;
      //   width:150px
      // }

     
       .my_link{
        display:flex;
        list-style:none; 
        margin-left:-9px;
        color:#fff;
                    
      }

       .my_link li{
        margin:5px;
        

      }
      .text h2{
        font-size:20px;
        font-family:Fira Sans;
        
      }
      .works{
        width:100%;
        min-height:200px;
        background-color:#fff;

      }

    `}</style>
  </div>
);

export default Layout;