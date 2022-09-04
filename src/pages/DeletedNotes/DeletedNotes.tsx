import React, {useContext} from 'react';
import {styled} from "@mui/material/styles";
import {NotesContext} from "../../context/NotesProvider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmptyNotes from "../EmptyNotes/EmptyNotes";
import DeletedNote from './DeletedNote';
import NothingFound from "../NothingFound/NothingFound";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeletedNotes = () => {
    const {deletedNotes, searchText} = useContext(NotesContext)
    const fields = ['headerText', 'text']
    const search = (data:any) =>{
        return data.filter((note:any)=> fields.some((field) => note[field].toLowerCase().includes(searchText.toLowerCase())))
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {deletedNotes.length > 0 ?
                    <Grid sx={{mt: 2}} container>
                        {search(deletedNotes).length > 0 ? search(deletedNotes).map((note: any) =>
                            <Grid key={note.id} item>
                                <DeletedNote note={note}/>
                            </Grid>
                        ) : <NothingFound/>}
                    </Grid> : searchText.length > 0 ? <NothingFound/> : <EmptyNotes text='В корзине ничего нет.'/>
                }

            </Box>
        </Box>
    );
};

export default DeletedNotes;