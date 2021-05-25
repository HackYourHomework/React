import React from "react";
import coin from "./imgs/chat.png";
import chat from "./imgs/coin.png";
import delivery from "./imgs/f-delivery.png";

function Guarantee() {
  const services = [
    {
      img: coin,
      title: "100% Money back",
      description: "No worries about your money 100% guarante",
    },
    {
      img: chat,
      title: "Online Support 24/7",
      description: "contact with us any time ... we are availble all times",
    },
    {
      img: delivery,
      title: "Free Shipping",
      description: " with free shipping just submit your order and leave everything to us",
    },
    ];
    return (
    <div className="services">
      {services.map((service) => {
        return (
          <Services
            img={service.img}
            title={service.title}
            description={service.description}
          />
      );
    })}
  </div>
  );
};


const Services = ({ img, title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img}/>
      <p>{description}</p>
      </div>
    );
};


    export default Guarantee;
