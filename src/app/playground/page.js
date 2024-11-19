'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
    Grid,
    Column,
    Breadcrumb,
    BreadcrumbItem
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

const page = () => {

    const links = [
        {
            "title": "Projects",
            "link": "/projects",
            "classname": "playground-link--projects",
            "pictogram": <Control />
        },
        {
            "title": "Models",
            "link": "/models",
            "classname": "playground-link--models",
            "pictogram": <Container />
        },
        {
            "title": "Datasets",
            "link": "/datasets",
            "classname": "playground-link--datasets",
            "pictogram": <DataSet />
        },
        {
            "title": "Tutorials",
            "link": "/tutorials",
            "classname": "playground-link--tutorials",
            "pictogram": <SupplyChainOptimization_01 />
        }
    ];

  return (
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner page__banner--playground">
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                    <a href="/">Playground</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="page__banner--heading heading_before_tabs">
                <IbmGranite
                    size={24}
                />
                
                Playground
            </h1>
        </Column>
        
        <Column lg={16} md={8} sm={4} className='page__content'>
            <Grid fullWidth>
                {
                    links.map(
                        (link) => (
                            <Column lg={4} md={4} sm={4}
                                key={link.title}
                            >
                                <PlaygroundLink
                                    link={link}
                                />
                            </Column>
                        )
                    )
                }
            </Grid>
        </Column>
    </Grid>
  )
}

export default page