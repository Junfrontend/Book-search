import "./Header.css";
import "./SeacrhResult"

function Header() {
  return (
    <header className="header">
      <div className="header__text-wrapper">
        <h1 className="header__page-title">Book search engine</h1>
        <span className="header__comment">based on Google Books</span>
        <div className="search">
          <label className="search__input">
            <input type="text"></input>
          </label>
          <button className="search__button" type="submit">search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
