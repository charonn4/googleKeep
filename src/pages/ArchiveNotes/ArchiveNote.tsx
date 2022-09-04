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
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import style from '../../components/Note/Note.module.css'

import {NotesContext} from "../../context/NotesProvider";
import OtherActionsNote from '../../components/OtherActionsNote/OtherActionsNote';

const NoteCard = styled(Card)`
    width: 280px;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: 10px;
`

const ArchiveNote = ({note}: any) => {
    const [isButtonsVisible, setButtonsVisible] = useState<string>('0')
    const {archiveNotes, setNotes, setArchiveNotes, setDeletedNotes} = useContext(NotesContext)


    // при клике на кнопку удаления добавляем в массив удаленных данную заметку
    const deleteNote = (note:any) =>{
        const filteredNotesAfterDelete = archiveNotes.filter( (data:any) =>data.id !== note.id)
        setArchiveNotes(filteredNotesAfterDelete)
        setDeletedNotes((prevArr:any)=> [note, ...prevArr])
    }

    // при клике на кнопку анархивирования добавляем в массив основных данную заметку
    const unArchiveNote = (note: any) =>{
        const filteredNotesAfterArchive = archiveNotes.filter( (data:any) =>data.id !== note.id)
        setArchiveNotes(filteredNotesAfterArchive)
        setNotes((prevArr:any)=> [note, ...prevArr])
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
                <UnarchiveOutlinedIcon onClick={() => unArchiveNote(note)} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                {/*дропдаун для допольнительных действий*/}
                <OtherActionsNote deleteNote={() => deleteNote(note)} isButtonsVisible={isButtonsVisible} />

            </CardActions>

        </NoteCard>
    );
};

export default ArchiveNote;