import React from 'react';
import img1 from '../images/chat.png';
import img2 from '../images/coin.png';
import img3 from '../images/f-delivery.png';

const CustomerService = () => {

  const services = [
    {
      img: img1,
      title: 'Free shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, ullamco laboris nisi.'
    },
    {
      img: img2,
      title: '100% Money back',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, ullamco laboris nisi.'
    },
    {
      img: img3,
      title: 'Online support 24/7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, ullamco laboris nisi.'
    }
  ]
  
  return (
    <div className='services'>
      {services.map(service => (
        <Guarantee
          img={service.img}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  )
}

const Guarantee = ({img, title, description}) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default CustomerService
