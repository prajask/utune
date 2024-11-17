'use client';

import { useRouter } from 'next/navigation';
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

const DatasetDetails = ({ params }) => {
    console.log(`http://localhost:3333/datasets/${params.datasetId}`);

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
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--datasets">
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                    <a href="/">Playground</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/">Datasets</a>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <a href="/">{dataset.name}</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="page__banner--heading page__banner--heading-with-tabs">
                <Analytics
                    size={24}
                />
                {dataset.name}
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