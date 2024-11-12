const ModelNutritionSummary = (props) => {
    console.log(props)
  return (
    <ul
        className="nutrition_summary"
    >
        <li
            className="nutrition_summary--item"
        >
            <span>
                Model Trained with User Data:
            </span>

            <span>
                {props.nutritional_info.base_model_trained_with_user_data ? "Yes" : "No"}
            </span>
        </li>

        <li
            className="nutrition_summary--item"
        >
            <span>
                User Data shared with Model Vendor:
            </span>

            <span>
                {props.nutritional_info.user_data_shared_with_model_vendor ? "Yes" : "No"}
            </span>
        </li>

        <li
            className="nutrition_summary--item"
        >
            <span>
                Data Anonymization:
            </span>

            <span>
                {props.nutritional_info.training_data_anonymized ? "Yes" : "No"}
            </span>
        </li>
    </ul>
  )
}

export default ModelNutritionSummary