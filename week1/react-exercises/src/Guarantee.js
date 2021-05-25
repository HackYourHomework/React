import React from "react";

export default function Guarantee(props) {
  const styleObj = {
    width: "50%",
    border: "3px solid red",
  };
  const img = props.img;
  console.log(img);
  const title = props.title;
  const description = props.description;
  return (
    <>
      <div>
        <div>
          <img src={img} style={styleObj} alt="my" />
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
