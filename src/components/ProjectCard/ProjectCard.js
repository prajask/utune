import { ArrowRight } from "@carbon/icons-react"
import CreationDate from "../CreationDate/CreationDate"
import ProjectLastUpdate from "../ProjectLastUpdate/ProjectLastUpdate";

const { ClickableTile } = require("@carbon/react");

const ProjectCard = (props) => {
  return (
    <ClickableTile
        href={`/projects/${props.data.id}`}
        renderIcon={ArrowRight}
        className="card project-card"
    >
        <h4
          className="project-card--heading"
        >
          {props.data.name}
        </h4>

        <p
          className="project-card--description"
        >
          {props.data.description}
        </p>
        
        <ProjectLastUpdate lastUpdate={new Date(props.data.last_updated).toISOString().split('T')[0]} />
    </ClickableTile>
  )
}

export default ProjectCard