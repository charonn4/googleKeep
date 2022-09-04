import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {NotesContext} from "../../context/NotesProvider";
import {v4 as uuid} from 'uuid'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 8px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 12px;
  border-radius: 8px;
`

const note = {
    id: uuid(),
    headerText: '',
    text: ''
}

const NoteForm = () => {
    // с помощью useState при клике на инпут основного текста появляется инпут хедертекста и с помошью clickawaylistener инпут хедертекста скрывается
    // при клике на другое место
    const [visible, setVisible] = useState<boolean>(false)

    const [addNote, setAddNote] = useState({...note, id: uuid()})
    // CONTEXT
    const {setNotes} = useContext(NotesContext)
    const onTextChange = (event:any) => {
        let changedNote = {...addNote, [event.target.name]: event.target.value}
        setAddNote(changedNote)
    }
    const handleClickAway = () =>{
        setVisible(false)
        setAddNote({...note, id: uuid()})
        if(addNote.headerText || addNote.text){
            setNotes((prevArr: any) => [addNote, ...prevArr])
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container >
                {visible && <TextField placeholder={'Введите заголовок'} variant={'standard'} InputProps={{ disableUnderline: true }}
                onChange={(event) => onTextChange(event)} name={'headerText'} value={addNote.headerText}/>}
                <TextField onClick={() => setVisible(true)} placeholder={'Заметка...'} variant={'standard'} multiline InputProps={{ disableUnderline: true }}
                           onChange={(event) => onTextChange(event)} name={'text'} value={addNote.text}/>
            </Container>
        </ClickAwayListener>

    );
};

export default NoteForm;