import NutritionParameter from "../NutritionParameter/NutritionParameter"

const NutritionParameterList = (props) => {
  return (
    <ul
        className="nutrition-parameter-list"
    >
        {
            props.parameters.map(
                (nutritionParameter) => (
                    <NutritionParameter 
                        key={nutritionParameter.title}
                        parameter={nutritionParameter}
                    /> 
                )
            )
        }
    </ul>
  )
}

export default NutritionParameterList