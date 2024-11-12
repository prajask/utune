import { Tooltip } from '@carbon/react';

import { CheckmarkFilled, ErrorFilled, Information } from '@carbon/icons-react';

const PIICompliance = (props) => {
  return (
    <div
      className="piicompliance"
    >
      {
        props.piicompliant 
        ? <CheckmarkFilled 
            className='pii-compliant'
          />
        : <ErrorFilled
            className='pii-detected'
          />
      }
      
      <span
        className={props.piicompliant ? "pii-compliant" : "pii-detected"}
      >
        PII {props.piicompliant ? "Compliant" : "Detected"}
      </span>

      <Tooltip
        align="bottom"
        label="Tooltip Text"
        enterDelayMs={0}
        leaveDelayMs={300}
      >
        <button
          className="sb-tooltip-trigger" 
          type="button"
        >
          <Information />
        </button>
      </Tooltip>
    </div>
  );
};

export default PIICompliance;
