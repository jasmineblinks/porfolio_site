import React from 'react';
import Link from 'next/link';


const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/About">
        <a>About Us</a>
      </Link>
    </li>
    <li>
      <Link href="/Contact">
        <a>Contact Us</a>
      </Link>
    </li>
    <li>
      <Link href="/Blog">
        <a>Blog</a>
      </Link>
    </li>
  </ul>
);

export default Menu;