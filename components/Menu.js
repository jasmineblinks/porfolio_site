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
    <style jsx>{`
    .menu {
      margin: 5px;
      padding: 0;
      list-style: none;
      display: flex;
    }
    .menu li a {
      font-size: 25px;
      color: #3549e2;
      font-weight: 500;
      padding: 5px 2px;
      margin: 0 10px;
      text-decoration: none;
    }
    .menu li a:hover {
      padding-bottom: 3px;
      border-bottom: 2px solid #3549e2;
    }
    @media (max-width: 360px) {
      .menu {
        display: block;
        margin-top: 20px;
      }
      .menu li {
        display: inline-block;
      }
      .menu li a {
        font-size: 18px;
      }
    }
    `}</style>
  </ul>
);

export default Menu;