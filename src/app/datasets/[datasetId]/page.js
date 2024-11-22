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
    Button
} from '@carbon/react';

import {
    Add,
    Analytics
} from '@carbon/icons-react';

const DatasetDetails = ({ params }) => {
    const [dataset, setDataset] = useState(null)
 
    useEffect(() => {
      async function fetchDataset() {
        let res = await fetch(`http://localhost:3333/datasets/${params.datasetId}`)
        let data = await res.json()
        setDataset(data)
      }
      fetchDataset()
    }, [])

  return (
    dataset &&
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner">
            <Grid fullWidth>
              <Column Column lg={16} md={8} sm={4}>
                <Breadcrumb noTrailingSlash>
                    <BreadcrumbItem>
                        <a href="/">Playground</a>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <a href="/datasets">Datasets</a>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <a href={`/datasets/${dataset.id}`}>{dataset.name}</a>
                    </BreadcrumbItem>
                </Breadcrumb>
              </Column>

              <Column lg={16} md={8} sm={4}
                className='page__banner--heading-container1'
              >
                <span
                  className="page__banner--heading1"
                >
                  <Analytics
                    size={32}
                  />

                  <h2>
                    {dataset.name}
                  </h2>
                </span>

                <span
                    className='page__banner--heading-button-set'
                >
                    <Button
                        size='sm'
                        kind='secondary' 
                        renderIcon={Add}
                        iconDescription="Add this dataset to a project"
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
                    <Tab>Insights</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Grid className="tab-panel--content">
                            <Column md={8} lg={16} sm={8}>
                                <h3>About</h3>
                                <p>
                                    {dataset.about}
                                </p>
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Use Cases</h3>
                                <p>
                                    {dataset.use_cases}
                                </p>
                            </Column>
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid>
                        <Column lg={16} md={8} sm={4}>
                            <p>
                            Rapidly build beautiful and accessible experiences. The Carbon kit
                            contains all resources you need to get started.
                            </p>
                        </Column>
                        </Grid>
                    </TabPanel>
                    
                    <TabPanel>
                        <Grid>
                        <Column lg={16} md={8} sm={4}>
                            <p>
                            Carbon provides styles and components in Vanilla, React, Angular,
                            and Vue for anyone building on the web.
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

export default DatasetDetails