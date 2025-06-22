import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className="headercontainer">
           <div className="firstnav">
                <div className="firstnav_logo"> 
                    <img src={logo} alt="company logo" />
                </div>
                <div className="firstnav_links">
                    <nav><a>Features</a></nav>
                    <nav><a>Company</a></nav>
                    <nav><a>Careers</a></nav>
                    <nav><a>About</a></nav>
                </div>
           </div>

           <div className="secondnav">
                <nav><a> Login </a></nav>
                <button> <a href="#"> Register </a> </button>
           </div>
        </div>
    );
};
export default Header;
