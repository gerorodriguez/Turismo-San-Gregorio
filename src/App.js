import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="main" style={{ backgroundImage: "url(/bg.png)" }}>
      <header className="head">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">LAGUNA</a>
        <a href="#">TOUR</a>
        <header>+5435231231</header>
      </header>
      <div className="info">
        <h1 className="welcome">Bienvenido a San gregorio!</h1>
        <div className="text">
          <p>Pueblo ubicado al Sur de la provincia de Santa Fe.</p>
          <button className="bt1">Leer mas</button>
        </div>
      </div>
      <div className="picture">
        <img src="hero.png" className="" alt="SG" />
      </div>
      <div className="laguna">
        <div className="pic">
          <img src="pcs.png" alt="picas" />
        </div>
        <p className="parr">
          <div className="fe">
            <h2>La picasa, laguna por excelencia</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla
            <button className="bt2">Leer mas</button>
          </div>
        </p>
      </div>
      <div className="visit">
        <h1>Lugares para visitar</h1>
      </div>
      <div className="comp">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
