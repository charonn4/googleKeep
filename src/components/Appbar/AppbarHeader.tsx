import React, {useContext, useEffect, useState} from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import style from './AppbarHeader.module.css'
import {NotesContext} from "../../context/NotesProvider";

const Header = styled(MuiAppBar)`
  z-index: 1300;
  background: white;
  height: 64px;
`

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 22px;
  line-height: 24px;
  padding-left: 8px;
`

interface AppBarHeaderProps extends MuiAppBarProps {
    open?: boolean;
    handleDrawer?: any
}
const TextSearch = styled(TextField)`
    margin-left: 60px;
    width: 500px;
    border: none;
`

const AppbarHeader = ({handleDrawer}: AppBarHeaderProps) => {
    const {searchText, setSearchText} = useContext(NotesContext)
    return (
        <Header>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{
                        marginRight: 5
                    }}>
                    <MenuIcon />
                </IconButton>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt=""/>
                <Heading>Keep</Heading>
                <TextSearch value={searchText} onChange={(e)=> setSearchText(e.target.value)} className={style.search} placeholder='Поиск' size="small"></TextSearch>
            </Toolbar>
        </Header>
    );
};

export default AppbarHeader;