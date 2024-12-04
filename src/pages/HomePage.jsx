import React from 'react';
import { Typography, Box } from '@mui/material';

const HomePage = () => {
    return (
        <div style={styles.container}>
            {/* 视频容器 */}
            <div style={styles.videoContainer}>
                {/* 视频背景 */}
                <video
                    style={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted // 确保视频没有声音
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
                        // 在小屏幕上隐藏
                        display: { xs: 'none', sm: 'none', md: 'block' },
                    }}
                >
                    <Typography variant="h2">你好，很高兴你发现了这个页面！</Typography>
                </Box>
            </div>

            {/* 前景内容 */}
            <div style={styles.content}>
                <h1 style={styles.title}>欢迎来到主页！</h1>
                <p style={styles.description}>
                    这是一个用于演示 React 中多页面功能的简单主页。
                </p>
                <button style={styles.button} onClick={() => alert('Hello, React!')}>
                    点击我
                </button>
                <p style={styles.description}>
                    这是一个用于演示 React 中多页面功能的简单主页。
                </p>
                <p style={styles.description}>
                    这是一个用于演示 React 中多页面功能的简单主页。
                </p>
                <p style={styles.description}>
                    这是一个用于演示 React 中多页面功能的简单主页。
                </p>
                <p style={styles.description}>
                    这是一个用于演示 React 中多页面功能的简单主页。
                </p>
            </div>
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
        height: '20%', // 根据需要调整高度
        background: 'linear-gradient(to top, white, transparent)',
        zIndex: 2,
    },
    content: {
        position: 'relative',
        zIndex: 3, // 确保内容在所有覆盖层之上
        textAlign: 'center',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '1.5rem',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default HomePage;
