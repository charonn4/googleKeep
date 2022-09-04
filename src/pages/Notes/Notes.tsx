import Box from '@mui/material/Box';
import React, {useContext} from 'react';
import {styled} from "@mui/material/styles";
import NoteForm from "../../components/NoteForm/NoteForm";
import Note from '../../components/Note/Note';
import {NotesContext} from "../../context/NotesProvider";
import Grid from '@mui/material/Grid';
import EmptyNotes from '../EmptyNotes/EmptyNotes';
import NothingFound from "../NothingFound/NothingFound";


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const {notes, searchText} = useContext(NotesContext)
    const fields = ['headerText', 'text']
    const search = (data:any) =>{
        return data.filter((note:any)=> fields.some((field) => note[field].toLowerCase().includes(searchText.toLowerCase())))

    }


    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <NoteForm/>
                {notes.length > 0 ?
                                <Grid sx={{mt: 2}} container>
                                    {search(notes).length > 0 ? search(notes).map((note: any) =>
                                                <Grid key={note.id} item>
                                                    <Note note={note}/>
                                                </Grid>
                                    ) : <NothingFound/>}
                                </Grid>
                    : searchText.length > 0 ? <NothingFound/> : <EmptyNotes text='Здесь будут ваши заметки.'/>
                }

            </Box>
        </Box>
    );
};

export default Notes;