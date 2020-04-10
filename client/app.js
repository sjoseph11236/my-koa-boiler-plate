import React, { Component } from 'react';
import Nav from './components/Nav';
// import Routes from './routes';

const App = () => { 
  return(
    <div>
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <h1 className="title">
            My Boilerplate
          </h1>
          <p class="subtitle">
            My Koa boilerplate with <strong>Bulma</strong>!
          </p>  
        </div>
      </section>
      <section className="section">
        <Nav />
        {/* <Routes /> */}
      </section> 
    </div>  
  )
}

export default App;