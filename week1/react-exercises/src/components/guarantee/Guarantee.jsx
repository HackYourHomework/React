import React from 'react';
import { v4 as uuid } from 'uuid';
import deliveryIcon from './exercises/f-delivery.png';
import coinIcon from './exercises/coin.png';
import chatIcon from './exercises/chat.png';
import './Guarantee.css';

const services = [
  {
    img: deliveryIcon,
    title: `Online support 24/7`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minus iure eos perspiciatis, accusantium harum hic nulla! Cumque, nulla.`,
  },

  {
    img: coinIcon,
    title: `100% Money back`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Minus iure eos perspiciatis, accusantium harum hic nulla! Cumque, nulla.`,
  },
  {
    img: chatIcon,
    title: `Free shipping`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eum odit itaque explicabo et, dolorum enim minus fugiat molestiae eius!`,
  },
];
const Guarantee = () => (
  <div className="wrapper">
    {services.map(({ img, title, description }) => (
      <div key={uuid()} className="container">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    ))}
  </div>
);

export default Guarantee;
