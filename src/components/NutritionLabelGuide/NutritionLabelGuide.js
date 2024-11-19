import{
    Grid,
    Column,
    Accordion,
    AccordionItem,
    OrderedList,
    ListItem,
    UnorderedList
} from '@carbon/react';

const NutritionLabelGuide = () => {
  return (
    <section>
        <h3>How to read this label</h3>

        <Accordion
            className='nutrition-label-guide'
        >
            <AccordionItem
                title="Privacy Ladder Level"
            >
                <p>
                    The following levels are based on Twilio&apos;s CustomerAI Privacy Ladder and are intended to clearly identify how customer data is used within an AI feature, and who the model can be used by. Even though we developed this ladder for Twilio products we believe it can widely apply to AI use cases. We think of these levels in terms of a ladder. The higher the level the more caution you&apos;ll have to practice.
                </p>

                <OrderedList
                    className='nutrition-label-guide--list-wrapper'
                >
                    <ListItem
                        className='nutrition-label-guide--list-item'
                    >
                        Models with your data for your use, without PII

                        <UnorderedList nested>
                            <ListItem>
                                Level 1 offers the lowest privacy risk, using only your data for your exclusive use without any personally identifiable information (PII). Information that, when used alone or with other relevant data, can identify an individual.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>

                    <ListItem
                        className='nutrition-label-guide--list-item'
                    >
                        Models with your data for your use, with PII

                        <UnorderedList nested>
                            <ListItem>
                                Level 2 offers more value and requires more caution than the first level as it identifies models trained with your data for your exclusive use, including PII.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>

                    <ListItem
                        className='nutrition-label-guide--list-item'
                    >
                        Models with your data for multi-customer use, without PII

                        <UnorderedList nested>
                            <ListItem>
                                Level 3 provides high value but requires caution, as it involves models trained with your and other customers&apos; anonymized data for multiple users, without including any PII.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>

                    <ListItem
                        className='nutrition-label-guide--list-item'
                    >
                        Models with your and other customers&apos; data with PII

                        <UnorderedList nested>
                            <ListItem>
                                Level 4 is where customer&apos;s data is used to train the model with other customer&apos; data that includes personal data/PII.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </OrderedList>
            </AccordionItem>

            <AccordionItem
                title="Base Model Trained with User Data"
            >
                <p>
                    Was any customer data used to train the base model?
                </p>
            </AccordionItem>

            <AccordionItem
                title="User Data is Shared with Model Vendor"
            >
                <p>
                    Is any customer data sent to the vendor that trains the base model?
                </p>
            </AccordionItem>

            <AccordionItem
                title="Training Data Anonymized"
            >
                <p>
                    Is the data being anonymized before it is being used to train the model?
                </p>
            </AccordionItem>

            <AccordionItem
                title="Data Deletion"
            >
                <p>
                    Deletion of specific pieces of data that have been stored in the model. This could include removing training examples, text prompts, user interactions, or any other form of input that has been used to fine-tune or train the model.
                </p>
            </AccordionItem>

            <AccordionItem
                title="Data Retention"
            >
                <p>
                    How long data related to the feature will be retained. This data can include meta data about input or weights, interaction logs, etc. that might be retained for legal or auditing purposes.
                </p>
            </AccordionItem>

            <AccordionItem
                title="Guardrails"
            >
                <p>
                    Are there checks and guardrails in place that check for harmful output including ethical, bias, violence, hate, etc.?
                </p>
            </AccordionItem>

            <AccordionItem
                title="Input/Output Consistency"
            >
                <p>
                    Does the feature produce consistently the same output given the same input?
                </p>
            </AccordionItem>
        </Accordion>
    </section>
  )
}

export default NutritionLabelGuide