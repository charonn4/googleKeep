import React from 'react';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NothingFoundContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-left: 20vh;
`
const NothingFoundText = styled(Typography)`
  font-size: 22px;
  color: #80868b;
`
const NothingFound = () => {
    return (
        <NothingFoundContainer>
            <NothingFoundText>Ничего не найдено.</NothingFoundText>
        </NothingFoundContainer>
    );
};

export default NothingFound;