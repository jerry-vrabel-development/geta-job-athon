import "../App.css";
import Star from "./Star";
import NavBar from "./NavBar/NavBar";

function Header() {
 
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <Star />
        </div>
        <div className="header__right">
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
