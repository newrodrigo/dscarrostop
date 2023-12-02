import "./styles.css";
import Card from "../../components/Card";
import Header from "../../components/Header";

export default function Car() {
  return (
    <>
      <Header />
      <main>
        <section id="ct-car-section">
          <div className="container">
            <h2 className="ct-title">Venha nos visitar</h2>

            <div className="card">
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
