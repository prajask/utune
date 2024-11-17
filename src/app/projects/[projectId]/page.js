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
    Slider,
} from '@carbon/react';

import {
    Analytics,
    MachineLearningModel,
    DocumentMultiple_02,
    Roadmap

} from '@carbon/icons-react';
import HyperparameterDescription from '@/components/HyperparameterDescription/HyperparameterDescription';

const ProjectDetails = ({ params }) => {

    const [project, setProject] = useState(null)
 
    useEffect(() => {
      async function fetchProject() {
        let res = await fetch(`http://localhost:3333/projects/${params.projectId}`);
        let data = await res.json();
        setProject(data);
      }
      fetchProject();
    }, [])

    const hyperparameters = [
        {
            "id": "learning_rate",
            "title": "Learning Rate",
            "description": "The learning rate is similar to your bike’s speed. If you go too fast, you might fall, but if you go too slow, it takes forever to get to your destination.",
            "icon": <MachineLearningModel size={24} />
        },

        {
            "id": "batch_size",
            "title": "Batch Size",
            "description": "Batch size is similar to how many times you get on a bike in a day. Practicing less takes less energy and is faster. Practicing more takes more energy but will make you better.",
            "icon": <DocumentMultiple_02 size={24} />
        },

        {
            "id": "number_of_epochs",
            "title": "Number of Epochs",
            "description": "An epoch is similar to a day of riding your bike. The more days you practice, the better you’ll get. If you practice for too many days, you might not have time for other hobbies.",
            "icon": <Roadmap size={24} />
        }
    ]

  return (
    project &&
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--projects">
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                    <a href="/">Playground</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="/">Projects</a>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <a href="/">{project.name}</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="page__banner--heading page__banner--heading-with-tabs">
                <Analytics
                    size={24}
                />
                {project.name}
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
                                <h3>Description</h3>
                                <p>
                                    {project.description}
                                </p>
                            </Column>
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                    </TabPanel>

                    <TabPanel>
                        <Grid className="tab-panel--content hyperparameters">
                            {
                                hyperparameters.map((hyperparameter) => (
                                    <Column md={8} lg={16} sm={8}>
                                        <HyperparameterDescription
                                            hyperparameter={hyperparameter}
                                        />
                                        <Slider
                                            max={100} 
                                            min={0} 
                                            value={project.hyperparameters[hyperparameter.id]}
                                            className='hyperparameter--slider'
                                        />
                                    </Column>
                                ))
                            }
                            {/* <Column md={8} lg={16} sm={8}>
                                <HyperparameterDescription/>
                                <Slider
                                    max={100} 
                                    min={0} 
                                    value={50}
                                    className='hyperparameter--slider'
                                />
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <HyperparameterDescription/>
                                <Slider
                                    max={100} 
                                    min={0} 
                                    value={50}
                                    className='hyperparameter--slider'
                                />
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <HyperparameterDescription/>
                                <Slider
                                    max={100} 
                                    min={0} 
                                    value={50}
                                    className='hyperparameter--slider'
                                />
                            </Column> */}
                        </Grid>
                    </TabPanel>

                    <TabPanel>
                        <Grid className="tab-panel--content">
                        </Grid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Column>
    </Grid>
  )
}

export default ProjectDetails