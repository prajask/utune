import NutritionParameter from "../NutritionParameter/NutritionParameter"

const NutritionLabel = () => {
  return (
    <div
        className="nutrition-label"
    >
        <div
            className="nutrition-label--header"
        >
            <h2>
                AI Nutrition Facts
            </h2>

            <p>
                The AI Nutrition Facts label gives you a more transparent and clear view into how your data is being used - especially when it comes to training AI models.
            </p>
        </div>

        <NutritionParameter/>
    </div>
  )
}

export default NutritionLabel