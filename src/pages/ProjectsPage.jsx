import React from 'react';
import {Typography, Box, Card, Stack, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import Tag from '../components/Tag';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useTranslation} from 'react-i18next';

const GroupDisplayer = ({iconSrc, altText, name}) => (
    <Stack direction={{xs: 'row'}} spacing={2} alignItems="center">
        <Box
            sx={{
                height: {xs: '40px', sm: '40px', md: '40px'},
                maxWidth: '40px', // 限制宽度
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden', // 避免图片超出
            }}
        >
            <img src={iconSrc} alt={altText} style={{width: '100%', height: 'auto', objectFit: 'contain'}}/>
        </Box>
        <Typography variant="h6" sx={{fontSize: {xs: 18, sm: 18, md: 20}, textAlign: 'left', fontWeight: 600}}>
            {name}
        </Typography>
    </Stack>
);

const ProjectCard = ({title, imgSrc, description, link, tag, tagColor = '#e0e0e0', tags = []}) => {

    const styles = {
        card: {
            width: '100%',
            maxWidth: {xs: '100%', sm: '400px', md: '500px'},
            padding: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            textAlign: 'center',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginBottom: '16px',
        },
        tag: {
            backgroundColor: tagColor,
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
        },
        titleLink: {
            color: '#1976d2',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
            },
        },
    };

    const handleTitleClick = () => {
        if (!link) return;

        const currentOrigin = window.location.origin;
        const fullUrl = link.startsWith('http') ? link : `${currentOrigin}${link}`;
        window.open(fullUrl, '_blank');
    };

    return (
        <Card sx={styles.card}>
            <Stack direction="column" spacing={2} alignItems="center">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: {sm: 'space-between'},
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Typography
                        component={link ? "a" : "div"}
                        onClick={link ? handleTitleClick : undefined}
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            flex: 1,
                            ...(link && styles.titleLink),
                        }}
                    >
                        {title}
                    </Typography>
                    {tag && (
                        <Box sx={styles.tag}>
                            {tag}
                        </Box>
                    )}
                </Box>

                <Stack
                    spacing={{xs: 1, sm: 2}}
                    direction="row"
                    useFlexGap
                    sx={{flexWrap: 'wrap'}}
                    alignItems="flex-start"
                >
                    {tags.map((tagData, index) => (
                        <Tag
                            key={index}
                            icon={tagData.icon}
                            category={tagData.category}
                            value={tagData.value}
                        />
                    ))}
                </Stack>

                {imgSrc && <img src={imgSrc} alt={title} style={styles.image}/>}
                <Typography>{description}</Typography>
            </Stack>
        </Card>
    );
};

const ProjectsPage = () => {
    const {t} = useTranslation();

    //TODO: Edit the project data

    const projectsData = [
        {
            id: 'siemens',
            image: '/assets/siemens.webp',
            name: t('projectsPage.siemens.name'),
            projects: [
                {
                    title: t('projectsPage.lego.projects.receipeEditor.title'),
                    imgSrc: '/assets/safeguard.webp',
                    description: t('projectsPage.lego.projects.receipeEditor.description'),
                    link: '/projects/lego/receipe-editor',
                    tag: t('projectsPage.lego.projects.receipeEditor.tag'),
                    // tagColor: '#16982b',
                    techStacks: []
                },
                {
                    title: t('projectsPage.lego.projects.receipeEditor.title'),
                    imgSrc: '/assets/collaboration_module.webp',
                    description: t('projectsPage.lego.projects.receipeEditor.description'),
                    link: '/projects/lego/receipe-editor',
                    tag: t('projectsPage.lego.projects.receipeEditor.tag'),
                    // tagColor: '#16982b',
                    techStacks: []
                },
            ],
        },
        {
            id: 'lego',
            image: '/assets/lego.webp',
            name: t('projectsPage.lego.name'),
            projects: [
                {
                    title: t('projectsPage.lego.projects.receipeEditor.title'),
                    imgSrc: '/assets/lego-robot-arm.webp',
                    description: t('projectsPage.lego.projects.receipeEditor.description'),
                    link: '/projects/lego/receipe-editor',
                    tag: t('projectsPage.lego.projects.receipeEditor.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/react.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack1.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/javascript.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack2.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/net.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack3.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack3.value')
                        },
                        {
                            icon: "/assets/c-sharp.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack4.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack4.value')
                        },
                        {
                            icon: "/assets/mysql.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack5.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack5.value')
                        },
                        {
                            icon: "/assets/github.webp",
                            category: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack6.category'),
                            value: t('projectsPage.lego.projects.receipeEditor.techStacks.techStack6.value')
                        }
                    ]
                },
                {
                    title: t('projectsPage.lego.projects.plcConnect.title'),
                    imgSrc: '/assets/lego-factory.webp',
                    description: t('projectsPage.lego.projects.plcConnect.description'),
                    tag: t('projectsPage.lego.projects.plcConnect.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/blazor.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack1.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/net.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack2.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/c-sharp.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack3.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack3.value')
                        },
                        {
                            icon: "/assets/api.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack4.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack4.value')
                        },
                        {
                            icon: "/assets/mysql.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack5.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack5.value')
                        },
                        {
                            icon: "/assets/github.webp",
                            category: t('projectsPage.lego.projects.plcConnect.techStacks.techStack6.category'),
                            value: t('projectsPage.lego.projects.plcConnect.techStacks.techStack6.value')
                        }
                    ]
                },
            ],
        },
        {
            id: 'lexcom',
            image: '/assets/lexcom.webp',
            name: t('projectsPage.lexcom.name'),
            projects: [
                {
                    title: t('projectsPage.lexcom.projects.pl24Upload.title'),
                    imgSrc: '/assets/lexcom-upload.webp',
                    description: t('projectsPage.lexcom.projects.pl24Upload.description'),
                    tag: t('projectsPage.lexcom.projects.pl24Upload.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/react.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack1.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/typescript.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack2.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/springboot.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack3.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack3.value')
                        },
                        {
                            icon: "/assets/kafka.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack4.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack4.value')
                        },
                        {
                            icon: "/assets/mongo.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack5.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack5.value')
                        },
                        {
                            icon: "/assets/gitlab.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack6.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack6.value')
                        },
                        {
                            icon: "/assets/oracle.webp",
                            category: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack7.category'),
                            value: t('projectsPage.lexcom.projects.pl24Upload.techStacks.techStack7.value')
                        }
                    ]
                },
                {
                    title: t('projectsPage.lexcom.projects.pl24Bidata.title'),
                    imgSrc: '/assets/lexcom-bidata.webp',
                    description: t('projectsPage.lexcom.projects.pl24Bidata.description'),
                    tag: t('projectsPage.lexcom.projects.pl24Bidata.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/springboot.webp",
                            category: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack1.category'),
                            value: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/kafka.webp",
                            category: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack2.category'),
                            value: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/postgre.webp",
                            category: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack3.category'),
                            value: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack3.value')
                        },
                        {
                            icon: "/assets/gitlab.webp",
                            category: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack4.category'),
                            value: t('projectsPage.lexcom.projects.pl24Bidata.techStacks.techStack4.value')
                        }
                    ]
                },
                {
                    title: t('projectsPage.lexcom.projects.pl24DealerMonitor.title'),
                    imgSrc: '/assets/lexcom-monitor.webp',
                    description: t('projectsPage.lexcom.projects.pl24DealerMonitor.description'),
                    tag: t('projectsPage.lexcom.projects.pl24DealerMonitor.tag'),
                    tagColor: '#ff8c00',
                    techStacks: [
                        {
                            icon: "/assets/react.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack1.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/typescript.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack2.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/springboot.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack3.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack3.value')
                        },
                        {
                            icon: "/assets/kafka.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack4.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack4.value')
                        },
                        {
                            icon: "/assets/mongo.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack5.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack5.value')
                        },
                        {
                            icon: "/assets/gitlab.webp",
                            category: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack6.category'),
                            value: t('projectsPage.lexcom.projects.pl24DealerMonitor.techStacks.techStack6.value')
                        }
                    ]
                },
            ],
        },
        {
            id: 'bmw',
            image: '/assets/bmw.webp',
            name: t('projectsPage.bmw.name'),
            projects: [
                {
                    title: t('projectsPage.bmw.projects.bmwNews.title'),
                    imgSrc: '/assets/bmw_news.webp',
                    description: t('projectsPage.bmw.projects.bmwNews.description'),
                    tag: t('projectsPage.bmw.projects.bmwNews.tag'),
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/android.webp",
                            category: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack1.category'),
                            value: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack1.value')
                        },
                        {
                            icon: "/assets/java.webp",
                            category: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack2.category'),
                            value: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack2.value')
                        },
                        {
                            icon: "/assets/api.webp",
                            category: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack3.category'),
                            value: t('projectsPage.bmw.projects.bmwNews.techStacks.techStack3.value')
                        }
                    ]
                },
            ],
        },
        {
            id: 'tum',
            image: '/assets/tum.webp',
            name: t('projectsPage.tum.name'),
            projects: [
                {
                    title: t('projectsPage.tum.projects.volMe.title'),
                    imgSrc: '/assets/volme.webp',
                    description: t('projectsPage.tum.projects.volMe.description'),
                    tag: t('projectsPage.tum.projects.volMe.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/react.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack1.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/javascript.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack2.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack2.value'),
                        },
                        {
                            icon: "/assets/redux.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack3.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack3.value'),
                        },
                        {
                            icon: "/assets/node-js.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack4.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack4.value'),
                        },
                        {
                            icon: "/assets/express-js.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack5.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack5.value'),
                        },
                        {
                            icon: "/assets/paypal.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack6.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack6.value'),
                        },
                        {
                            icon: "/assets/aws-s3.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack7.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack7.value'),
                        },
                        {
                            icon: "/assets/aws-ec2.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack8.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack8.value'),
                        },
                        {
                            icon: "/assets/ngnix.webp",
                            category: t('projectsPage.tum.projects.volMe.techStacks.techStack9.category'),
                            value: t('projectsPage.tum.projects.volMe.techStacks.techStack9.value'),
                        }
                    ]
                },
                {
                    title: t('projectsPage.tum.projects.bpmnGeneration.title'),
                    imgSrc: '/assets/thesis.webp',
                    description: t('projectsPage.tum.projects.bpmnGeneration.description'),
                    tag: t('projectsPage.tum.projects.bpmnGeneration.tag'),
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/python.webp",
                            category: t('projectsPage.tum.projects.bpmnGeneration.techStacks.techStack1.category'),
                            value: t('projectsPage.tum.projects.bpmnGeneration.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/spacy.webp",
                            category: t('projectsPage.tum.projects.bpmnGeneration.techStacks.techStack2.category'),
                            value: t('projectsPage.tum.projects.bpmnGeneration.techStacks.techStack2.value'),
                        },
                    ]
                },
                {
                    title: t('projectsPage.tum.projects.predictiveProcessMonitoring.title'),
                    imgSrc: '/assets/PPM.webp',
                    description: t('projectsPage.tum.projects.predictiveProcessMonitoring.description'),
                    tag: t('projectsPage.tum.projects.predictiveProcessMonitoring.tag'),
                    tagColor: '#005eff',
                },
                {
                    title: t('projectsPage.tum.projects.bamlAnalyticsCup.title'),
                    imgSrc: '/assets/ana_cup.webp',
                    description: t('projectsPage.tum.projects.bamlAnalyticsCup.description'),
                    tag: t('projectsPage.tum.projects.bamlAnalyticsCup.tag'),
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/python.webp",
                            category: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack1.category'),
                            value: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/sklearn.webp",
                            category: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack2.category'),
                            value: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack2.value'),
                        },
                        {
                            icon: "/assets/numpy.webp",
                            category: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack3.category'),
                            value: t('projectsPage.tum.projects.bamlAnalyticsCup.techStacks.techStack3.value'),
                        }
                    ]
                },
            ],
        },
        {
            id: 'personal',
            image: '/assets/user.webp',
            name: t('projectsPage.personal.name'),
            projects: [
                {
                    title: t('projectsPage.personal.projects.focusList.title'),
                    imgSrc: '/assets/FLen.webp',
                    description: t('projectsPage.personal.projects.focusList.description'),
                    tag: t('projectsPage.personal.projects.focusList.tag'),
                    tagColor: '#16982b',
                    techStacks: [
                        {
                            icon: "/assets/vue.webp",
                            category: t('projectsPage.personal.projects.focusList.techStacks.techStack1.category'),
                            value: t('projectsPage.personal.projects.focusList.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/javascript.webp",
                            category:  t('projectsPage.personal.projects.focusList.techStacks.techStack2.category'),
                            value: t('projectsPage.personal.projects.focusList.techStacks.techStack2.value'),
                        },
                        {
                            icon: "/assets/github.webp",
                            category: t('projectsPage.personal.projects.focusList.techStacks.techStack3.category'),
                            value: t('projectsPage.personal.projects.focusList.techStacks.techStack3.value'),
                        }
                    ]
                },
                {
                    title: t('projectsPage.personal.projects.emojiDiary.title'),
                    imgSrc: '/assets/emoji-dairy.webp',
                    description: t('projectsPage.personal.projects.emojiDiary.description'),
                    tag: t('projectsPage.personal.projects.emojiDiary.tag'),
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/apple.webp",
                            category: t('projectsPage.personal.projects.emojiDiary.techStacks.techStack1.category'),
                            value: t('projectsPage.personal.projects.emojiDiary.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/swift.webp",
                            category: t('projectsPage.personal.projects.emojiDiary.techStacks.techStack2.category'),
                            value: t('projectsPage.personal.projects.emojiDiary.techStacks.techStack2.value'),
                        }
                    ]
                },
                {
                    title: t('projectsPage.personal.projects.macQR.title'),
                    imgSrc: '/assets/mac-qr-scanner.webp',
                    description: t('projectsPage.personal.projects.macQR.description'),
                    tag: t('projectsPage.personal.projects.macQR.tag'),
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/apple.webp",
                            category: t('projectsPage.personal.projects.macQR.techStacks.techStack1.category'),
                            value: t('projectsPage.personal.projects.macQR.techStacks.techStack1.value'),
                        },
                        {
                            icon: "/assets/swift.webp",
                            category: t('projectsPage.personal.projects.macQR.techStacks.techStack2.category'),
                            value: t('projectsPage.personal.projects.macQR.techStacks.techStack2.value'),
                        }
                    ]
                }
            ],
        },
    ];

    return (
        <div style={{padding: '2rem', maxWidth: '100%', overflowX: 'hidden'}}>
            {projectsData.map((group) => (
                <Accordion key={group.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={`${group.id}-content`}
                        id={`${group.id}-header`}
                    >
                        <GroupDisplayer iconSrc={group.image} altText={group.id} name={group.name}/>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center'}}
                        >
                            {group.projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    imgSrc={project.imgSrc}
                                    description={project.description}
                                    link={project.link}
                                    tag={project.tag}
                                    tagColor={project.tagColor}
                                    tags={project.techStacks}
                                />
                            ))}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>

    );
};

export default ProjectsPage;
