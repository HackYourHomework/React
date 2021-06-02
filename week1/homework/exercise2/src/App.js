import React from 'react';
import Guarantee from './components/Guarantee';
import { v4 as uuidv4 } from 'uuid';

function App({ data }) {
  return data.map((element) => (
    <Guarantee
      key={uuidv4()}
      title={element.title}
      img={element.img}
      description={element.description}
    />
  ));
}

export default App;
