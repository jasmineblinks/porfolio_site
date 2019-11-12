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
       
    }
        
    @media only screen and (min-width: 335px) and (max-width: 959px){
        .header-wrapper{
            background-color:#fff;
            margin-left:20px;
            //  height:65px;
            display:flex;
            text-align:center;
        
            
        }
    }

    `}</style>
</div>
);
export default Header;