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
        <h1 className="welcome w-20">Bienvenido a San gregorio!</h1>
        <div className="text">
          <p>Pueblo ubicado al Sur de la provincia de Santa Fe.</p>
          <button className="bt1">Leer mas</button>
        </div>
      </div>
      <div className="picture h-100 my-20">
        <img src="hero.png" className="" alt="SG" />
      </div>
      <div className="laguna">
        <h2>La picasa</h2>
        <div className="pic">
          <img src="pcs.png" alt="picas" />
          <p className="inf3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            eleifend mi in nulla
            <div className="boton">
              <button className="bt2 h-80">Leer mas</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
