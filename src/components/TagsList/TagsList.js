import {
    Tag
} from "@carbon/react";

const TagsList = (props) => {
  return (
    <div
      className="tags-list"
    >
      {
        props.tags.map( (tag) => (
            <Tag className="tags-list--tag" type="cool-gray" key={tag}>
              {tag}
            </Tag>
          )
        )
      }
    </div>
  )
}

export default TagsList