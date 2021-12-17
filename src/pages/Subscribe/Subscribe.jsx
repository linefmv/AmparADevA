import Menu from "../../components/Menu/Menu";
import "./subscribe.styles.css";

const Subscribe = () => {
  return (
    <>
      <Menu />
      <main>
        <iframe
          title="This is a unique title"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfwP80xZgHcLIfv-PrQHwQVeIpkqo3DG1o2MnXzeOI1Lyv_bQ/viewform?embedded=true"
          width="100%"
          height="2705"
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
