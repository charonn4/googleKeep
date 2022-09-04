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
    const {notes, setNotes, searchText} = useContext(NotesContext)
    const fields = ['headerText', 'text']
    const search = (data:any) =>{
        const filteredNotes = data.filter((note:any)=> fields.some((field) => note[field].toLowerCase().includes(searchText.toLowerCase())))
        return filteredNotes
    }

    const reorder = (list:any, startIndex:any, endIndex:any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    }

    const onDragEnd = (result:any) =>{
        if (!result.destination) {
            return;
        }
        const items = reorder(
            notes,
            result.source.index,
            result.destination.index
        )
        setNotes(items)
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
                    : <EmptyNotes text='Здесь будут ваши заметки.'/>
                }

            </Box>
        </Box>
    );
};

export default Notes;