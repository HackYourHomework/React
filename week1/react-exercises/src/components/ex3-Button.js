const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" className="btn" onClick={onClick}>
        Add 1!
      </button>
    </>
  );
};

export default Button;
