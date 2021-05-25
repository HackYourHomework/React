import React from 'react';
import coinImg from './coin.png';
import chatImg from './chat.png';
import deliveryImg from './f-delivery.png';

function Guarantee({ services }) {
  const title = services.title;
  const img = services.img;
  const description = services.description;
  return (
    <div
      style={{
        float: 'left',
        width: '300px',
        textAlign: 'center',
        paddingRight: '20px',
      }}
    >
      <img src={img} alt={title} style={{ height: '57px' }} />
      <br />
      <h3>{title}</h3>
      <br />
      <span>{description}</span>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h2>
        <i>Exercise 2</i>
      </h2>
      <Guarantee
        services={{
          img: deliveryImg,
          title: 'Free shipping',
          description:
            'Fusce urna quam, euismod sit amet moll is quis, vestibulum quis vel it. Vesti bulum mal esuada aliquet libero viverra cursus.',
        }}
      />
      <Guarantee
        services={{
          img: coinImg,
          title: '100% Money back',
          description:
            'Fusce urna quam, euismod sit amet moll is quis, vestibulum quis vel it. Vesti bulum mal esuada aliquet libero viverra cursus.',
        }}
      />
      <Guarantee
        services={{
          img: chatImg,
          title: 'Online support 24/7',
          description:
            'Fusce urna quam, euismod sit amet moll is quis, vestibulum quis vel it. Vesti bulum mal esuada aliquet libero viverra cursus.',
        }}
      />
    </div>
  );
}

export default Services;
