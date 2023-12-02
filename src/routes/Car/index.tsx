import "./styles.css";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Comments from "../../components/Comments";

export default function Car() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-cards-section">
          <div className="ct-cards-container">
            <h2 className="ct-cards-title">Venha nos visitar</h2>

            <div className="cards">
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <section id="ct-comments-section">
          <Comments />
        </section>
      </main>
    </>
  );
}
