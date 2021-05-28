import React from "react";
import coin from "./images/coin.png";
import delivery from "./images/f-delivery.png";
import chat from "./images/chat.png";

const Guarantee = () => {
  const info = [
    {
      img: coin,
      title: "here comes the money",
      desc: "show me the monet",
    },
    {
      img: delivery,
      title: "fast delivery",
      desc: "u order we deliver",
    },
    {
      img: chat,
      title: "chat",
      desc: "your wishes our commands",
    },
  ];
  return (
    <div className="customerServices">
      {info.map((service) => {
        return (
          <DisplayService
            img={service.img}
            title={service.title}
            desc={service.desc}
          />
        );
      })}
    </div>
  );
};
const DisplayService = ({ img, title, desc }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <p>{desc}</p>
    </div>
  );
};
export default Guarantee;
