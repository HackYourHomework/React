import React from "react";
import coin from "./exercises/chat.png";
import chat from "./exercises/coin.png";
import delivery from "./exercises/f-delivery.png";

const customerService = [
  {
    id: 1,
    img: chat,
    title: "Free Shipping",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus arcu, aliquam sit amet consectetur bibendum",
  },
  {
    id: 2,
    img: coin,
    title: "100% Money back",
    description:
      "Morbi consectetur ultrices eros, ac mattis augue rutrum sit amet. Sed dui purus, viverra at pulvinar nec",
  },
  {
    id: 3,
    img: delivery,
    title: "Online support 24/7",
    description:
      "Aenean eget tempus leo, sed efficitur augue. Suspendisse turpis dolor, feugiat id viverra nec, lacinia vel ipsum",
  },
];
function Guarantee() {
  return (
    <section className="container">
      {customerService.map((service) => {
        return (
          <div className="wrapper" key={service.id}>
            <Img img={service.img} />
            <Title title={service.title} />
            <Description description={service.description} />
          </div>
        );
      })}
    </section>
  );
}
function Img({ img, title }) {
  return <img src={img} alt={title} />;
}
function Title({ title }) {
  return <h2>{title}</h2>;
}
function Description({ description }) {
  return <p>{description}</p>;
}

export default Guarantee;
