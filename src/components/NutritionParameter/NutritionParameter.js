const NutritionParameter = (props) => {
  return (
    <li
        className="nutrition-parameter"
    >
        <h6>
            {props.parameter.title}
        </h6>

        <p>
            {
              typeof props.parameter.value === "boolean"
              ? props.parameter.value ? "Yes" : "No"
              : props.parameter.value
            
            }
        </p>
    </li>
  )
}

export default NutritionParameter