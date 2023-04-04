import React from 'react'

const Body = () => {
  return (
    <div>
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
    </div>
    
  )
}

export default Body