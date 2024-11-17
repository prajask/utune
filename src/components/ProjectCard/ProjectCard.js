import { ArrowRight } from "@carbon/icons-react"
import CreationDate from "../CreationDate/CreationDate"

const { ClickableTile } = require("@carbon/react");

const ProjectCard = (props) => {
  return (
    <ClickableTile
        href={`/projects/${props.data.id}`}
        renderIcon={ArrowRight}
        className="card project-card"
    >
        <h4>{props.data.name}</h4>
        <p>{props.data.description}</p>
        <CreationDate creationDate={new Date(props.data.last_updated).toISOString().split('T')[0]} />
    </ClickableTile>
  )
}

export default ProjectCard