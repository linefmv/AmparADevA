import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TextAndImage from "../../components/TextAndImage/TextAndImage";
import "./home.styles.css";
import chatGirls from "../../assets/chat-girls.svg";
import about from "../../assets/about.svg";

const Home = () => {
  return (
    <>
      <Menu />
      <Header />
      <TextAndImage
        sectionContent={"about"}
        title={"Porque o AmparADevA foi criado?"}
        image={about}
        description={
          "Embora haja várias iniciativas educacionais para inserir mulheres na tecnologia, o número delas ainda é menor no setor. E há inúmeras barreiras para seguir nesse segmento, e o Amparas sabendo disso vem com a ideia de auxiliar na afirmação da mulher na área."
        }
      />
      <TextAndImage
        sectionContent={"intent"}
        title={"Sobre o AmparADevA"}
        image={chatGirls}
        description={
          "Esse projeto tem o intuito de conectar mulher com mais experiência na área da tecnologia para auxiliar nas dúvidas sobre carreira, portifolio, tecnologias, empresas, exercícios e vagas através de conversas. Basta você se inscrever e iremos entrar em contato com você! E ele é para todas, para ti que tem um tempinho e quer ajudar e para você que precisa de ajuda!"
        }
      />
      <Footer />
    </>
  );
};

export default Home;
