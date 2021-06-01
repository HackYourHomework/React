function DogPhoto(props) {
  const { dogPhoto } = props;
  return (
    <div className="dogPhoto">
      <img src={dogPhoto} alt="" />
    </div>
  );
}

export default DogPhoto;
