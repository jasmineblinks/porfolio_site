import Layout from "../components/layout";
import Link from "next/link";

const Blog = () => (
  <Layout title="Blog-page">
    
    <h1>Blog page</h1>
    <div className="card">
      <div>
        <img src="/static/com.jpeg" width="500px" height="200px" />
        <Link href="https://www.facebook.com/pueneh.faithkb">
          <a>My Experience With Zeit</a>
        </Link>
      </div>
      <div>
        <img src="/static/com.jpeg" width="500px" height="200px" />
        <Link href="https://www.facebook.com/pueneh.faithkb">
          <a>How to build static site using Next.js</a>
        </Link>
      </div>
      <div>
        <img src="/static/com.jpeg" width="500px" height="200px" />
        <Link href="https://www.facebook.com/pueneh.faithkb">
          <a>My Experience With Zeit</a>
        </Link>
      </div>
      <div>
        <img src="/static/com.jpeg" width="500px" height="200px" />
        <Link href="https://www.facebook.com/pueneh.faithkb">
          <a>My Experience With Zeit</a>
        </Link>
      </div>
      
      
    </div>
    

    <style jsx>{`
      * {
        margin: 0px;
        padding: 0px;
      }
     
      h1 {
        display: flex;
    justify-content: center;
      align-items: center;
        margin: auto;
        font-family: BlinkMacSystemFont;
        background: linear-gradient(
            rgba(232, 104, 93, 0.60),
            rgba(232, 104, 93, 0.50)
          ),
          url("/static/lap.jpg");
          background-repeat:no repeat;
        height: 100px;
        color: #fff;
      }

      .card {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 100px));
 
// grid-template-columns: repeat(4, 80px);
 
//  grid-auto-rows: auto;
 
//  grid-gap: 20px;
 min-height: calc(100vh - 40px);
        
        
      }

      @media only screen and (min-width: 335px) and (max-width: 959px){
        h1{
          display: flex;
    justify-content: center;
      align-items: center;
        }
        .card {
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          min-height: calc(100vh - 40px);
          justify-content: center;
          align-items: center;

        }
        .card img{
          width:360px;
          height:100px;

        }
     }
    `}</style>
  </Layout>
);

export default Blog;
