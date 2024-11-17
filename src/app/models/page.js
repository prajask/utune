"use client";

import { useState, useEffect } from 'react';

import Card from '@/components/Card/Card';
import {
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  Column,
  SkeletonPlaceholder
} from '@carbon/react';

import{
  ModelAlt
} from '@carbon/icons-react';

  const ModelsPage = () => {

    const [models, setModels] = useState(null)
 
    useEffect(() => {
      async function fetchModels() {
        let res = await fetch('http://localhost:3333/models')
        let data = await res.json()
        setModels(data)
      }
      fetchModels()
    }, [])

    return (
      <Grid className="page" fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--models">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Playground</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <a href="/">Models</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="page__banner--heading">
            <ModelAlt
              size={32}
            />
            Models
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className='page__content'>
          <Grid className='card__grid'>
            {
              models ? 
              models.map((model) => (
                <Column md={4} lg={8} sm={4} key={model.id}>
                  <Card data={model} />
                </Column>
              )
              )
              : <SkeletonPlaceholder />
            }
          </Grid>
        </Column>
      </Grid>
    );
};

export default ModelsPage;
