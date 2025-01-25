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
            <img src={iconSrc} alt={altText} style={{width: '100%', height: 'auto', objectFit: 'contain'}} />
        </Box>
        <Typography variant="h6" sx={{fontSize: {xs: 18, sm: 18, md: 20}, textAlign: 'left', fontWeight: 600}}>
            {name}
        </Typography>
    </Stack>
);

const ProjectCard = ({ title, imgSrc, description, link, tag, tagColor = '#e0e0e0' }) => {
    const styles = {
        card: {
            width: '100%',
            maxWidth: { xs: '100%', sm: '400px', md: '500px' },
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
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: { sm: 'space-between' },
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
                    <Tag icon={"/assets/react.png"} category={"前端"} value={"React"} />
                    <Tag icon={"/assets/springboot.webp"} category={"后端"} value={"SpringBoot"} />
                    <Tag icon={"/assets/mysql.png"} category={"数据库"} value={"MySQL"} />
                    <Tag icon={"/assets/kafka.webp"} category={"中间件"} value={"Kafka"} />
                    <Tag icon={"/assets/aws.webp"} category={"部署"} value={"AWS"} />
                </Stack>

                {imgSrc && <img src={imgSrc} alt={title} style={styles.image} />}
                <Typography>{description}</Typography>
            </Stack>
        </Card>
    );
};

const ProjectsPage = () => {
    const {t} = useTranslation();

    const projectsData = [
        {
            id: 'siemens',
            image: '/assets/siemens.jpg',
            name: t('projectsPage.siemens.name'),
            projects: [

            ],
        },
        {
            id: 'lego',
            image: '/assets/lego.png',
            name: t('projectsPage.lego.name'),
            projects: [
                {
                    title: t('projectsPage.lego.projects.receipeEditor.title'),
                    imgSrc: '/assets/lego-robot-arm.webp',
                    description: t('projectsPage.lego.projects.receipeEditor.description'),
                    tag: t('projectsPage.lego.projects.receipeEditor.tag'),
                    tagColor: '#16982b',
                },
                {
                    title: t('projectsPage.lego.projects.plcConnect.title'),
                    imgSrc: '/assets/lego-factory.webp',
                    description: t('projectsPage.lego.projects.plcConnect.description'),
                    tag: t('projectsPage.lego.projects.plcConnect.tag'),
                    tagColor: '#16982b',
                },
            ],
        },
        {
            id: 'lexcom',
            image: '/assets/lexcom.jpeg',
            name: t('projectsPage.lexcom.name'),
            projects: [
                {
                    title: t('projectsPage.lexcom.projects.pl24Upload.title'),
                    imgSrc: '/assets/lexcom-upload.webp',
                    description: t('projectsPage.lexcom.projects.pl24Upload.description'),
                    tag: t('projectsPage.lexcom.projects.pl24Upload.tag'),
                    tagColor: '#16982b',
                },
                {
                    title: t('projectsPage.lexcom.projects.pl24Bidata.title'),
                    imgSrc: '/assets/lexcom-bidata.webp',
                    description: t('projectsPage.lexcom.projects.pl24Bidata.description'),
                    tag: t('projectsPage.lexcom.projects.pl24Bidata.tag'),
                    tagColor: '#16982b',
                },
                {
                    title: t('projectsPage.lexcom.projects.pl24DealerMonitor.title'),
                    imgSrc: '/assets/lexcom-monitor.webp',
                    description: t('projectsPage.lexcom.projects.pl24DealerMonitor.description'),
                    tag: t('projectsPage.lexcom.projects.pl24DealerMonitor.tag'),
                    tagColor: '#ff8c00',
                },
            ],
        },
        {
            id: 'bmw',
            image: '/assets/bmw.png',
            name: t('projectsPage.bmw.name'),
            projects: [
                {
                    title: t('projectsPage.bmw.projects.bmwNews.title'),
                    imgSrc: '/assets/bmw_news.webp',
                    description: t('projectsPage.bmw.projects.bmwNews.description'),
                    tag: t('projectsPage.bmw.projects.bmwNews.tag'),
                    tagColor: '#005eff',
                },
            ],
        },
        {
            id: 'tum',
            image: '/assets/tum.jpeg',
            name: t('projectsPage.tum.name'),
            projects: [
                {
                    title: t('projectsPage.tum.projects.bpmnGeneration.title'),
                    imgSrc: '/assets/thesis.webp',
                    description: t('projectsPage.tum.projects.bpmnGeneration.description'),
                },
                {
                    title: t('projectsPage.tum.projects.predictiveProcessMonitoring.title'),
                    imgSrc: '/assets/PPM.webp',
                    description: t('projectsPage.tum.projects.predictiveProcessMonitoring.description'),
                },
                {
                    title: t('projectsPage.tum.projects.bamlAnalyticsCup.title'),
                    imgSrc: '/assets/ana_cup.webp',
                    description: t('projectsPage.tum.projects.bamlAnalyticsCup.description'),
                },
            ],
        },
        {
            id: 'personal',
            image: '/assets/user.png',
            name: t('projectsPage.personal.name'),
            projects: [
                {
                    title: t('projectsPage.personal.projects.focusList.title'),
                    imgSrc: '/assets/FLen.webp',
                    description: t('projectsPage.personal.projects.focusList.description'),
                },
                {
                    title: t('projectsPage.personal.projects.emojiDiary.title'),
                    imgSrc: '/assets/emoji-dairy.webp',
                    description: t('projectsPage.personal.projects.emojiDiary.description'),
                },
                {
                    title: t('projectsPage.personal.projects.volMe.title'),
                    imgSrc: '/assets/volme.webp',
                    description: t('projectsPage.personal.projects.volMe.description'),
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
