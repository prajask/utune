import { 
    Column,
    Grid 
} from "@carbon/react";

import NutritionLabel from "../NutritionLabel/NutritionLabel";
import NutritionLabelGuide from "../NutritionLabelGuide/NutritionLabelGuide";


const ModelNutrition = (props) => {
  return (
    <Grid fullWidth>
        <Column lg={6} md={8} sm={8}>
            <NutritionLabel
              nutritionalInfo={props.nutritionalInfo}
            />
        </Column>
        
        <Column lg={{offset: 7, span: 8}} md={8} sm={8}>
          <NutritionLabelGuide />
        </Column>
    </Grid>
  )
}

export default ModelNutrition