import Header from '../components/header';
import Footer from '../components/footer';

const Layout = props => (
  <div className="site-wrapper">
    <Header />

    <div className="content-wrapper">{props.children}</div>

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
        background: #fff;
        color: #3549e2;
        font-family:  BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #3549e2;
        text-decoration: none;
      }

      a:hover {
        color: #166281;
      }

      h1,
      h2,
      h3 {
        margin: 40px 0 30px;
      }

      h1 {
        font-size: 42px;
      }

      h2 {
        font-size: 36px;
      }

      p {
        margin: 0 0 10px;
      }

      img {
        max-width: 100%;
      }

      /* Layout */

      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;