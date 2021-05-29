import React from 'react';
import uuid from 'react-uuid';

function DogGallery({ dogPhotos }) {
  return (
    <div>
      <p>
        {dogPhotos.map((dogPhoto) => (
          <img
            alt={' '}
            key={uuid()}
            style={{ height: '150px' }}
            src={dogPhoto}
          />
        ))}{' '}
      </p>
    </div>
  );
}

export default DogGallery;
