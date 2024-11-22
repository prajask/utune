'use client';

import {
    Grid,
    Column,
    Breadcrumb,
    BreadcrumbItem
} from '@carbon/react';

import {
    IbmGranite,
    Tuning,
    ModelAlt,
    Analytics,
    Demo,
    Activity,
    Bullhorn
} from '@carbon/icons-react';

import PlaygroundLink from '@/components/PlaygroundLink/PlaygroundLink';

const page = () => {

    const links = [
        {
            "title": "Projects",
            "link": "/projects",
            "classname": "playground-link--projects",
            "icon": <Tuning size={28} />,
            "description": "View your projects"
        },
        {
            "title": "Models",
            "link": "/models",
            "classname": "playground-link--models",
            "icon": <ModelAlt size={28} />,
            "description": "Explore model catalog"
        },
        {
            "title": "Datasets",
            "link": "/datasets",
            "classname": "playground-link--datasets",
            "icon": <Analytics size={28} />,
            "description": "Explore dataset catalog"
        },
        {
            "title": "Tutorials",
            "link": "/tutorials",
            "classname": "playground-link--tutorials",
            "icon": <Demo size={28} />,
            "description": "Learn about fine-tuning"
        }
    ];

    const EXPLORE_LINKS = [
        {
            "title": "Trending",
            "link": "/",
            "icon": <Activity size={28} />,
            "description": "View trending communtity posts"
        },
        {
            "title": "Featured",
            "link": "/",
            "icon": <Bullhorn size={28} />,
            "description": "Explore featured community posts"
        },
    ]

  return (
    <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="page__banner">
            <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                    <a href="/">Playground</a>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="page__banner--heading">
                <IbmGranite
                    size={32}
                />
                
                Playground
            </h1>

            <p
                className='page__banner--description'
            >
                Explore, learn, and build—your place for projects, models, datasets and tutorials.
            </p>
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

                <Column lg={16} md={8} sm={4}>
                    <h3
                        className='explore-section--heading'
                    >
                        Explore
                    </h3>
                </Column>

                <Column lg={16} md={8} sm={4}>
                    <Grid fullWidth>
                        {
                            EXPLORE_LINKS.map(
                                (link) => (
                                    <Column lg={8} md={8} sm={8}
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
        </Column>
    </Grid>
  )
}

export default page