import './Button.css';

const Button = ({ onClick, disabled }) => (
  <button type="submit" onClick={onClick} disabled={disabled}>
    Search
  </button>
);

export default Button;
