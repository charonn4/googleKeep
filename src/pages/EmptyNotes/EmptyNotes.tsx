import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import {Container} from "@mui/material";

const Lightbulb = styled(LightbulbOutlinedIcon)`
  font-size: 140px;
  color: #ede9e9;
`
const EmptyNotesText = styled(Typography)`
  font-size: 22px;
  color: #80868b;
`
const EmptyNotesContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  height: 100%;
`

const EmptyNotes = ({text}:any) => {
    return (
        <EmptyNotesContainer>
            <Lightbulb fontSize={'large'}/>
            <EmptyNotesText>{text}</EmptyNotesText>
        </EmptyNotesContainer>
    );
};

export default EmptyNotes;