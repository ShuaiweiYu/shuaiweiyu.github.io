import React from 'react';
import {useTranslation} from 'react-i18next';
import {Typography, Box, Container, Paper, Grid, Card, CardContent, Stack, Divider, IconButton} from '@mui/material';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const IconCard = ({type, iconSrc, altText, text, description}) => (
    <Card sx={{minWidth: 80, maxWidth: 250}}>
        <CardContent>
            {/* 用于图标和文本的内容容器 */}
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={1}
                alignItems="flex-start" // 确保内容垂直对齐到顶部
            >
                <Box
                    sx={{
                        width: { xs: '20px', sm: '24px', md: '36px' },
                        height: { xs: '20px', sm: '24px', md: '36px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={iconSrc} alt={altText} style={styles.icon}/>
                </Box>
                <Stack spacing={0}>
                    <Typography
                        sx={{fontSize: { xs: 8, sm: 10, md: 12 }, textAlign: 'left'}}
                        color="text.secondary"
                        gutterBottom
                    >
                        {type}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{fontSize: { xs: 12, sm: 14, md: 16 }, textAlign: 'left', fontWeight: 600}}
                    >
                        {text}
                    </Typography>
                </Stack>
            </Stack>

            {/* 用于描述的文本 */}
            {description && (
                <Typography
                    variant="body2"
                    sx={{textAlign: 'left', mt: 2, display: {xs: 'none', sm: 'block'}}}
                >
                    {description}
                </Typography>
            )}
        </CardContent>
    </Card>
);

const ItemCard = ({type, iconSrc, altText, university, degree, description, duration, link}) => (
    <Card variant="outlined" sx={{minWidth: 200, width: '100%'}}>
        <CardContent>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
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
                <Stack spacing={0}>
                    <Stack 
                        direction="row" 
                        spacing={0} 
                    >
                        <Typography
                        variant="h6"
                        component="div"
                        sx={{fontSize: { xs: 18, sm: 18, md: 20 }, textAlign: 'left', fontWeight: 600}}
                        >
                            {university}
                        </Typography>
                        {link && (
                            <IconButton
                                size="small"
                                sx={{ml: 1}}
                                onClick={() => window.open(link, '_blank')}
                                aria-label="open-link"
                            >
                                <OpenInNewIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Stack>
                    <Stack 
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 0, sm: 2, md: 2 }}
                        sx={{fontSize: { xs: 14, sm: 14, md: 16 }, textAlign: 'left'}}
                    >
                        <Typography color="text.secondary" sx={{fontSize: 'inherit'}}>
                            {degree}
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: 'inherit'}}>
                            {type}
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: 'inherit'}}>
                            {duration}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Typography
                variant="body2"
                sx={{textAlign: 'left', mt: 2}}
            >
                {description}
            </Typography>
        </CardContent>
    </Card>
);


const HomePage = () => {
    const {t} = useTranslation();

    // 使用 Intersection Observer 来检测元素是否在视口中
    const [ref1, inView1] = useInView({triggerOnce: true, threshold: 0.1});
    const [ref2, inView2] = useInView({triggerOnce: true, threshold: 0.1});
    const [ref3, inView3] = useInView({triggerOnce: true, threshold: 0.1});
    const [ref4, inView4] = useInView({triggerOnce: true, threshold: 0.1});

    return (
        <div style={styles.container}>
            {/* 视频容器 */}
            <div style={styles.videoContainer}>
                {/* 视频背景 */}
                <video
                    style={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="assets/video.webm" type="video/webm"/>
                    {t("home.video")}
                </video>

                {/* 覆盖层 */}
                <div style={styles.overlay}></div>

                {/* 渐变覆盖层 */}
                <div style={styles.gradientOverlay}></div>

                {/* 居中文本 */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: '#fff',
                        zIndex: 2,
                        display: {xs: 'none', sm: 'none', md: 'block'},
                    }}
                >
                    <Typography variant="h2">{t("home.greeting")}</Typography>
                </Box>
            </div>

            {/* 前景内容 */}
            <Container maxWidth="lg" style={styles.content}>
                {/* 第一段介绍 */}
                <motion.div
                    ref={ref1}
                    initial={{opacity: 0, y: 50}}
                    animate={inView1 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    style={{height: '100%'}}
                >
                    <Paper
                        elevation={3}
                        style={{
                            ...styles.paper,
                            textAlign: 'left', // 左对齐文本
                            height: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="center" direction="row">

                            <Grid item sm={12} md={4}>
                                <img
                                    src="assets/Profile.webp"
                                    alt="profile"
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid>

                            <Grid item sm={12} md={8}>
                                <Typography variant="h4" gutterBottom>
                                    {t("home.aboutMe1")}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t("home.aboutMe2")}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t("home.aboutMe3")}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {t("home.aboutMe4")}    
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </motion.div>

                {/* 第二段介绍 */}
                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, y: 50}}
                    animate={inView2 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <Paper elevation={3} style={styles.paper}>
                        <Typography variant="h4" gutterBottom>
                            {t("home.myStudies")}
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <ItemCard
                                type={t("home.itemCards.tumMaster.type")}
                                iconSrc="/assets/tum2.jpg"
                                altText="TUM"
                                university="Technische Universität München"
                                degree="Information Systems"
                                description="The Information Systems Master's program focuses on designing, implementing, and analyzing complex systems while integrating computer science and management. It prepares students to drive digital transformation and develop data-driven solutions for management decisions."
                                duration="2023 - 2025"
                                link={"https://www.tum.de/studium/studienangebot/detail/wirtschaftsinformatik-master-of-science-msc"}
                            />
                            <ItemCard
                                type="Bachelor of Science"
                                iconSrc="/assets/tum2.jpg"
                                altText="TUM"
                                university="Technische Universität München"
                                degree="Information Systems"
                                description="
The Information Systems program at TU Munich bridges computer science and business administration with a focus on ICT application in business and administration. It emphasizes designing business processes, developing innovative systems, and enabling decision-making and knowledge management, shaping the future of the information society."
                                duration="2020- 2023"
                                link={"https://www.tum.de/studium/studienangebot/detail/wirtschaftsinformatik-bachelor-of-science-bsc"}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/studienkolleg.png"
                                altText="studienkolleg"
                                university="Studienkolleg München"
                                degree="Preparation study"
                                description="At Studienkollegs, applicants whose university entrance qualification (HZB) is not recognized in Germany are prepared linguistically and academically for university studies. This preparatory program concludes with the state examination, the Feststellungsprüfung (FSP)."
                                duration="2019 - 2020"
                                link={"https://xn--studienkolleg-mnchen-3ec.de/"}
                            />
                        </Stack>
                    </Paper>
                </motion.div>

                {/* 第三段介绍 */}
                <motion.div
                    ref={ref3}
                    initial={{opacity: 0, y: 50}}
                    animate={inView3 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.4}}
                >
                    <Paper elevation={3} style={styles.paper}>
                        <Typography variant="h4" gutterBottom>
                            我的实习
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <ItemCard
                            type=""
                            iconSrc="/assets/lego.png"
                            altText="LEGO"
                            university="LEGO Group"
                            degree="Fullstack Developer Intern"
                            description="The LEGO Group inspires creativity and learning through its iconic brick system, offering innovative and sustainable products that bring joy to families worldwide."
                            duration="04/2024 - 09/2024"
                            link={"https://www.lego.com/de-de/aboutus/lego-group"}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/lexcom.jpeg"
                                altText="lexcom"
                                university="LexCom Informationssysteme GmbH"
                                degree="Fullstack Developer Intern"
                                description="LexCom Informationssysteme GmbH optimizes after-sales processes with tailored, IT-driven solutions, enabling clients to adapt to global market demands, implement innovative strategies, and stay ahead of the competition."
                                duration="09/2023 - 12/2024"
                                link={"https://www.lexcom.de/home/en/what-we-do.html"}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/bmw.png"
                                altText="BMW"
                                university="BMW Group"
                                degree="Project Managment Intern"
                                description="BMW Group is a global leader in premium mobility, known for innovative design, cutting-edge technology, and sustainability. It drives the future of mobility with iconic brands and a commitment to excellence."
                                duration="08/2022 - 12/2022"
                                link={"https://www.bmwgroup.com/en.html"}
                            />
                        </Stack>
                    </Paper>
                </motion.div>

                {/* 第四段介绍 */}
                <motion.div
                    ref={ref4}
                    initial={{opacity: 0, y: 50}}
                    animate={inView4 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.6}}
                >
                    <Paper elevation={3} style={styles.paper}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{textAlign: 'center'}} // 确保居中
                        >
                            趣闻
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}} // 确保左对齐
                        >
                            编程技能
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type="Progamming Language"
                                iconSrc="/assets/java.png"
                                altText="Java"
                                text="Java"
                                description="I never been to Java Island"
                            />
                            <IconCard
                                type="Progamming Language"
                                iconSrc="/assets/python.png"
                                altText="Python"
                                text="Python"
                                description="Pythons, are a family of nonvenomous snakes"
                            />
                            <IconCard
                                type="Progamming Language"
                                iconSrc="/assets/javascript.png"
                                altText="JavaScript"
                                text="JavaScript"
                                description="Which has nothing to do with Java"
                            />
                            {/*<IconCard*/}
                            {/*    type="Progamming Language"*/}
                            {/*    iconSrc="/assets/swift.png"*/}
                            {/*    altText="Swift"*/}
                            {/*    text="Swift"*/}
                            {/*    description=""*/}
                            {/*/>*/}
                            <IconCard
                                type="Framework"
                                iconSrc="/assets/springboot.webp"
                                altText="SpringBoot"
                                text="SpringBoot"
                                description=""
                            />
                            <IconCard
                                type="Framework"
                                iconSrc="/assets/react.png"
                                altText="React.js"
                                text="React.js"
                                description="This webpage is actually using react"
                            />
                            {/*<IconCard*/}
                            {/*    type="Framework"*/}
                            {/*    iconSrc="/assets/vue.png"*/}
                            {/*    altText="Vue.js"*/}
                            {/*    text="Vue.js"*/}
                            {/*    description=""*/}
                            {/*/>*/}
                            <IconCard
                                type="Version Control"
                                iconSrc="/assets/git.png"
                                altText="Git"
                                text="Git"
                                description="I love to check git blame"
                            />
                            <IconCard
                                type="Database"
                                iconSrc="/assets/mongo.webp"
                                altText="Mongo DB"
                                text="Mongo DB"
                                description=""
                            />
                            <IconCard
                                type="Database"
                                iconSrc="/assets/mysql.png"
                                altText="MySQL"
                                text="MySQL"
                                description=""
                            />
                            <IconCard
                                type="Middleware"
                                iconSrc="/assets/kafka.webp"
                                altText="Kafka"
                                text="Kafka"
                                description=""
                            />
                            <IconCard
                                type="Cloud Service"
                                iconSrc="/assets/aws.webp"
                                altText="AWS"
                                text="AWS"
                                description=""
                            />
                        </Stack>

                        <Divider sx={{padding: '8px'}}/>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}}
                        >
                            我会说什么语言？
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type="Language"
                                iconSrc="/assets/german.png"
                                altText="German"
                                text="German"
                                description="Fluent"
                            />
                            <IconCard
                                type="Language"
                                iconSrc="/assets/english.png"
                                altText="English"
                                text="English"
                                description="Fluent"
                            />
                            <IconCard
                                type="Language"
                                iconSrc="/assets/chinese.png"
                                altText="Chinese"
                                text="Chinese"
                                description="Fluent"
                            />
                        </Stack>

                        <Divider sx={{padding: '8px'}}/>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}}
                        >
                            我的爱好
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/books.png"
                                altText="books"
                                text="Reading"
                                description=""
                            />
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/movie.png"
                                altText="movie"
                                text="Movies"
                                description=""
                            />
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/travel.png"
                                altText="travel"
                                text="Traveling"
                                description=""
                            />
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/books.png"
                                altText="books"
                                text="Reading"
                                description=""
                            />
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/mountain.png"
                                altText="mountain"
                                text="Hiking"
                                description=""
                            />
                            <IconCard
                                type="Hobbys"
                                iconSrc="/assets/game.png"
                                altText="game"
                                text="Gaming"
                                description=""
                            />
                        </Stack>
                    </Paper>
                </motion.div>
            </Container>
        </div>
    );
};

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        maxWidth: '1920px',
        margin: '0 auto',
        overflow: 'hidden',
    },
    backgroundVideo: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(200, 200, 200, 0.5)',
        zIndex: 1,
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20%',
        background: 'linear-gradient(to top, white, transparent)',
        zIndex: 2,
    },
    content: {
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        padding: '2rem',
    },
    paper: {
        padding: '2rem',
        marginBottom: '2rem',
    },
    icon: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    inlineContainer: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default HomePage;
