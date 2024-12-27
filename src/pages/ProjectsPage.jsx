import React from 'react';
import {Typography, Box, Card, Stack, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GroupDisplayer = ({iconSrc, altText, name}) => (
    <Stack
        direction={{ xs: 'row' }}
        spacing={2}
        alignItems="center"
    >
        <Box
            sx={{
                height: { xs: '40px', sm: '40px', md: '40px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img src={iconSrc} alt={altText} style={styles.icon}/>
        </Box>
        <Typography
        variant="h6"
        component="div"
        sx={{fontSize: { xs: 18, sm: 18, md: 20 }, textAlign: 'left', fontWeight: 600}}
        >
            {name}
        </Typography>
    </Stack>
);

const ProjectCard = ({ title, imgSrc, description, link }) => {
    const styles = {
        card: {
            width: {
                xs: '350px', // Extra small screen
                sm: '400px', // Small screen
                md: '500px', // Medium and larger screen
            },
            padding: '16px', // Add some padding
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
            borderRadius: '8px', // Rounded corners
            textAlign: 'center', // Center text inside the card
        },
        title: {
            fontSize: '1.5rem', // Larger font size for title
            fontWeight: 'bold', // Bold text
            textDecoration: 'none', // Remove underline by default
            color: 'black', // Title color
            marginBottom: '8px', // Space below the title
            cursor: 'pointer', // Change cursor to indicate clickability
            '&:hover': {
                textDecoration: 'underline', // Underline on hover
                color: '#007bff', // Optional hover color (blue-like link)
            },
        },
        image: {
            width: '100%', // Responsive image
            height: 'auto',
            maxHeight: {
                xs: '250px', // Extra small screen
                sm: '300px', // Small screen
                md: '400px', // Medium and larger screen
            },
            borderRadius: '4px', // Rounded image corners
            marginBottom: '16px', // Space below the image
        },
        description: {
            fontSize: '1rem', // Normal text size
            color: '#555', // Subtle text color
        },
    };

    return (
        <Card sx={styles.card}>
            <Stack
                direction="column"
                spacing={2}
                alignItems="center"
            >
                {/* Title */}
                <Typography
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={styles.title}
                >
                    {title}
                </Typography>

                {/* Image (conditionally rendered) */}
                {imgSrc && (
                    <img src={imgSrc} alt={title} style={styles.image} />
                )}

                {/* Description */}
                <Typography sx={styles.description}>
                    {description}
                </Typography>
            </Stack>
        </Card>
    );
};

const ProjectsPage = () => {

    return (
        <div style={styles.container}>
            {/* LEGO */}
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="lego-header"
                >
                    <GroupDisplayer iconSrc="/assets/lego.png" altText="LEGO" name="LEGO Group" />
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                        spacing={{xs: 1, sm: 2}}
                        direction="row"
                        useFlexGap
                        sx={{flexWrap: 'wrap'}}
                        alignItems="flex-start"
                    >
                        <ProjectCard 
                            title={"Receipe Editor"} 
                            imgSrc={"/assets/lego-robot-arm.webp"}
                            description={"Designers can quickly create toy packaging layouts in a web application through drag-and-drop, storing them in a database for future refinement. The application also provides a Kanban board for searching and filtering layouts, which are eventually used in robotic production lines in automated factories."} 
                            link={"/receipe-editor"}/>
                        <ProjectCard
                            title={"PLC Connect"}
                            imgSrc={"/assets/lego-factory.webp"}
                            description={"There are a lot of PLCs in the LEGO factory. The PLC Connect is a tool that can connect to different PLCs and read/write data from/to them. The tool is used to monitor the status of the PLCs and to change the data in the PLCs."}
                            link={"/plc-connect"}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* LexCom */}
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="lexcom-header"
                >
                    <GroupDisplayer iconSrc="/assets/lexcom.jpeg" altText="lexcom" name="LexCom Informationssysteme GmbH" />
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                    >
                        <ProjectCard
                            title={"PL24-Upload"}
                            imgSrc={"assets/lexcom-upload.webp"}
                            description={"The car workshop can use the web application to scan the order or simply upload the order to the server. The server will process the order and all the parts to be ordered is automatically add to the workshop's shopping cart."}
                            link={"/receipe-editor"}
                        />
                        <ProjectCard
                            title={"PL24-Bidata"}
                            imgSrc={"assets/lexcom-bidata.webp"}
                            description={"This microservice captures user's behaviour in the web application and sends the data via Kafka to the in-house big data system. The data is then processed and analyzed to improve the user experience."}
                            link={"/plc-connect"}
                        />
                        <ProjectCard
                            title={"PL24-DealerMonitor"}
                            imgSrc={"assets/lexcom-monitor.webp"}
                            description={"As many dealers are available in the Partslink 24, the dealer monitor is a monitoring the status of orders. If an order is not processed in time, the dealer monitor will send a notification to the dealer."}
                            link={"/plc-connect"}
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* BMW */}
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="bmw-header"
                >
                    <GroupDisplayer iconSrc="/assets/bmw.png" altText="bmw" name="BMW Group" />
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                    >
                        <ProjectCard 
                            title={"BMW News"} 
                            imgSrc={"/assets/bmw_news.webp"} 
                            description={"BMW News is a Android car-application new aggragator prototype using Google's News API service. The user can read the latest news about of his choise."} 
                            link={"/bmw-news"}
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* TUM */}
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="tum-header"
                >
                    <GroupDisplayer iconSrc="/assets/tum.jpeg" altText="tum" name="University Projects" />
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                    >
                        <ProjectCard 
                            title={"Siemens EHS Hazard Detection"} 
                            imgSrc={""} 
                            description={"Siemens EHS Hazard Detection is a project that aims to detect the hazard in the factory. The project uses the data sent by the sensors in the factory and in machines to detect the hazard. The project also provides a web application to show the hazard in the factory and an IOS application to notify the workers."}
                            link={""}
                        />
                        <ProjectCard 
                            title={"Improved Auto-generation of Business Process Models from Natural Language Texts of Various Complexity"} 
                            imgSrc={"/assets/thesis.webp"}
                            description={"Business Process Modeling Notation (BPMN) is essential for structuring and visualizing processes, which can enhance a company's workflow. However, creating BPMN models typically requires specialized knowledge and can be time-consuming. Automating the identification and extraction of process models can alleviate this burden. Recent advancements in NLP technology allow researchers to develop tools that analyze business process descriptions to automatically extract BPMN information. The article discusses the use of Python and the spacy library to improve BPMN model generation through enhanced recognition accuracy."}
                            link={"https://github.com/ShuaiweiYu/text2BPMN"}
                        />
                        <ProjectCard 
                            title={"A Brief Study on the Development of Predictive Process Monitoring"} 
                            imgSrc={"/assets/PPM.webp"}
                            description={"Predictive process monitoring (PPM) is increasingly gaining attention in both industry and academia, necessitating a literature review to identify current trends and research gaps. This paper conducts a systematic review of literature published between 2018 and 2022, filtering 263 articles down to 32 relevant papers. The analysis of these papers reveals current trends in PPM and highlights existing research gaps."} 
                            link={"https://github.com/ShuaiweiYu/SeminarPaper"}
                        />
                        <ProjectCard 
                            title={"BAML - Analytics Cup"} 
                            imgSrc={"/assets/ana_cup.webp"}
                            description={"The Analytics Cup is a course project of Business Analytics and Machine Learning at TUM in collaboration with Siemens. The project aims to predict the outcome of potential customers' purchasing decisions. We used the random forest algorithm to train our model. The Model can be trained in a reasonable time and has high accuracy."} 
                            link={"https://github.com/AlexiosFan/AC_Py_version"}
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* YSW */}
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="ysw-header"
                >
                    <GroupDisplayer iconSrc="/assets/user.png" altText="personal" name="Personal Projects" />
                </AccordionSummary>
                <AccordionDetails>
                    <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                    >
                        <ProjectCard 
                            title={"Focus List"} 
                            imgSrc={"/assets/FLen.webp"}
                            description={"A front-end to-do webpage based on Vue.js. The app also supports the Pomodoro function to help users complete tasks better. For details, please visit: https://shuaiweiyu .github.io/focuslist/"} 
                            link={"https://github.com/ShuaiweiYu/focuslist"}
                        />
                        <ProjectCard 
                            title={"Emoji Diary"} 
                            imgSrc={"assets/emoji-dairy.webp"}
                            description={"Emoji Diary is a diary IOS app. The user can use an emoji, a simple description and several photos to record his/her daily life. The app also supports the function of sharing via iCloud."} 
                            link={""}
                        />
                        <ProjectCard 
                            title={"VolMe"} 
                            imgSrc={"assets/volme.webp"}
                            description={"VolMe is a volunteer management system. The platform can help the volunteer organization to manage the volunteers and the events. The system also supports various functions like the rating/feed-back, chatting, event management, check-in, etc."} 
                            link={""}
                        />
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    icon: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
};

export default ProjectsPage;