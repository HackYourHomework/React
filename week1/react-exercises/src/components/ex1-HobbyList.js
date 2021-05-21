import Hobbies from "./ex1-Hobbies.js";

const HobbyList = ({ hobbies }) => {
  return (
    <>
      {hobbies.map((hobby, index) => (
        <Hobbies key={index} hobby={hobby} />
      ))}
    </>
  );
};
export default HobbyList;
