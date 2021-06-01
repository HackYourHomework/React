import './Button.css';

const Button = ({ onClick }) => (
  <button type="submit" onClick={onClick}>
    Search
  </button>
);

export default Button;
