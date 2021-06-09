function Button(props) {
  const { getFriend } = props;
  return <button onClick={getFriend}>Get a Friend!</button>;
}

export default Button;
