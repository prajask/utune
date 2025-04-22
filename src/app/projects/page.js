'use client';

import { useState, useEffect } from 'react';

import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Loading,
  Button,
} from '@carbon/react';

import { Tuning, Add } from '@carbon/icons-react';

import ProjectCard from '@/components/ProjectCard/ProjectCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      let res = await fetch('http://localhost:3333/projects');
      let data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <Grid fullWidth>
      <Column lg={16} md={8} sm={4} className="page__banner">
        <Grid fullWidth>
          <Column Column lg={16} md={8} sm={4}>
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">Playground</a>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <a href="/projects">Projects</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Column>

          <Column
            lg={16}
            md={8}
            sm={4}
            className="page__banner--heading-container"
          >
            <span className="page__banner--heading">
              <Tuning size={32} />

              <h2>Projects</h2>
            </span>

            <span className="page__banner--heading-button-set">
              <Button
                size="sm"
                kind="secondary"
                renderIcon={Add}
                iconDescription="Create a new project"
                onClick={() => {}}
              >
                New Project
              </Button>
            </span>
          </Column>

          <Column Column lg={16} md={8} sm={4}>
            <p className="page__banner--description">
              Access all your projects or start a new one.
            </p>
          </Column>
        </Grid>
      </Column>

      <Column lg={16} md={8} sm={4} className="page__content">
        <Grid className="card__grid">
          {projects ? (
            projects.map((project) => (
              <Column md={4} lg={8} sm={4} key={project.id}>
                <ProjectCard data={project} />
              </Column>
            ))
          ) : (
            <Column lg={16} md={8} sm={4}>
              <div className="page--loading">
                <Loading withOverlay={false} />
              </div>
            </Column>
          )}
        </Grid>
      </Column>
    </Grid>
  );
};

export default ProjectsPage;
