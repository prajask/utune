'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
    Grid,
    Column,
    Breadcrumb,
    BreadcrumbItem,
    SkeletonPlaceholder
} from '@carbon/react';

import {
    IbmGranite
} from '@carbon/icons-react';

import {
    SupplyChainOptimization_01,
    Control,
    Container,
    DataSet
} from '@carbon/pictograms-react';

import PlaygroundLink from '@/components/PlaygroundLink/PlaygroundLink';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const page = () => {

    const [projects, setProjects] = useState(null)
 
    useEffect(() => {
      async function fetchProjects() {
        let res = await fetch('http://localhost:3333/projects')
        let data = await res.json()
        setProjects(data)
      }
      fetchProjects()
    }, [])

  return (
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--projects">
            <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
                <a href="/">Playground</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <a href="/projects">Projects</a>
            </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="page__banner--heading heading_before_tabs">
                <IbmGranite
                    size={24}
                />
                Projects
            </h1>
        </Column>
        
        <Column lg={16} md={8} sm={4} className='page__content'>
          <Grid className='card__grid'>
            {
              projects ? 
              projects.map((project) => (
                <Column md={4} lg={4} sm={4} key={project.id}>
                  <ProjectCard
                    data={project}
                  />
                </Column>
              )
              )
              : <SkeletonPlaceholder />
            }
          </Grid>
        </Column>
    </Grid>
  )
}

export default page