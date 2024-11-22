'use client';

import { useState } from "react";

import {
    Link
} from '@carbon/react';

import { 
    Launch 
} from "@carbon/icons-react";

const HyperparameterDescription = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="hyperparameter-description">
        <div
            class="hyperparameter-description--header"
        >
            {props.hyperparameter.icon}

            <span
                className="hyperparameter-description--title"
            >
                {props.hyperparameter.title}
            </span>

            <button
                class="hyperparameter-description--header--button"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Hide" : "View"} Details
            </button>
        </div>

        <div
            class="hyperparameter-description--content"
            style={{ maxHeight: isOpen ? '500px' : '0' }}
        >
            <p>
                {props.hyperparameter.description}
            </p>
            
            <Link
                href="/"
                renderIcon={Launch}
                className="hyperparameter-description--learn-more-link"
            >
                Learn more about {props.hyperparameter.title}
            </Link>
        </div>
    </div>
  )
}

export default HyperparameterDescription