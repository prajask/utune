import {
    UnorderedList,
    ListItem,
    Link
} from '@carbon/react'

const ProjectDatasetsList = (props) => {
  return (
    <UnorderedList
        className='project-datasets-list'
    >
        {
            props.datasets.map(
                (dataset) => (
                    <ListItem
                        key={dataset.id}
                        className='project-dataset'
                    >
                        <Link
                            href={`/datasets/${dataset.id}`}
                            size="lg"
                        >
                            {dataset.name}
                        </Link>
                    </ListItem>
                )
            )
        }
    </UnorderedList>
  )
}

export default ProjectDatasetsList