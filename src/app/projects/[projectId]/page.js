'use client';

import { useState, useEffect, useRef } from 'react';

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
    Form,
    Button,
    TextInput,
    ProgressBar
} from '@carbon/react';

import {
    Tuning,
    MachineLearningModel,
    DocumentMultiple_02,
    Roadmap,
    Edit,
    Save,
    Close,
    Tools
} from '@carbon/icons-react';

import { LollipopChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';

import HyperparameterDescription from '@/components/HyperparameterDescription/HyperparameterDescription';
import ProjectBaseModel from '@/components/ProjectBaseModel/ProjectBaseModel';
import ProjectDatasetsList from '@/components/ProjectDatasetsList/ProjectDatasetsList';
import ProjectAddDataset from '@/components/ProjectAddDataset/ProjectAddDataset';

const ProjectDetails = ({ params }) => {

    const [project, setProject] = useState(null);

    const [editProjectName, setEditProjectName] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectNameInput, setProjectNameInput] = useState('');

    async function patchProjectName() {
        try{
            let res = await fetch(`http://localhost:3333/projects/${params.projectId}`,
                {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: projectNameInput })
                }
            )
        }
        catch(error){
            console.log(error);
        }
        finally{
            setProjectName(projectNameInput)
            setEditProjectName(false);
        }
    }

    useEffect(() => {
      async function fetchProject() {
        let res = await fetch(`http://localhost:3333/projects/${params.projectId}`);
        let data = await res.json();
        setProject(data);
        
        setProjectNameInput(data.name);
        setProjectName(data.name);

        setProjectDescriptionInput(data.description);
        setProjectDescription(data.description);
      }
      fetchProject();
    }, [])

    const [editProjectDescription, setEditProjectDescription] = useState(false);
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDescriptionInput, setProjectDescriptionInput] = useState('');

    async function patchProjectDescription() {
        try{
            let res = await fetch(`http://localhost:3333/projects/${params.projectId}`,
                {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ description: projectDescriptionInput })
                }
            )
        }
        catch(error){
            console.log(error);
        }
        finally{
            setProjectDescription(projectDescriptionInput);
            setEditProjectDescription(false);
        }
    }

    const [runEnabled, setRunEnabled] = useState(true);
    const [running, setRunning] = useState(false);

    const [progress, setProgress] = useState(0);
    const [chartData, setChartData] = useState([]);
    const progressRef = useRef(progress);
    const chartDataRef = useRef(chartData);
    const intervalIdRef = useRef(null);

      const chartOptions = {
        title: 'Accuracy per Epoch',
        axes: {
            bottom: {
                mapsTo: 'group',
                scaleType: 'labels',
            },
            left: {
                mapsTo: 'value',
                scaleType: 'linear',
            },
        },
        legend: false,
        height: '400px',
      }
    
      useEffect(() => {
        if(running){
            intervalIdRef.current = setInterval(fineTuningProgress, 1000);
        }

        return () => {
            if(intervalIdRef.current) clearInterval(intervalIdRef.current);
        }

      }, [running])

      function fineTuningProgress(){
        setProgress(
            (prevProgress) => {
                const newProgress = prevProgress + 10;
                if (newProgress >= 100) {
                    clearInterval(intervalIdRef.current);
                    setRunning(false);
                    setRunEnabled(true);
                    setActiveTabIndex(0);
                    return 100;
                }
                return newProgress;
            }
        );

        setChartData((prevData) => {
            const newValue = Math.round(Math.random() * 100);
            return [...prevData, { group: `Epoch ${prevData.length + 1}`, value: newValue }];
        });
      }

      useEffect(() => {
        console.log(progress);
        console.log(chartData);
      }, [progress, chartData])

      function fineTune(){
        setActiveTabIndex(4);
        setRunning(true);
        setRunEnabled(false);
      }

      const [activeTabIndex, setActiveTabIndex] = useState(0);

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
        <Column lg={16} md={8} sm={4} 
            className="page__banner"
        >
            <Grid fullWidth>
              <Column Column lg={16} md={8} sm={4}>
                <Breadcrumb noTrailingSlash>
                    <BreadcrumbItem>
                        <a href="/">Playground</a>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <a href="/projects">Projects</a>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <a href={`/projects/${project.id}`}>{projectName}</a>
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
                        flexGrow: editProjectName && '1'
                    }
                }
                >
                  <Tuning
                    size={32}
                  />

                  {
                    editProjectName
                    ? <Form
                        style={
                            {
                                flexGrow: '1'
                            }
                        }
                    >
                        <TextInput 
                            id="project-name" 
                            type="text"
                            value={projectNameInput}
                            onChange={(e) => setProjectNameInput(e.target.value)}
                            style={
                                {
                                    width: "100%"
                                }
                            }
                        />
                    </Form>

                    : <h2>
                        {projectName}
                    </h2>
                  }

                  {
                    editProjectName
                    ? <span
                        className='page__banner--heading-button-set'
                    >
                        <Button
                            size='sm'
                            className='projects-icon-button1'
                            kind='ghost' 
                            renderIcon={() => <Save size={24} />}
                            iconDescription="Save Project Name" 
                            hasIconOnly 
                            onClick={patchProjectName} 
                        />

                        <Button
                            size='sm'
                            className='projects-icon-button1'
                            kind='ghost' 
                            renderIcon={() => <Close size={24} />}
                            iconDescription="Close" 
                            hasIconOnly 
                            onClick={() => setEditProjectName(false)} 
                        />
                    </span>

                    : <Button
                        size='sm'
                        className='projects-icon-button1'
                        kind='ghost' 
                        renderIcon={() => <Edit size={24} />}
                        iconDescription="Edit Project Name" 
                        hasIconOnly 
                        onClick={() => setEditProjectName(true)} 
                    />
                  }
                </span>

                <span
                    className='page__banner--heading-button-set'
                >
                    <Button
                        size='sm'
                        kind='secondary' 
                        renderIcon={Tools}
                        iconDescription="Fine Tune with Selected Settings"
                        onClick={fineTune} 
                        disabled={!runEnabled}
                    >
                        Run
                    </Button>
                </span>
              </Column>
            </Grid>
        </Column>
        
        <Column lg={16} md={8} sm={4} 
            className="tabs-page"
        >
            <Tabs
                selectedIndex={activeTabIndex}
                onChange={(e) => setActiveTabIndex(e.selectedIndex)}
            >
                <TabList
                    className="tabs-group"
                >
                    <Tab>Overview</Tab>
                    
                    <Tab>Test</Tab>
                    
                    <Tab>Hyperparameters</Tab>
                    
                    <Tab>Iterations</Tab>

                    {
                        running && 
                        <Tab>
                            Status
                        </Tab>
                    }
                </TabList>

                <TabPanels>
                    {/* Overview Panel */}
                    <TabPanel>
                        <Grid
                            className="tab-panel--content"
                        >
                            <Column md={8} lg={16} sm={8}>
                                <div
                                    className='project-description--header-wrapper'
                                >
                                    <h3>Description</h3>
                                    
                                    {
                                        editProjectDescription
                                        ? <>
                                            <Button
                                                kind='ghost' 
                                                renderIcon={Save}
                                                iconDescription="Save Project Description" 
                                                hasIconOnly 
                                                onClick={patchProjectDescription} 
                                                className='projects-icon-button'
                                            />

                                            <Button
                                                kind='ghost' 
                                                renderIcon={Close}
                                                iconDescription="Close" 
                                                hasIconOnly 
                                                onClick={() => setEditProjectDescription(false)}
                                                className='projects-icon-button' 
                                            />
                                        </>
                                        : <Button
                                            kind='ghost' 
                                            renderIcon={Edit}
                                            iconDescription="Edit Project Name" 
                                            hasIconOnly 
                                            onClick={() => setEditProjectDescription(true)}
                                            className='projects-icon-button'
                                        />
                                    }
                                </div>
                                
                                {
                                    editProjectDescription
                                    ? <TextInput 
                                        id="project-description" 
                                        type="text"
                                        value={projectDescriptionInput}
                                        onChange={(e) => setProjectDescriptionInput(e.target.value)}
                                        style={
                                            {
                                                flexGrow: editProjectDescription && '1',
                                                width: editProjectDescription && '100%'
                                            }
                                        }
                                    />
                                    : <p>
                                        {projectDescription}
                                    </p>
                                }
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Base Model</h3>
                                
                                <ProjectBaseModel
                                    baseModelId={project.base_model_id}
                                    baseModelName={project.base_model_name}
                                />
                            </Column>

                            <Column md={8} lg={16} sm={8}>
                                <h3>Datasets</h3>

                                <ProjectDatasetsList
                                    datasets={project.datasets}
                                />

                                <ProjectAddDataset />
                            </Column>
                        </Grid>
                    </TabPanel>

                    {/* Test Panel */}
                    <TabPanel>
                    </TabPanel>

                    {/* Hyperparameters Panel */}
                    <TabPanel>
                        <Grid
                            className="tab-panel--content hyperparameters"
                        >
                            {
                                hyperparameters.map((hyperparameter) => (
                                    <Column md={8} lg={16} sm={8}
                                        key={hyperparameter.id}
                                    >
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
                        </Grid>
                    </TabPanel>

                    {/* Iterations Panel */}
                    <TabPanel>
                        <Grid
                            className="tab-panel--content"
                        >
                        </Grid>
                    </TabPanel>

                    {/* Status Panel */}
                    {
                        running &&
                        <TabPanel>
                            <Grid
                                className="tab-panel--content"
                            >
                                <Column lg={16}
                                >
                                    <ProgressBar
                                        label="Fine-Tuning Progress"
                                        value={progress}
                                        max={100}
                                        className='fine-tuning--progress-bar'
                                    />
                                </Column>

                                <Column lg={16}
                                >
                                    <LollipopChart
                                        data={chartData}
                                        options={chartOptions}
                                    />
                                </Column>
                            </Grid>
                        </TabPanel>
                    }
                </TabPanels>
            </Tabs>
        </Column>
    </Grid>
  )
}

export default ProjectDetails