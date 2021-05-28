import React from "react";
import coin from "./imgs/chat.png";
import chat from "./imgs/coin.png";
import delivery from "./imgs/f-delivery.png";

function Guarantee() {
  const services = [
    {
      id: 1,
      img: coin,
      title: "100% Money back",
      description: "No worries about your money 100% guarante",
    },
    {
      id: 2,
      img: chat,
      title: "Online Support 24/7",
      description: "contact with us any time ... we are availble all times",
    },
    {
      id: 3,
      img: delivery,
      title: "Free Shipping",
      description: " with free shipping just submit your order and leave everything to us",
    },
    ];
    return (
    <div className="services">
      {services.map((service) => {
        return (
          <div  key={service.id}>
          <h2>{service.title}</h2>
          <img src={service.img} alt={service.title}/>
          <p>{service.description}</p>
          </div>
      );
    })}
  </div>
  );
};

    export default Guarantee;
