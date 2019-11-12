import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a><img src="/static/jas.png" width="150px" /></a>
    </Link>
  

<style jsx>{`
  @media only screen and (min-width: 335px) and (max-width: 959px){
   img{
   max- width:200px;
   }
}
`}</style>
</div>
);


export default Logo;