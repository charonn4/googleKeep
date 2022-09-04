import React, {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import style from './Note.module.css'
import OtherActionsNote from "../OtherActionsNote/OtherActionsNote";
import {NotesContext} from "../../context/NotesProvider";

const NoteCard = styled(Card)`
    width: 280px;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: 10px;
`

const Note = ({note}: any) => {
    const [isButtonsVisible, setButtonsVisible] = useState<string>('0')
    const {notes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(NotesContext)


    // при клике на кнопку удаления добавляем в массив удаленных данную заметку
    const deleteNote = (note:any) =>{
        const filteredNotesAfterDelete = notes.filter( (data:any) =>data.id !== note.id)
        setNotes(filteredNotesAfterDelete)
        setDeletedNotes((prevArr:any)=> [note, ...prevArr])
    }

    // при клике на кнопку архивирования добавляем в массив архивированных данную заметку
    const archiveNote = (note: any) =>{
        const filteredNotesAfterArchive = notes.filter( (data:any) =>data.id !== note.id)
        setNotes(filteredNotesAfterArchive)
        setArchiveNotes((prevArr:any)=> [note, ...prevArr])
    }

    return (
        <NoteCard onMouseEnter={()=>setButtonsVisible('1')} onMouseLeave={()=>setButtonsVisible('0')}>
            <CardContent>
                <Typography>{note.headerText}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions className={style.buttonsWrapper} sx={{
                justifyContent: 'space-between'
            }}>
                <AddAlertOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                <PersonAddAltOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                <PaletteOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                <InsertPhotoOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                <ArchiveOutlinedIcon onClick={() => archiveNote(note)} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                 {/*дропдаун для допольнительных действий*/}
                <OtherActionsNote deleteNote={() => deleteNote(note)} isButtonsVisible={isButtonsVisible} />

            </CardActions>

        </NoteCard>
    );
};

export default Note;