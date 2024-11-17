import { 
    ClickableTile
} from "@carbon/react";

import {
    ArrowRight,
    ModelAlt
} from '@carbon/icons-react';

const PlaygroundLink = (props) => {
  return (
    <ClickableTile
        href={props.link.link}
        renderIcon={ArrowRight}
        className={`${props.link.classname} playground-link`}
    >
        <div className="playground-link--content">
            <h4>{props.link.title}</h4>

            {
                props.link.pictogram
            }
        </div>
    </ClickableTile>
  )
}

export default PlaygroundLink