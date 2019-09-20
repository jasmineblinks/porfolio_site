import Layout from '../components/layout';
import Link from 'next/link';

const Homepage = () => (
  <layout>
    <Layout/>
    

    <h1>Hi, I am <br/> Faith Pueneh</h1>
    <h2>Front-end Web Developer</h2>
    <button>Know More</button>
    <ul>
      <li>Join me here</li>
      <li><Link href='https://www.facebook.com/pueneh.faithkb'><a><img src="/static/fb.png" width="30px" height="30px" /></a></Link></li>
      <li><Link href='https://github.com/jasmineblinks'><a><img src="/static/git.png" width="30px" height="30px" /></a></Link></li>
      <li><Link href='https://twitter.com/puenehfaith'><a><img src="/static/tw.png" width="30px" height="30px" /></a></Link></li>
    

    </ul>
    
  </layout>
);

export default Homepage;