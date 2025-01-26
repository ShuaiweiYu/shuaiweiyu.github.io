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
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'center',
                            flex: 1,
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

    //TODO: Edit the translation file
    //TODO: Edit the project data

    const projectsData = [
        {
            id: 'siemens',
            image: '/assets/siemens.webp',
            name: t('projectsPage.siemens.name'),
            projects: [],
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
                    title: t('projectsPage.tum.projects.bpmnGeneration.title'),
                    imgSrc: '/assets/thesis.webp',
                    description: t('projectsPage.tum.projects.bpmnGeneration.description'),
                    tag: '本科论文',
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/python.webp",
                            category: "后端",
                            value: "Python"
                        },
                        {
                            icon: "/assets/spacy.webp",
                            category: "后端",
                            value: "Spacy"
                        },
                    ]
                },
                {
                    title: t('projectsPage.tum.projects.predictiveProcessMonitoring.title'),
                    imgSrc: '/assets/PPM.webp',
                    description: t('projectsPage.tum.projects.predictiveProcessMonitoring.description'),
                    tag: '研讨会论文',
                    tagColor: '#005eff',
                },
                {
                    title: t('projectsPage.tum.projects.bamlAnalyticsCup.title'),
                    imgSrc: '/assets/ana_cup.webp',
                    description: t('projectsPage.tum.projects.bamlAnalyticsCup.description'),
                    tag: '课程竞赛',
                    tagColor: '#005eff',
                    techStacks: [
                        {
                            icon: "/assets/python.webp",
                            category: "后端",
                            value: "Python"
                        },
                        {
                            icon: "/assets/sklearn.webp",
                            category: "后端",
                            value: "sklearn"
                        },
                        {
                            icon: "/assets/numpy.webp",
                            category: "后端",
                            value: "NumPy"
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
                    tagColor: '#ff8c00',
                    techStacks: [
                        {
                            icon: "/assets/vue.webp",
                            category: "前端",
                            value: "Vue"
                        },
                        {
                            icon: "/assets/javascript.webp",
                            category: "前端",
                            value: "JavaScript"
                        },
                        {
                            icon: "/assets/github.webp",
                            category: "部署",
                            value: "Github Pages"
                        }
                    ]
                },
                {
                    title: t('projectsPage.personal.projects.emojiDiary.title'),
                    imgSrc: '/assets/emoji-dairy.webp',
                    description: t('projectsPage.personal.projects.emojiDiary.description'),
                    tagColor: '#ff8c00',
                    techStacks: [
                        {
                            icon: "/assets/apple.webp",
                            category: "客户端",
                            value: "iOS"
                        },
                        {
                            icon: "/assets/swift.webp",
                            category: "客户端",
                            value: "Swift"
                        }
                    ]
                },
                {
                    title: t('projectsPage.personal.projects.volMe.title'),
                    imgSrc: '/assets/volme.webp',
                    description: t('projectsPage.personal.projects.volMe.description'),
                    tagColor: '#ff8c00',
                    techStacks: [
                        {
                            icon: "/assets/react.webp",
                            category: "前端",
                            value: "React"
                        },
                        {
                            icon: "/assets/javascript.webp",
                            category: "前端",
                            value: "JavaScript"
                        },
                        {
                            icon: "/assets/redux.webp",
                            category: "前端",
                            value: "Redux"
                        },
                        {
                            icon: "/assets/node-js.webp",
                            category: "后端",
                            value: "Node.js"
                        },
                        {
                            icon: "/assets/express-js.webp",
                            category: "后端",
                            value: "Express.js"
                        },
                        {
                            icon: "/assets/paypal.webp",
                            category: "API",
                            value: "PayPal SDK"
                        },
                        {
                            icon: "/assets/aws-s3.webp",
                            category: "云技术",
                            value: "AWS S3"
                        },
                        {
                            icon: "/assets/aws-ec2.webp",
                            category: "云技术",
                            value: "AWS EC2"
                        },
                        {
                            icon: "/assets/ngnix.webp",
                            category: "运维",
                            value: "Ngnix"
                        }
                    ]
                },
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
