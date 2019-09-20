import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a><img src="/static/jas.png" width="150px" /></a>
    </Link>
  </div>
);

export default Logo;