import "./Footer.scss";
import logo from "./LogoFooter.png"

function Footer () {
    return (
        <footer className="footer"> 
            <div className="logo-footer">
                <img src={logo} alt=" logo kasa blanc" />   
            </div>
            <p className="copyright">© 2020 Kasa. All <span>rights reserved</span> </p>
        </footer>
    )
}

export default Footer