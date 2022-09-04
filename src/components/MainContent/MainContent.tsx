import React from 'react';
import Notes from '../../pages/Notes/Notes';
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';

const MainContent = () => {
    const MainContainer = styled(Box)`
        display: flex;
        width: 100%;
      justify-content: center;
    `

    return (
        <MainContainer>
            <SidebarDrawer/>
            <Notes></Notes>
        </MainContainer>
    );
};

export default MainContent;