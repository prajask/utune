import { ClickableTile } from '@carbon/react';

import { ArrowRight } from '@carbon/icons-react';
import CardContent from '../CardContent/CardContent';

const Card = (props) => {
  return (
    <ClickableTile
      className={`card ${props.data.nutritional_info ? "card--models" : "card--datasets"}`}
      href={props.data.nutritional_info ? `/models/${props.data.id}` : `/datasets/${props.data.id}`}
      renderIcon={ArrowRight}
    >
      <CardContent
        data={props.data}
      />
    </ClickableTile>
  );
};

export default Card;
