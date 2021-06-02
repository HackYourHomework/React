import { useHistory } from 'react-router-dom';

const BackBtn = () => {
  let history = useHistory();
  return (
    <div>
      <button className="back-btn" onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  );
};

export default BackBtn;
