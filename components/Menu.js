import React from "react";
import Link from "next/link";

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about-page">
        <a>About </a>
      </Link>
    </li>
    <li>
      <Link href="/contact">
        <a>Contact </a>
      </Link>
    </li>
    <li>
      <Link href="/blog-page">
        <a>Blog</a>
      </Link>
    </li>
    <style jsx>{`
      .menu {
        margin: 5px;

        list-style: none;
        display: flex;
      }
      .menu li a {
        font-size: 15px;
        color: #e8685d;
        font-weight: 500;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #e8685d;
      }
      // @media (max-width: 360px) {
      //   .menu {
      //     display: block;
      //     margin-top: 20px;
      //   }
      //   .menu li {
      //     display: inline-block;
      //   }
      //   .menu li a {
      //     font-size: 18px;
      //   }
      // }

      //   @media only screen and (min-width: 335px) and (max-width: 959px){

      //     .menu {
      //        margin-right:10px;

      //     }
      // }
    `}</style>
  </ul>
);

export default Menu;
