import {
    Link
} from '@carbon/react';

const ProjectBaseModel = ({baseModelId, baseModelName}) => {
  return (
    <Link
        className="project-base-model"
        size="lg"
        href={`/models/${baseModelId}`}
    >
        {baseModelName}
    </Link>
  )
}

export default ProjectBaseModel