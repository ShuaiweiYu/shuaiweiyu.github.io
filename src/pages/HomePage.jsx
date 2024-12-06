import React from 'react';
import {Typography, Box, Container, Paper, Grid, Card, CardContent, Stack, Divider} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const IconCard = ({ type, iconSrc, altText, text, description }) => (
    <Card sx={{ minWidth: 100, maxWidth: 250 }}>
        <CardContent>
            {/* 用于图标和文本的内容容器 */}
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={1}
                alignItems="flex-start" // 确保内容垂直对齐到顶部
            >
                <img src={iconSrc} alt={altText} style={styles.icon} />
                <Stack spacing={0}>
                    <Typography
                        sx={{ fontSize: 14, textAlign: 'left' }}
                        color="text.secondary"
                        gutterBottom
                    >
                        {type}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: 20, textAlign: 'left', fontWeight: 600 }}
                    >
                        {text}
                    </Typography>
                </Stack>
            </Stack>

            {/* 用于描述的文本 */}
            {description && (
                <Typography
                    variant="body2"
                    sx={{ textAlign: 'left', mt: 2 }}
                >
                    {description}
                </Typography>
            )}
        </CardContent>
    </Card>
);



const HomePage = () => {
    // 使用 Intersection Observer 来检测元素是否在视口中
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

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
                >
                    <source src="assets/video.mp4" type="video/mp4" />
                    您的浏览器不支持 video 标签。
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
                        display: { xs: 'none', sm: 'none', md: 'block' },
                    }}
                >
                    <Typography variant="h2">人生是旷野</Typography>
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
                                    src="assets/Profile.jpeg"
                                    alt="俞帅威"
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid>

                            <Grid item sm={12} md={8}>
                                <Typography variant="h4" gutterBottom>
                                    关于我—俞帅威
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    我来自浙江的一个小县城，那里山水环绕，四季分明，像个恬静的梦，可惜那个梦不够辽阔。18岁时，我带着一颗不安分的心，从那里出发，开始了一场通往未知的冒险。
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    我的足迹从浙江的田野延伸到德国的街头，在这里我完成了我的学业，穿越了语言与文化的屏障，踏遍了欧洲的山脉与古城。每一次挑战，每一个转折，都让我更加坚韧，更加渴望理解这个世界的复杂与壮丽。
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    现在的我，就像一个在广袤地图上游走的旅者，一边书写自己的篇章，一边寻找更多的未知。
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
                            我最近在做什么
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Text
                        </Typography>
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
                            我做过什么？
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Text
                        </Typography>
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
                            sx={{ textAlign: 'center' }} // 确保居中
                        >
                            趣闻
                        </Typography>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ textAlign: 'left' }} // 确保左对齐
                        >
                            编程技能
                        </Typography>
                        <Stack 
                            spacing={{ xs: 1, sm: 2 }}
                            direction="row" 
                            useFlexGap
                            sx={{ flexWrap: 'wrap' }}
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
                            />
                            <IconCard
                                type="Progamming Language"
                                iconSrc="/assets/javascript.png"
                                altText="JavaScript"
                                text="JavaScript"
                                description="ChatGPT is taking over"
                            />
                            <IconCard
                                type="Progamming Language"
                                iconSrc="/assets/swift.png"
                                altText="Swift"
                                text="Swift"
                                description=""
                            />
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
                                description=""
                            />
                            <IconCard
                                type="Framework"
                                iconSrc="/assets/vue.png"
                                altText="Vue.js"
                                text="Vue.js"
                                description=""
                            />
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

                        <Divider sx={{ padding: '8px' }}/>

                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ textAlign: 'left' }}
                        >
                            我会说什么语言？
                        </Typography>
                        <Stack 
                            spacing={{ xs: 1, sm: 2 }}
                            direction="row" 
                            useFlexGap
                            sx={{ flexWrap: 'wrap' }}
                            alignItems="flex-start"
                        >
                            <IconCard
                                type="Language"
                                iconSrc="/assets/german.png"
                                altText="German"
                                text="German"
                                description=""
                            />
                            <IconCard
                                type="Language"
                                iconSrc="/assets/english.png"
                                altText="English"
                                text="English"
                                description=""
                            />
                            <IconCard
                                type="Language"
                                iconSrc="/assets/chinese.png"
                                altText="Chinese"
                                text="Chinese"
                                description=""
                            />
                        </Stack>

                        <Divider sx={{ padding: '8px' }}/>

<Typography
    variant="h5"
    gutterBottom
    sx={{ textAlign: 'left' }}
>
    我的爱好
</Typography>
<Stack 
    spacing={{ xs: 1, sm: 2 }}
    direction="row" 
    useFlexGap
    sx={{ flexWrap: 'wrap' }}
    alignItems="flex-start"
>
    <IconCard
        type="Language"
        iconSrc="/assets/books.png"
        altText="books"
        text="Reading"
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
        width: '36px',
        height: '36px',
    },
    inlineContainer: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default HomePage;
