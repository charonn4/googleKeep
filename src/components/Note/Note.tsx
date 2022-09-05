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
import Dialog from '@mui/material/Dialog';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {v4 as uuid} from "uuid";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Tooltip from '@mui/material/Tooltip';

const NoteCard = styled(Card)`
    width: 280px;
    box-shadow: inset 1px 1px 0 rgb(0 0 0 / 10%), inset 0 -1px 0 rgb(0 0 0 / 7%);
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin: 10px;
`



const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 12px;
  border-radius: 8px;
  width: 400px;
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

    // для редактирования
    const [openModal, setOpenModal] = useState<boolean>(false)

    const [editNote, setEditNote] = useState({...note})
    const onTextChange = (event:any) => {
        let changedNote = {...editNote, [event.target.name]: event.target.value}
        setEditNote(changedNote)
    }

    const handleClickAway = () => {
        setOpenModal(false)
        const filteredNotes = notes.filter((data:any)=> data.id !== editNote.id)
        if(note !== editNote){
            setNotes(()=> [editNote, ...filteredNotes])
        }


    }

    return (
        <>
            <NoteCard  onMouseEnter={()=>setButtonsVisible('1')} onMouseLeave={()=>setButtonsVisible('0')}>
                <CardContent onClick={()=>setOpenModal(true)}>
                    <Typography>{note.headerText}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
                <CardActions className={style.buttonsWrapper} sx={{
                    justifyContent: 'space-between'
                }}>
                    <Tooltip title="Сохранить напоминание">
                        <AddAlertOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                    </Tooltip>
                    <Tooltip title="Соавторы">
                        <PersonAddAltOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                    </Tooltip>
                    <Tooltip title="Параметры фона">
                        <PaletteOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                    </Tooltip>
                    <Tooltip title="Добавить картинку">
                        <InsertPhotoOutlinedIcon sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                    </Tooltip>
                    <Tooltip title="Архивировать">
                        <ArchiveOutlinedIcon onClick={() => archiveNote(note)} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
                    </Tooltip>
                    {/*дропдаун для допольнительных действий*/}
                    <OtherActionsNote deleteNote={() => deleteNote(note)} isButtonsVisible={isButtonsVisible} />

                </CardActions>

            </NoteCard>
            <Dialog open={openModal} onClose={ handleClickAway }>
                <Container >
                     <DialogContent>
                         <TextField onChange={(event) => onTextChange(event)} placeholder={'Введите заголовок'} variant={'standard'} InputProps={{ disableUnderline: true }}
                                    name={'headerText'} value={editNote.headerText} />
                         <TextField placeholder={'Заметка...'} value={editNote.text} variant={'standard'} multiline InputProps={{ disableUnderline: true }}
                                    onChange={(event) => onTextChange(event)} name={'text'} />
                     </DialogContent>
                    <DialogActions className={style.buttonsFooter}>
                        <AddAlertOutlinedIcon  fontSize={'small'}/>
                        <PersonAddAltOutlinedIcon fontSize={'small'}/>
                        <PaletteOutlinedIcon fontSize={'small'}/>
                        <InsertPhotoOutlinedIcon  fontSize={'small'}/>
                        <Tooltip title='Архивировать'>
                            <ArchiveOutlinedIcon onClick={() => archiveNote(note)} fontSize={'small'}/>
                        </Tooltip>
                        {/*дропдаун для допольнительных действий*/}
                        <OtherActionsNote deleteNote={() => deleteNote(note)} />
                    </DialogActions>
                </Container>
            </Dialog>
        </>
    );
};

export default Note;