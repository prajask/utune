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
    TabPanel
} from '@carbon/react';

import {
    Analytics
} from '@carbon/icons-react';

import ModelNutrition from '@/components/ModelNutrition/ModelNutrition';

const ModelDetails = ({ params }) => {

    const [model, setModel] = useState(null)
 
    useEffect(() => {
      async function fetchModel() {
        let res = await fetch(`http://localhost:3333/models/${params.modelId}`)
        let data = await res.json()
        setModel(data)
      }
      fetchModel()
    }, [])

  return (
    model &&
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--models">
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                    <a href="/">Playground</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/">Models</a>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <a href="/">{model.name}</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="page__banner--heading page__banner--heading-with-tabs">
                <Analytics
                    size={24}
                />
                {model.name}
            </h1>
        </Column>
        
        <Column lg={16} md={8} sm={4} className="tabs-page">
            <Tabs 
                defaultSelectedIndex={0}
            >
                <TabList
                    className="tabs-group"
                >
                    <Tab>Overview</Tab>
                    <Tab>Test</Tab>
                    <Tab>Hyperparameters</Tab>
                    <Tab>Iterations</Tab>
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
                                <ModelNutrition/>
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