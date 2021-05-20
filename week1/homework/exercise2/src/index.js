import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';

import img1 from './images/f-delivery.png';
import img3 from './images/chat.png';
import img2 from './images/coin.png';

const data = [
  {
    title: 'Free shipping',
    img: img1,
    description:
      'Porta leo. Etiam ut turpis sit amet magna ultricies accumsan eget dapibus urna. Maecenas euismod neque nulla, in pretium eros ultrices ',
  },
  {
    title: '100% Money back',
    img: img2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tristique neque, ut porta leo. Etiam ut turpis sit amet magna ultricies ',
  },
  {
    title: 'Online support 24/7',
    img: img3,
    description:
      'Etiam et tristique neque, ut porta leo. Etiam ut turpis sit amet magna ultricies accumsan eget dapibus urna. Maecenas euismod neque nulla ',
  },
];

ReactDOM.render(
  <div className="container">
    <App data={data} />
  </div>,
  document.getElementById('root'),
);
