import { StarFilled, StarHalf, Star } from '@carbon/icons-react';

const Ratings = (props) => {
  let RATING_ELEMENTS = [];

  const MAX_RATINGS = 5;
  
  const FULL_STARS = (Math.floor(props.rating));
  for (let full_star = 0; full_star < FULL_STARS; full_star++) RATING_ELEMENTS.push(<StarFilled/>);
  
  const HALF_STAR = (Math.floor(props.rating) === props.rating) ? 0 : 1;
  if(HALF_STAR === 1) RATING_ELEMENTS.push(<Star><StarHalf/></Star>);
  
  const BLANK_STARS = MAX_RATINGS - FULL_STARS - HALF_STAR;
  for (let blank_star = 0; blank_star < BLANK_STARS; blank_star++) RATING_ELEMENTS.push(<Star/>);

  return (
    <div
      className="ratings"
    >
      {
        [...RATING_ELEMENTS]
      }
    </div>
  );
};

export default Ratings;
