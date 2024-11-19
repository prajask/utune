import NutritionParameter from "../NutritionParameter/NutritionParameter"
import NutritionParameterList from "../NutritionParameterList/NutritionParameterList"

const NutritionLabel = (props) => {
    const PRIVACY_LADDER_LEVEL = {
        "title": "Privacy Ladder Level",
        "value": props.nutritionalInfo.privacy_ladder_level
    };

    const TRUST_INGREDIENTS = [
        {
            "title": "Base Model Trained with User Data",
            "value": props.nutritionalInfo.base_model_trained_with_user_data
        },
        {
            "title": "User Data shared with Model Vendor",
            "value": props.nutritionalInfo.user_data_shared_with_model_vendor
        },
        {
            "title": "Training Data Anonymized",
            "value": props.nutritionalInfo.training_data_anonymized
        },
        {
            "title": "Data Deletion",
            "value": props.nutritionalInfo.data_deletion
        },
        {
            "title": "Data Retention",
            "value": props.nutritionalInfo.data_retention
        },
        {
            "title": "Guardrails",
            "value": props.nutritionalInfo.guardrails
        },
        {
            "title": "I/O Consistency",
            "value": props.nutritionalInfo.io_consistency
        }
    ];

  return (
    <div
        className="nutrition-label"
    >
        <div
            className="nutrition-label--header"
        >
            <h3>
                AI Nutrition Facts
            </h3>

            <p>
                The AI Nutrition Facts label gives you a more transparent and clear view into how your data is being used - especially when it comes to training AI models.
            </p>
        </div>

        <NutritionParameterList
            parameters={[PRIVACY_LADDER_LEVEL]}
        />

        <span
            className="trust-ingredients--header"
        >
            Trust Ingredients
        </span>

        <NutritionParameterList
            parameters={TRUST_INGREDIENTS}
        />
    </div>
  )
}

export default NutritionLabel