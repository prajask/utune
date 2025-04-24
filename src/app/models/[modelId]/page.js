'use client';

import { useState, useEffect } from 'react';

import {
    Grid,
    Column,
    Breadcrumb,
    BreadcrumbItem,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    ExpandableSearch,
    Button
} from '@carbon/react';

import {
    Add,
    ModelAlt
} from '@carbon/icons-react';

import ModelNutrition from '@/components/ModelNutrition/ModelNutrition';

const ModelDetails = ({ params }) => {

    const [model, setModel] = useState(null)

    const MODEL_API_PATH = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_MODELS_PATH}/${params.modelId}`;
 
    useEffect(() => {
      async function fetchModel() {
        let res = await fetch(MODEL_API_PATH)
        let data = await res.json()
        setModel(data)
      }
      fetchModel()
    }, [])

  return (
    model &&
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner">
            <Grid fullWidth>
              <Column Column lg={16} md={8} sm={4}>
                <Breadcrumb noTrailingSlash>
                    <BreadcrumbItem>
                        <a href="/">Playground</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <a href="/models">Models</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <a href={`/models/${model.id}`}>{model.name}</a>
                    </BreadcrumbItem>
                </Breadcrumb>
              </Column>

              <Column lg={16} md={8} sm={4}
                className='page__banner--heading-container'
              >
                <span
                  className="page__banner--heading"
                >
                  <ModelAlt
                    size={32}
                  />

                  <h2>
                    {model.name}
                  </h2>
                </span>

                <span
                  className='page__banner--heading-button-set'
                >
                  <Button
                    size='sm'
                    kind='secondary' 
                    renderIcon={Add}
                    iconDescription="Add this model to a project"
                    onClick={() => {}}
                  >
                    Add to Project
                  </Button>
                </span>
              </Column>
            </Grid>
        </Column>
        
        <Column lg={16} md={8} sm={4} className="tabs-page">
            <Tabs 
                defaultSelectedIndex={0}
            >
                <TabList
                    className="tabs-group"
                >
                    <Tab>Overview</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Community</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Grid className="tab-panel--content">
                            <Column md={8} lg={16} sm={8}>
                                <h3>About</h3>
                                <p>
                                    {model.about}
                                </p>
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Use Cases</h3>
                                <p>
                                    {model.use_cases}
                                </p>
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <ModelNutrition
                                    nutritionalInfo={model.nutritional_info}
                                />
                            </Column>
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid className="tab-panel--content">
                            
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid className="tab-panel--content">
                            <Column md={8} lg={16} sm={8}>
                                <h3>About</h3>
                                <p>
                                    {model.about}
                                </p>
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Use Cases</h3>
                                <p>
                                    {model.use_cases}
                                </p>
                            </Column>
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid className="tab-panel--content">
                            <Column md={8} lg={16} sm={8}>
                                <h3>About</h3>
                                <p>
                                    {model.about}
                                </p>
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Use Cases</h3>
                                <p>
                                    {model.use_cases}
                                </p>
                            </Column>
                        </Grid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Column>
    </Grid>
  )
}

export default ModelDetails