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
      
    </div>
    

    <style jsx>{`
      * {
        margin: 0px;
        padding: 0px;
      }
     
      h1 {
        text-align: center;
        margin: auto;
        font-family: BlinkMacSystemFont;
        background: linear-gradient(
            rgba(232, 104, 93, 0.45),
            rgba(232, 104, 93, 0.45)
          ),
          url("/static/lap.jpg");
          background-repeat:no repeat;
        height: 100px;
        color: #fff;
      }

      .card {
        padding-top: 25px;
        columns: 4;
        
      }
    `}</style>
  </Layout>
);

export default Blog;
