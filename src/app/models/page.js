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

import{
  ModelAlt,
  Filter,
  ArrowsVertical
} from '@carbon/icons-react';

  const ModelsPage = () => {

    const [models, setModels] = useState(null)

    const MODELS_API_PATH = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_MODELS_PATH}`;
 
    useEffect(() => {
      async function fetchModels() {
        let res = await fetch(MODELS_API_PATH)
        let data = await res.json()
        setModels(data)
      }
      fetchModels()
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
                  <a href="/models">Models</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Column>

            <Column lg={16} md={8} sm={4}
              className='page__banner--heading-container'
            >
              <span
                className="page__banner--heading"
              >
                <ModelAlt
                  size={32}
                />

                <h2>
                  Models
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
                  Browse models and easily add them to your projects.
              </p>
            </Column>
          </Grid>
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

export default ModelsPage;
