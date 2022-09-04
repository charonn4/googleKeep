import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {NotesContext} from "../../context/NotesProvider";
import { uuid } from 'uuidv4';

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

    const [addNote, setAddNote] = useState(note)
    // CONTEXT
    const [notes, setNotes] = useContext(NotesContext)

    return (
        <ClickAwayListener onClickAway={() => setVisible(false)}>
            <Container >
                {visible && <TextField placeholder={'Введите заголовок'} variant={'standard'} InputProps={{ disableUnderline: true }}/>}
                <TextField onClick={() => setVisible(true)} placeholder={'Заметка...'} variant={'standard'} multiline InputProps={{ disableUnderline: true }}/>
            </Container>
        </ClickAwayListener>

    );
};

export default NoteForm;