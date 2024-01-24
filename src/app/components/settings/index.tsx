'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';


const Settings = (_: any) => {
    const [example, setExample] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setExample(event.target.value as string);
    };

    return(
        <div className="">
            <Typography className="" variant="h5">Settings</Typography>
            <div>
                <Typography className="" variant="h7">JSON-LD Exampels</Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth variant="filled">
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={example}
                        label="Example"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Place</MenuItem>
                        <MenuItem value={20}>Event</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    );
};
export default Settings;