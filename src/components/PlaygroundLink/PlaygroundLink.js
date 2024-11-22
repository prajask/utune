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
            <h4
                className="playground-link--heading"
            >
                {
                    props.link.icon
                }

                {props.link.title}
            </h4>

            <p
                className="playground-link--description"
            >
                {props.link.description}
            </p>

            {/* <ArrowRight size={24} className="card--right-arrow"/> */}
        </div>
    </ClickableTile>
  )
}

export default PlaygroundLink