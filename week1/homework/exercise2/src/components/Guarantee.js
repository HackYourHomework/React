import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Image';

const Guarantee = ({ title, img, description }) => {
  return (
    <div key={title} className="component">
      <Image title={title} img={img} />
      <Title title={title} />
      <Description description={description} />
    </div>
  );
};

export default Guarantee;
