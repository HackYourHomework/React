import React from "react";

function Guarantee() {
  const GuaranteeInformation = [
    {
      img: "f-delivery.png",
      title: "Free Shipping",
      description:
        "Don't you love it when a company provides great customer service?",
    },
    {
      img: "coin.png",
      title: "100% Money Back",
      description:
        "Don't you love it when a company provides great customer service?",
    },
    {
      img: "chat.png",
      title: "Online support 24/7",
      description:
        "Don't you love it when a company provides great customer service?",
    },
  ];

  return (
    <div className="guarantee-container">
      {GuaranteeInformation.map((guarantee) => {
        return (
          <div>
            <img src={guarantee.img} alt={guarantee.title} />
            <h2>{guarantee.title}</h2>
            <h4>{guarantee.description}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Guarantee;

//Guarantee({img, title, description});
