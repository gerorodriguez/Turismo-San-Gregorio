import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Body from "./components/Body";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="main" style={{ backgroundImage: "url(/bg.png)" }}>
      <Header></Header>
      <Body></Body>
      <Hero></Hero>
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
