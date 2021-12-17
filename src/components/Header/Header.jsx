import "./header.styles.css";
import logo from "../../assets/header-page.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} className="header-page" alt="draw of girl programming" />
      <div class="phrase-and-link">
        <h1>
          Todes sabemos que os inícios os inícios nem sempre são fáceis, mas
          eles definem a nossa jornada. E se no teu início tivesse uma mentora
          incrível para te amparar?
        </h1>
        <p className="phrase-header">
          Torne isso possível para mulher em início de carreira. Seja uma
          mentora!
        </p>
        <a className="link-header" href="/subscribe">
          Inscreva-se!
        </a>
      </div>
    </header>
  );
};

export default Header;
