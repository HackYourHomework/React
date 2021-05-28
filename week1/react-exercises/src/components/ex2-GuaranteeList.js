import Guarantee from "./ex2-Guarantee";

const GuaranteeList = ({ servicesList }) => {
  return (
    <div className="services">
      {servicesList.map((service) => (
        <Guarantee
          key={service.id}
          img={service.img}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default GuaranteeList;
