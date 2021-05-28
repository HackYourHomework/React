import React from 'react';
import coin from './exercises/coin.png';
import chat from './exercises/chat.png';
import fDelivery from './exercises/f-delivery.png';

const customerService = [
  {
    id: 1,
    img: chat,
    title: 'Free Shipping',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',
  },
  {
    id: 2,
    img: coin,
    title: '100% Money back',
    description:
      'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 3,
    img: fDelivery,
    title: 'Online support 24/7',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
  },
];

function Guarantee() {
  return (
    <div>
      {customerService.map((service) => {
        return (
          <div key={service.id}>
            <Img img={service.img} />
            <Title title={service.title} />
            <Description description={service.description} />
          </div>
        );
      })}
    </div>
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
