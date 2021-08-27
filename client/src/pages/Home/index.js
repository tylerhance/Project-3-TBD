import React from "react";
import Jumbotron from "../../components/Jumbotron";
import './style.css';

const Home = () => {
  return (
    <div className="container">
      <Jumbotron>
        <h1>Eventine</h1>
        <p>We are here to be awesome</p>
      </Jumbotron>
    </div>
  );
};

export default Home;
