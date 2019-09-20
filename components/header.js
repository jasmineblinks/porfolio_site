import Menu from '../components/Menu';


const Header = () => (
<div className="header-wrapper">
    <Menu/>
    <style jsx>{`
    .header-wrapper{
        padding:20px;
        display:flex;
    }
        justify-content:space-between;
        @media (max-width: 360px) {
            .header-wrapper {
              display: block;
              text-align: center;
            
    }
    `}</style>
</div>
);
export default Header;