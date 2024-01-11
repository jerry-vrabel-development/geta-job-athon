import "../App.css";
import Nav from "./Nav";
import Star from "./Star";

function Header() {
 
  return (
    <header>
      <div className="header">
        <div className="header__left">
          <Star />
        </div>
        <div className="header__right">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
