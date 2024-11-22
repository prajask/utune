import { ClickableTile } from '@carbon/react';

import {
    AddAlt
} from '@carbon/icons-react';

const NewProjectCard = () => {
  return (
    <ClickableTile
        className='new-project-card'
    >
        <AddAlt />
    </ClickableTile>
  )
}

export default NewProjectCard