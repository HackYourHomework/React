import React from "react";
import Guarantee from "./guarantee";
import coin from "./img/coin.png";
import delivery from "./img/f-delivery.png";
import chat from "./img/chat.png";

const GuaranteeItem = () => {
  const lists = [
    {
      id: 1,
      img: delivery,
      title: "Free shipping",
      description:
        " Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit",
    },
    {
      id: 2,
      img: coin,
      title: "100% Money back",
      description:
        " Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit",
    },
    {
      id: 3,
      img: chat,
      title: "Online support 24/7",
      description:
        " Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit",
    },
  ];

  return (
    <div>
      {lists.map((list) => (
        <Guarantee
          key={list.id}
          img={list.img}
          title={list.title}
          description={list.description}
        />
      ))}
    </div>
  );
};
export default GuaranteeItem;
