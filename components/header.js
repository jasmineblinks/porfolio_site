import Logo from '../components/logo';
import Menu from '../components/Menu';


const Header = () => (
<div className="header-wrapper">
    <Logo/>
    <Menu/>
    <style jsx>{`
    .header-wrapper{
        background-color:#fff;
        // padding:5px;
        height:65px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        // text-align:center;
        
    }
        
        @media (max-width: 360px) {
            .header-wrapper {
              display: block;
              text-align: center;
              height:100px;
            
    }
    `}</style>
</div>
);
export default Header;