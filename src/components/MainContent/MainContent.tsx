import React from 'react';
import Notes from '../../pages/Notes/Notes';
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer';
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArchiveNotes from "../../pages/ArchiveNotes/ArchiveNotes";
import DeletedNotes from "../../pages/DeletedNotes/DeletedNotes";

const MainContent = () => {
    const MainContainer = styled(Box)`
      display: flex;
      width: 100%;
      justify-content: center;
    `

    return (
        <MainContainer>
            <BrowserRouter>
            <SidebarDrawer/>
                <Routes>
                    <Route path={'/'} element={<Notes/>}></Route>
                    <Route path={'/archive'} element={<ArchiveNotes/>}></Route>
                    <Route path={'/trash'} element={<DeletedNotes/>}></Route>
                </Routes>
            </BrowserRouter>
        </MainContainer>
    );
};

export default MainContent;