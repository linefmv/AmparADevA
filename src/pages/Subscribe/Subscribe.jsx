import Menu from "../../components/Menu/Menu";
import "./subscribe.styles.css";

const Subscribe = () => {
  return (
    <>
      <Menu />
      <main>
        <iframe
         title="This is a unique title"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc1N7sJfrRISshKh6fwXaGT9JUKCcO9bp6XuV15pRxxLEXIdQ/viewform?embedded=true"
          width="640"
          height="625"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Carregando…
        </iframe>
      </main>
    </>
  );
};

export default Subscribe;
