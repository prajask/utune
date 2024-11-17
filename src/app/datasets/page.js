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

import {
  Analytics
} from '@carbon/icons-react';

  const DatasetsPage = () => {

    const [datasets, setDatasets] = useState(null)
 
    useEffect(() => {
      async function fetchDatasets() {
        let res = await fetch('http://localhost:3333/datasets')
        let data = await res.json()
        setDatasets(data)
      }
      fetchDatasets()
    }, [])

    return (
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--datasets">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Playground</a>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <a href="/">Datasets</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="page__banner--heading">
            <Analytics
              size={32}
            />
            Datasets
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className='page__content'>
          <Grid className='card__grid'>
            {
              datasets ? 
              datasets.map((dataset) => (
                <Column md={4} lg={8} sm={4} key={dataset.id}>
                  <Card data={dataset} />
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

export default DatasetsPage;
