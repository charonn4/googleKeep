import Box from '@mui/material/Box';
import React from 'react';
import {styled} from "@mui/material/styles";
import NoteForm from "../../components/NoteForm/NoteForm";



const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <NoteForm/>
            </Box>
        </Box>
    );
};

export default Notes;