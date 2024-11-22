"use client";

import { useState, useEffect } from 'react';

import Card from '@/components/Card/Card';

import {
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  Column,
  Loading,
  Button,
  ExpandableSearch
} from '@carbon/react';

import {
  Analytics,
  Filter,
  ArrowsVertical
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
        <Column lg={16} md={8} sm={4} className="page__banner">
          <Grid fullWidth>
              <Column Column lg={16} md={8} sm={4}>
                <Breadcrumb noTrailingSlash>
                  <BreadcrumbItem>
                    <a href="/">Playground</a>
                  </BreadcrumbItem>

                  <BreadcrumbItem isCurrentPage>
                    <a href="/datasets">Datasets</a>
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
                    Datasets
                  </h2>
                </span>

                <span
                  className='page__banner--heading-button-set'
                >
                  <ExpandableSearch size="sm" labelText="Search" closeButtonLabelText="Clear search input" id="search-expandable-1" onChange={() => {}} onKeyDown={() => {}} />

                  <Button
                    size='sm'
                    kind='secondary' 
                    renderIcon={Filter}
                    iconDescription="Filter Datasets"
                    onClick={() => {}}
                  >
                    Filter
                  </Button>

                  <Button
                    size='sm'
                    kind='secondary' 
                    renderIcon={ArrowsVertical}
                    iconDescription="Sort Datasets"
                    onClick={() => {}}
                  >
                    Sort
                  </Button>
                </span>
              </Column>

              <Column Column lg={16} md={8} sm={4}>
                <p
                  className='page__banner--description'
                >
                    Browse datasets  and easily add them to your projects.
                </p>
              </Column>
            </Grid>
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
              : <Column lg={16} md={8} sm={4}>
                  <div
                    className='page--loading'
                  >
                    <Loading
                      withOverlay={false}
                    />
                  </div>
              </Column>
            }
          </Grid>
        </Column>
      </Grid>
    );
};

export default DatasetsPage;
