import React from 'react';
import {Typography, Box, Container, Paper} from '@mui/material';
import { useInView } from 'react-intersection-observer'; // 引入 Intersection Observer Hook
import { motion } from 'framer-motion'; // 引入动画库
import Grid from '@mui/material/Grid2';

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
                <Grid container spacing={2} alignItems="center" direction="row">
                    {/* 左侧图片部分 */}
                    <Grid item xs={12} sm={4}>
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={3}
                                style={{
                                    ...styles.paper,
                                    padding: 0, // 去除内部边距
                                    overflow: 'hidden', // 防止图片溢出
                                    textAlign: 'center', // 居中对齐
                                }}
                            >
                                <img
                                    src="assets/Profile.jpeg"
                                    alt="俞帅威"
                                    style={{
                                        width: '100%',
                                        maxHeight: '100px',
                                        height: 'auto',
                                        objectFit: 'cover', // 确保图片适配容器
                                    }}
                                />
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* 右侧介绍部分 */}
                    <Grid item xs={12} sm={8}>
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={3}
                                style={{
                                    ...styles.paper,
                                    textAlign: 'left', // 左对齐文本
                                }}
                            >
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
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>


                {/* 第二段介绍 */}
                <motion.div
                    ref={ref2}
                    initial={{opacity: 0, y: 50}}
                    animate={inView2 ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6, delay: 0.2}}
                >
                    <Paper elevation={3} style={styles.paper}>
                        <Typography variant="h4" gutterBottom>
                            教育背景
                        </Typography>
                        <Typography variant="body1" paragraph>
                            本科阶段学习了计算机科学的基础课程，如计算机导论、软件工程、数据库、算法与数据结构以及计算机网络等。研究生阶段侧重于商业软件开发、云计算和深度学习等领域的学习。
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
                            实习经历
                        </Typography>
                        <Typography variant="body1" paragraph>
                            曾在上海的乐高集团分部和德国慕尼黑的雷斯康公司担任全栈开发实习生，还在德国宝马集团担任项目管理实习生。这些经历提升了我的代码和业务能力，加深了对软件开发周期的理解。
                        </Typography>
                    </Paper>
                </motion.div>

                {/* 第四段介绍 */}
                <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView4 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Paper elevation={3} style={styles.paper}>
                        <Typography variant="h4" gutterBottom>
                            兴趣爱好
                        </Typography>
                        <Typography variant="body1" paragraph>
                            热爱研究新技术，喜欢看书、看电影，热衷于登山和徒步，对生活充满热情。
                        </Typography>
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
};

export default HomePage;
