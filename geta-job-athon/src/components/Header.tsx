import "../App.css";
import NavBar from "./NavBar/NavBar";

function Header() {
 
  return (
    <header>
      <div className="header">
        <div className="header__left">
        <NavBar />
        </div>
        <div className="header__right">

        </div>
      </div>
    </header>
  );
}

export default Header;
