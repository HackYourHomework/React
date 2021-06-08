const Button = ({ getDogPhoto }) => {
  return (
    <button type="button" className="btn btn-success" onClick={getDogPhoto}>
      Get a Dog!
    </button>
  );
};

export default Button;
