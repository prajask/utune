import {
    Tag
} from "@carbon/react";

const TagsList = (props) => {

  const TAG_TYPES = {
    "text-to-text": "magenta",
    "text-to-image": "purple",
    "audio-to-text": "blue",
    "image-to-text": "cyan",
    "text-to-video": "teal",
    "text-to-audio": "green",
    "text": "magenta",
    "image": "purple",
    "audio": "blue",
    "video": "cyan",
  }

  return (
    <div
      className="tags-list"
    >
      {
        props.tags.map( (tag) => (
            <Tag
              className="tags-list--tag"
              type={TAG_TYPES[tag]}
              key={tag}
            >
              {tag}
            </Tag>
          )
        )
      }
    </div>
  )
}

export default TagsList