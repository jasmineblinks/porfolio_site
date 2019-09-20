import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a><img src="/static/logo.png" width="150px" /></a>
    </Link>
  </div>
);

export default Logo;