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
        <button className="Discover">Leer mas</button>
        <div className="picture">
          <img src="hero.png" alt="SG" width="40%" height="100%" />
        </div>
      </div>
      <div className="Laguna">
        <h2>La picasa</h2>
        <img className="picturelag" src="pcs.png" width="20%" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
          eleifend mi in nulla
        </p>
        <button>Leer mas</button>
      </div>
    </div>
  );
};

export default App;
