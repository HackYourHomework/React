function Button2(props) {
  const { getDogPhoto } = props;
  return <button onClick={getDogPhoto}>Get a Dog!</button>;
}

export default Button2;
