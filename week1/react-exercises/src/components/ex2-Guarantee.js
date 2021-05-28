const Guarantee = ({ img, title, description }) => {
  return (
    <div className="service">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
