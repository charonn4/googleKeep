import React, {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import style from '../../components/Note/Note.module.css'

import {NotesContext} from "../../context/NotesProvider";

const NoteCard = styled(Card)`
    width: 280px;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: 10px;
`

const DeletedNote = ({note}: any) => {
    const [isButtonsVisible, setButtonsVisible] = useState<string>('0')
    const {deletedNotes, setNotes, setDeletedNotes} = useContext(NotesContext)


    // при клике на кнопку удаления добавляем в массив основных данную заметку
    const unDeleteNote = (note:any) =>{
        const filteredNotesAfterDelete = deletedNotes.filter( (data:any) =>data.id !== note.id)
        setDeletedNotes(filteredNotesAfterDelete)
        setNotes((prevArr:any)=> [note, ...prevArr])
    }

    // Удаление навсегда
    const deleteForever = (note: any) =>{
        const filteredNotesAfterArchive = deletedNotes.filter( (data:any) =>data.id !== note.id)
        setDeletedNotes(filteredNotesAfterArchive)
    }

    return (
        <NoteCard onMouseEnter={()=>setButtonsVisible('1')} onMouseLeave={()=>setButtonsVisible('0')}>
            <CardContent>
                <Typography>{note.headerText}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions className={style.buttonsWrapper}>
                <DeleteForeverOutlinedIcon onClick={() => deleteForever(note)} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                <RestoreFromTrashOutlinedIcon onClick={() => unDeleteNote(note)} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>

            </CardActions>

        </NoteCard>
    );
};

export default DeletedNote;