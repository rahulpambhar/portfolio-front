import React from 'react'

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">Rahul Pambhar here . . .</span>
        </h1>
        <p className="header-subtitle">A FULL-STACK WEB DEVELOPER</p>
        <a href="#portfolio" className="btn btn-primary">Visit  Works</a>
      </div>
    </div>
  )
}

export default Header