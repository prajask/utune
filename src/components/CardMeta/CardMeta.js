import CreationDate from '../CreationDate/CreationDate';
import Ratings from '../Ratings/Ratings';

const CardMeta = (props) => {
  return (
    <div
      className="card-meta"
    >
      <Ratings
        rating={props.rating}
      />
      
      <CreationDate
        creationDate={props.creationDate}
      />
    </div>
  );
};

export default CardMeta;
