'use client';

import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  TextInput,
  ButtonSet
} from '@carbon/react';

import {
  IbmGranite,
  Save,
  Tools
} from '@carbon/icons-react';

const page = () => {
  return (
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner">
            <Grid fullWidth>
              <Column Column lg={16} md={8} sm={4}>
                <Breadcrumb noTrailingSlash>
                    <BreadcrumbItem>
                        <a href="/">Playground</a>
                    </BreadcrumbItem>
                </Breadcrumb>
              </Column>

              <Column lg={16} md={8} sm={4}
                className='page__banner--heading-container1'
              >
                <span
                  className="page__banner--heading1"
                  style={
                    {
                        flexGrow: '1',
                        width: '50%'
                    }
                }
                >
                  <IbmGranite
                    size={32}
                  />

                  <h2>
                    Playground
                  </h2>
                  {/* <TextInput 
                    id="project-name" 
                    type="text"
                    value={""}
                    onChange={() => {}}
                    style={
                        {
                            flexGrow: '1',
                            width: '50%'
                        }
                    }
                  /> */}

                  {/* <ButtonSet
                    style={{
                      display: "flex",
                      gap: "8px",
                      paddingRight: "32px"
                    }}
                  >
                    <Button
                      size='sm'
                      className='projects-icon-button1'
                      kind='ghost' 
                      renderIcon={() => <Save size={24} />}
                      iconDescription="Save Project Name" 
                      hasIconOnly 
                      onClick={() => {}} 
                    />

                    <Button
                      size='sm'
                      className='projects-icon-button1'
                      kind='ghost' 
                      renderIcon={() => <Save size={24} />}
                      iconDescription="Save Project Name" 
                      hasIconOnly 
                      onClick={() => {}} 
                    />
                  </ButtonSet> */}
                </span>

                <ButtonSet>
                    <Button
                        kind='secondary' 
                        renderIcon={Tools}
                        iconDescription="Fine Tune with Selected Settings"
                        onClick={() => {}}
                    >
                        Run
                    </Button>
                </ButtonSet>
              </Column>

              <Column Column lg={16} md={8} sm={4}>
                <p
                  className='page__banner--description'
                >
                    Explore, learn, and build—your place for projects, models, datasets and tutorials.
                </p>
              </Column>
            </Grid>
        </Column>
    </Grid>
  )
}

export default page