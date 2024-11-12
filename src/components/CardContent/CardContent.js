import TagsList from "../TagsList/TagsList";
import PIICompliance from "../PIICompliance/PIICompliance";
import CardMeta from "../CardMeta/CardMeta";
import ModelNutritionSummary from "../ModelNutritionSummary/ModelNutritionSummary";

const CardContent = (props) => {
  return (
    <div
      className="card-content"
    >
        <h3
          className="card--header"
        >
            {props.data.name}
        </h3>
        
        <TagsList
          tags={props.data.tags}
        />

        <p
          className="card--description"
        >
          {props.data.description}
        </p>
        
        {
          props.data.nutritional_info
          ? <ModelNutritionSummary
              nutritional_info={props.data.nutritional_info}
            />
          : <PIICompliance
              piicompliant={props.data.piicompliant}
            />
        }

        <CardMeta
          rating={props.data.rating}
          creationDate={props.data.created_in}
        />
    </div>
  )
}

export default CardContent