import "./App.css";

const App = () => {
  return (
    <div className="main">
      <div className="head">
        <button>Home</button>
        <button>About us</button>
        <button>Laguna</button>
        <button>Tour</button>
      </div>
      <div className="info">
        <h2>Bienvenido a San gregorio</h2>
        <div className="text">
          <p>Pueblo ubicado al Sur de la provincia de Santa Fe.</p>
          <button className="bt1">Leer mas</button>
        </div>
      </div>
      <div className="picture">
        <img src="hero.png" alt="SG" />
      </div>
      <div className="laguna">
        <h2>La picasa</h2>
        <div className="pic">
          <img src="pcs.png" className="h-72" alt="picas" />
          <p className="inf3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla
            <div className="boton">
              <button className="bt2">Leer mas</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
