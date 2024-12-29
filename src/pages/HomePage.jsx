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
                        width: {xs: '20px', sm: '24px', md: '36px'},
                        height: {xs: '20px', sm: '24px', md: '36px'},
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={iconSrc} alt={altText} style={styles.icon}/>
                </Box>
                <Stack spacing={0}>
                    <Typography
                        sx={{fontSize: {xs: 8, sm: 10, md: 12}, textAlign: 'left'}}
                        color="text.secondary"
                        gutterBottom
                    >
                        {type}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{fontSize: {xs: 12, sm: 14, md: 16}, textAlign: 'left', fontWeight: 600}}
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
                direction={{xs: 'column', sm: 'row'}}
                spacing={1}
                alignItems="center"
            >
                <Box
                    sx={{
                        height: {xs: '40px', sm: '40px', md: '40px'},
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
                            sx={{fontSize: {xs: 18, sm: 18, md: 20}, textAlign: 'left', fontWeight: 600}}
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
                                <OpenInNewIcon fontSize="small"/>
                            </IconButton>
                        )}
                    </Stack>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        spacing={{xs: 0, sm: 2, md: 2}}
                        sx={{fontSize: {xs: 14, sm: 14, md: 16}, textAlign: 'left'}}
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
                                type={t("itemCards.tumMaster.type")}
                                iconSrc="/assets/tum2.jpg"
                                altText="TUM"
                                university={t("itemCards.tumMaster.university")}
                                degree={t("itemCards.tumMaster.degree")}
                                description={t("itemCards.tumMaster.description")}
                                duration={t("itemCards.tumMaster.duration")}
                                link={t("itemCards.tumMaster.link")}
                            />
                            <ItemCard
                                type={t("itemCards.tumBachelor.type")}
                                iconSrc="/assets/tum2.jpg"
                                altText="TUM"
                                university={t("itemCards.tumBachelor.university")}
                                degree={t("itemCards.tumBachelor.degree")}
                                description={t("itemCards.tumBachelor.description")}
                                duration={t("itemCards.tumBachelor.duration")}
                                link={t("itemCards.tumBachelor.link")}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/studienkolleg.png"
                                altText="studienkolleg"
                                university={t("itemCards.studienkolleg.university")}
                                degree={t("itemCards.studienkolleg.degree")}
                                description={t("itemCards.studienkolleg.description")}
                                duration={t("itemCards.studienkolleg.duration")}
                                link={t("itemCards.studienkolleg.link")}
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
                            {t("home.myInternships")}
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
                                university={t("itemCards.lego.university")}
                                degree={t("itemCards.lego.type")}
                                description={t("itemCards.lego.description")}
                                duration={t("itemCards.lego.duration")}
                                link={t("itemCards.lego.link")}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/lexcom.jpeg"
                                altText="lexcom"
                                university={t("itemCards.lexcom.university")}
                                degree={t("itemCards.lexcom.type")}
                                description={t("itemCards.lexcom.description")}
                                duration={t("itemCards.lexcom.duration")}
                                link={t("itemCards.lexcom.link")}
                            />
                            <ItemCard
                                type=""
                                iconSrc="/assets/bmw.png"
                                altText="BMW"
                                university={t("itemCards.bmw.university")}
                                degree={t("itemCards.bmw.type")}
                                description={t("itemCards.bmw.description")}
                                duration={t("itemCards.bmw.duration")}
                                link={t("itemCards.bmw.link")}
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
                            {t("home.funFacts")}
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}} // 确保左对齐
                        >
                            {t("home.programmingSkills")}
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type={t("iconCards.java.type")}
                                iconSrc="/assets/java.png"
                                altText="Java"
                                text={t("iconCards.java.text")}
                                description={t("iconCards.java.description")}
                            />
                            <IconCard
                                type={t("iconCards.python.type")}
                                iconSrc="/assets/python.png"
                                altText="Python"
                                text={t("iconCards.python.text")}
                                description={t("iconCards.python.description")}
                            />
                            <IconCard
                                type={t("iconCards.javascript.type")}
                                iconSrc="/assets/javascript.png"
                                altText="JavaScript"
                                text={t("iconCards.javascript.text")}
                                description={t("iconCards.javascript.description")}
                            />
                            {/*<IconCard*/}
                            {/*    type="Progamming Language"*/}
                            {/*    iconSrc="/assets/swift.png"*/}
                            {/*    altText="Swift"*/}
                            {/*    text="Swift"*/}
                            {/*    description=""*/}
                            {/*/>*/}
                            <IconCard
                                type={t("iconCards.springboot.type")}
                                iconSrc="/assets/springboot.webp"
                                altText="SpringBoot"
                                text={t("iconCards.springboot.text")}
                                description={t("iconCards.springboot.description")}
                            />
                            <IconCard
                                type={t("iconCards.react.type")}
                                iconSrc="/assets/react.png"
                                altText="React.js"
                                text={t("iconCards.react.text")}
                                description={t("iconCards.react.description")}
                            />
                            {/*<IconCard*/}
                            {/*    type="Framework"*/}
                            {/*    iconSrc="/assets/vue.png"*/}
                            {/*    altText="Vue.js"*/}
                            {/*    text="Vue.js"*/}
                            {/*    description=""*/}
                            {/*/>*/}
                            <IconCard
                                type={t("iconCards.git.type")}
                                iconSrc="/assets/git.png"
                                altText="Git"
                                text={t("iconCards.git.text")}
                                description={t("iconCards.git.description")}
                            />
                            <IconCard
                                type={t("iconCards.mongo.type")}
                                iconSrc="/assets/mongo.webp"
                                altText="Mongo DB"
                                text={t("iconCards.mongo.text")}
                                description={t("iconCards.mongo.description")}
                            />
                            <IconCard
                                type={t("iconCards.mysql.type")}
                                iconSrc="/assets/mysql.png"
                                altText="MySQL"
                                text={t("iconCards.mysql.text")}
                                description={t("iconCards.mysql.description")}
                            />
                            <IconCard
                                type={t("iconCards.kafka.type")}
                                iconSrc="/assets/kafka.webp"
                                altText="Kafka"
                                text={t("iconCards.kafka.text")}
                                description={t("iconCards.kafka.description")}
                            />
                            <IconCard
                                type={t("iconCards.aws.type")}
                                iconSrc="/assets/aws.webp"
                                altText="AWS"
                                text={t("iconCards.aws.text")}
                                description={t("iconCards.aws.description")}
                            />
                        </Stack>

                        <Divider sx={{padding: '8px'}}/>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}}
                        >
                            {t("home.languagesSpoken")}
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type={t("iconCards.german.type")}
                                iconSrc="/assets/german.png"
                                altText="German"
                                text={t("iconCards.german.text")}
                                description={t("iconCards.german.description")}
                            />
                            <IconCard
                                type={t("iconCards.english.type")}
                                iconSrc="/assets/english.png"
                                altText="English"
                                text={t("iconCards.english.text")}
                                description={t("iconCards.english.description")}
                            />
                            <IconCard
                                type={t("iconCards.chinese.type")}
                                iconSrc="/assets/chinese.png"
                                altText="Chinese"
                                text={t("iconCards.chinese.text")}
                                description={t("iconCards.chinese.description")}
                            />
                        </Stack>

                        <Divider sx={{padding: '8px'}}/>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{textAlign: 'left'}}
                        >
                            {t("home.myHobbies")}
                        </Typography>
                        <Stack
                            spacing={{xs: 1, sm: 2}}
                            direction="row"
                            useFlexGap
                            sx={{flexWrap: 'wrap'}}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type={t("iconCards.reading.type")}
                                iconSrc="/assets/books.png"
                                altText="books"
                                text={t("iconCards.reading.text")}
                                description={t("iconCards.reading.description")}
                            />
                            <IconCard
                                type={t("iconCards.movies.type")}
                                iconSrc="/assets/movie.png"
                                altText="movie"
                                text={t("iconCards.movies.text")}
                                description={t("iconCards.movies.description")}
                            />
                            <IconCard
                                type={t("iconCards.traveling.type")}
                                iconSrc="/assets/travel.png"
                                altText="travel"
                                text={t("iconCards.traveling.text")}
                                description={t("iconCards.traveling.description")}
                            />
                            <IconCard
                                type={t("iconCards.hiking.type")}
                                iconSrc="/assets/mountain.png"
                                altText="mountain"
                                text={t("iconCards.hiking.text")}
                                description={t("iconCards.hiking.description")}
                            />
                            <IconCard
                                type={t("iconCards.gaming.type")}
                                iconSrc="/assets/game.png"
                                altText="game"
                                text={t("iconCards.gaming.text")}
                                description={t("iconCards.gaming.description")}
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
