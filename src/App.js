import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="main">
      <header className="head">
        <button>Home</button>
        <button>About us</button>
        <button>Laguna</button>
        <button>Tour</button>
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
          <p className="parr">
            <div className="fe">
              <h4>La picasa, laguna por excelencia</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam eleifend mi in nulla
              <button className="bt2">Leer mas</button>
            </div>
          </p>
        </div>
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
