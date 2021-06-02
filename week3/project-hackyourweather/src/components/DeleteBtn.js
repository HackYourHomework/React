import React from 'react';
import { MdHighlightOff } from 'react-icons/md';

const DeleteBtn = ({ id, handleDelete }) => {
  return (
    <div>
      <button
        className="delete-btn"
        onClick={() => {
          handleDelete({ id });
        }}
        id={id}
      >
        <MdHighlightOff style={{ background: 'white', fontSize: '30px' }} />
      </button>
    </div>
  );
};

export default DeleteBtn;
