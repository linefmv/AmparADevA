import "./header.styles.css";
import logo from "../../assets/header-page.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} className="header-page" alt="draw of girl programming" />
      <div class="phrase-and-link">
        <h1 className="header-title">
          Todes sabemos que os inícios nem sempre são fáceis, mas
          eles definem a nossa jornada. E se no teu início tivesse uma mentora
          incrível para te Amparar?
        </h1>
        <p className="phrase-header">
          Torne isso possível. Seja uma
          mentora ou mentorada!
        </p>
        <a className="link-header" href="/subscribe">
          Inscreva-se!
        </a>
      </div>
    </header>
  );
};

export default Header;
