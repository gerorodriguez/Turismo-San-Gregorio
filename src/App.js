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
      <div className="Info">
        <h1>Bienvenido a San gregorio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          eleifend mi in nulla.
        </p>
        <button className="bt1">Leer mas</button>
      </div>
      <div className="picture">
        <img src="hero.png" alt="SG" width="35%" height="100%" />
      </div>
      <div className="Laguna">
        <h2>La picasa</h2>
        <img className="picturelag" src="pcs.png" width="20%" alt="picasa" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          eleifend mi in nulla
        </p>
        <button className="bt2">Leer mas</button>
      </div>
    </div>
  );
};

export default App;
