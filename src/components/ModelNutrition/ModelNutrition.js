import { 
    Column,
    Grid 
} from "@carbon/react";

import NutritionLabel from "../NutritionLabel/NutritionLabel";


const ModelNutrition = () => {
  return (
    <Grid fullWidth>
        <Column lg={8} md={8} sm={8}>
            <NutritionLabel/>
        </Column>
    </Grid>
  )
}

export default ModelNutrition