import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MenuIcon from '@mui/icons-material/Menu';
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

function MyAppBar() {
    const {t} = useTranslation();

    const pages = [
        {key: "navBar.projects", route: "/projects"},
        {key: "navBar.contact", route: "/contact"}
    ];

    const languages = [
        {code: 'zh', name: '中文', icon: '🇨🇳'},
        {code: 'en', name: 'English', icon: '🇺🇸'},
        {code: 'de', name: 'Deutsch', icon: '🇩🇪'},
    ];

    const getInitialLanguage = () => {
        const storedLanguage = localStorage.getItem('appLanguage');
        if (storedLanguage) {
            return languages.find(lang => lang.code === storedLanguage) || languages[1]; // Default to English
        }
        const detectedLanguage = new LanguageDetector().detect();
        return languages.find(lang => lang.code === detectedLanguage) || languages[1];
    };

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorElLang, setAnchorElLang] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage());

    useEffect(() => {
        i18n.changeLanguage(currentLanguage.code);
        document.title = t("navBar.title"); // Optional: Update the title dynamically
    }, [currentLanguage, t]);

    const handleToggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleOpenLanguageMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLanguageMenu = () => {
        setAnchorElLang(null);
    };

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('appLanguage', language.code); // Store the selected language
        i18n.changeLanguage(language.code);
        handleCloseLanguageMenu();
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AssignmentIndIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>

                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        onClick={() => (window.location.href = '/')}
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            flexGrow: 0,
                            fontFamily: 'serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Shuaiwei's Page
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            onClick={handleToggleDrawer}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <AssignmentIndIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="button"
                        onClick={() => (window.location.href = '/')}
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Shuaiwei's Page
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.key}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => {
                                    window.location.href = page.route;
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {t(page.key)}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="选择语言">
                            <Button
                                variant="outlined"
                                color="inherit"
                                onClick={handleOpenLanguageMenu}
                                startIcon={currentLanguage.icon}
                            >
                                {currentLanguage.name}
                            </Button>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElLang}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElLang)}
                            onClose={handleCloseLanguageMenu}
                        >
                            {languages.map((language) => (
                                <MenuItem
                                    key={language.code}
                                    onClick={() => handleLanguageChange(language)}
                                >
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <span>{language.icon}</span>
                                        <Typography>{language.name}</Typography>
                                    </Box>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {/* Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleToggleDrawer}
            >
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={handleToggleDrawer}
                    onKeyDown={handleToggleDrawer}
                >
                    <List>
                        {pages.map((page) => (
                            <ListItem key={page.key} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        window.location.href = page.route;
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <ListItemText primary={t(page.key)}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default MyAppBar;
