import './header.styles.css'
import logo from '../../assets/header-page.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="draw of girl programming" />
            <h1>Todes sabemos que os inícios os inícios nem sempre são fáceis, mas eles definem a nossa jornada. E se no teu início tivesse uma mentora incrível para te amparar?</h1>
            <p> Torne isso possível para mulher em início de carreira. Seja uma mentora! </p>
            <a href="/subscribe">Inscreva-se!</a>
        </header>    
       )
}


export default Header;