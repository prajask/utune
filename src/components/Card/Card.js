import { ClickableTile } from '@carbon/react';

import { ArrowRight } from '@carbon/icons-react';
import CardContent from '../CardContent/CardContent';

const Card = (props) => {
  return (
    <ClickableTile
      className="card"
      href={props.data.nutritional_data ? `/datasets/${props.data.id}` : `/models/${props.data.id}`}
      renderIcon={ArrowRight}
    >
      <CardContent
        data={props.data}
      />
    </ClickableTile>
  );
};

export default Card;
