import React from "react";
import "./css/card.css";
import company_logo from "../images/company_logo.png";
import comma1 from "../images/comma1.png";
import comma2 from "../images/comma2.png";

function Card(props) {
  return (
    <div className="card">
      <div className="description">
        <img src={comma1} alt="comma" />
        {props.description}
        <img src={comma2} alt="comma" />
      </div>
      <div className="logo">
        <img src={props.image} alt="logo" />
      </div>
    </div>
  );
}

function CardLayout() {
  return (
    <div className="card-layout">
      <Card
        title="Card 1"
        image={company_logo}
        description="The interesting illumination interaction"
      />
      <Card
        title="Card 2"
        image={company_logo}
        description="The interesting illumination interaction"
      />
      <Card
        title="Card 3"
        image={company_logo}
        description="The interesting illumination interaction"
      />
      <Card
        title="Card 4"
        image={company_logo}
        description="The interesting illumination interaction"
      />
      <Card
        title="Card 5"
        image={company_logo}
        description="The interesting illumination interaction"
      />
      <Card
        title="Card 6"
        image={company_logo}
        description="The interesting illumination interaction"
      />
    </div>
  );
}

export default CardLayout;
