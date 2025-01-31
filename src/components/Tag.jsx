import React from 'react';
import {Box, Typography, Chip} from '@mui/material';

const Tag = ({icon, category, value}) => {

    return (
        <Box
            display="flex"
            alignItems="center"
            sx={{backgroundColor: 'white', borderRadius: '16px', padding: '4px 8px', boxShadow: 1}}
        >
            <Box display="flex" alignItems="center" mr={1}>
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        style={{width: 20, height: 20, marginRight: 6}}
                    />
                )}
                <Typography variant="body2">
                    {category}
                </Typography>
            </Box>
            {value && (
                <Chip
                    label={value}
                    size="small"
                    sx={{fontWeight: 'bold', textTransform: 'capitalize'}}
                />
            )}
        </Box>
    );
};

export default Tag;
