import Header from '../components/header';
import Footer from '../components/footer';

const Layout = props => (
  <div className="site-wrapper">
    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />
  </div>
);

export default Layout;