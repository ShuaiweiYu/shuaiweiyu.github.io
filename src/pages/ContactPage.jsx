import React from "react";
import {Typography, Box, Container, Stack, IconButton, Link, Paper} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
import ChatIcon from "@mui/icons-material/Chat";
import {useTranslation} from "react-i18next";
import BuyMeACoffee from "../components/BuyMeACoffee";

const contacts = (t) => [
    {
        icon: <GitHubIcon/>,
        label: t("contactPage.github"),
        link: "https://github.com/ShuaiweiYu",
        display: "ShuaiweiYu",
    },
    {
        icon: <LinkedInIcon/>,
        label: t("contactPage.linkedin"),
        link: "https://www.linkedin.com/in/shuaiwei-yu-ba2148156/",
        display: "Shuaiwei YU ",
    },
    {
        icon: <EmailIcon/>,
        label: t("contactPage.email"),
        link: "mailto:yushuaiwei19990505@outlook.com",
        display: "yushuaiwei19990505@outlook.com",
    },
    {
        icon: <ChatIcon/>,
        label: t("contactPage.wechat"),
        display: "ysw19990505",
    },
    {
        icon: <InstagramIcon/>,
        label: t("contactPage.instagram"),
        link: "https://www.instagram.com/shuaiiiiwei.yu/",
        display: "@shuaiiiiwei.yu",
    },
    {
        icon: <PublicIcon/>,
        label: t("contactPage.xiaohongshu"),
        link: "https://www.xiaohongshu.com/user/profile/5e06927700000000010017c9",
        display: "🐟",
    },
];

const ContactPage = () => {
    const {t} = useTranslation();

    return (
        <Container maxWidth="sm" sx={{mt: 4}}>
            <Paper elevation={3} sx={{p: 4}}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    {t("contactPage.title")}
                </Typography>

                <Stack spacing={2}>
                    {contacts(t).map((contact, index) => (
                        <Box
                            key={index}
                            display="flex"
                            alignItems="center"
                            sx={{gap: 2}}
                        >
                            <IconButton color="primary" size="large">
                                {contact.icon}
                            </IconButton>

                            <Typography variant="body1" sx={{width: "100px"}}>
                                {contact.label}
                            </Typography>

                            {contact.link ? (
                                <Link
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener"
                                    underline="hover"
                                    sx={{
                                        maxWidth: {xs: "200px", sm: "none"},
                                        wordWrap: "break-word",
                                        overflow: "hidden",
                                    }}
                                >
                                    {contact.display}
                                </Link>
                            ) : (
                                <Typography
                                    sx={{
                                        maxWidth: {xs: "200px", sm: "none"},
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {contact.display}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Stack>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <BuyMeACoffee/>
                </Box>
            </Paper>
        </Container>
    );
};

export default ContactPage;