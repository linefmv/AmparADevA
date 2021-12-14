import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import "./contact.styles.css";

const Contact = () => {
  return (
    <>
     <Menu />
      <section className="contact-section">
        <h2 className="contact-title">
          Alguma dúvida? Entra em contato com a gente!
        </h2>
        <h3 className="social-media">Redes sociais</h3>
        <ul>
          <li>
            <a href="https://github.com/linefmv">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/viana-aline/">Linkedin</a>
          </li>
        </ul>
        <h3 className="AboutMe-Title">Sobre mim</h3>
        <div className="aboutME-Section">
          <img
            className="ME"
            src="https://avatars.githubusercontent.com/u/77216386?v=4"
            alt="mulher sorrindo"
          />
          <p className="AboutME">
            Realizei transição de carreira da saúde para tech e tive muita
            ajuda, com isso tive o intuíto de criar esse projeto para que essa
            rede de ajuda aumente cada vez mais.
          </p>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default Contact;
