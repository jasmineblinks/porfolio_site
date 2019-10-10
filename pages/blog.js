
import Layout from '../components/layout';
const Blog = () => (
  <Layout title="Blog">
        
      <h1>Blog page</h1>

      <style jsx>{`
    *{
      margin : 0px;
       padding: 0px;
    }
     .about-head{
       text-align: center;
      margin:auto;
       font-family:BlinkMacSystemFont;
      background: linear-gradient(
        rgba(232, 104, 93, 0.45),
        rgba(232, 104, 93, 0.45) 
      
      ), url("/static/lap.jpg");
      height:100px;
      color:#fff;
      

     }
     `}</style>
    </Layout>
    
  );
  
  export default Blog;