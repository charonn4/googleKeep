import React, {useContext} from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import style from './SidebarList.module.css'
import {NotesContext} from "../../context/NotesProvider";


interface SidebarListProps extends MuiAppBarProps {
    open?: boolean;
}
interface itemListTypes {
    id: number,
    name: string,
    icon: any,
    url: string
}

const SidebarList = ({open}:SidebarListProps) => {
    // чтобы сбрасывался  поиск при смене страницы
    const {setSearchText} = useContext(NotesContext)
    // элементы сайдбара массивом что в дальнейшем можно было добавлять вкладки push-ом как в оригинальном google keep
    const itemList:itemListTypes[] = [
        {id: 1, name: 'Заметки', icon: <LightbulbOutlinedIcon/>, url: '/'},
        {id: 2, name: 'Архив', icon: <ArchiveOutlinedIcon/>, url: '/archive'},
        {id: 3, name: 'Корзина', icon: <DeleteOutlineIcon/>, url: '/trash'}
    ]

    return (
        <List>
            {itemList.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                   <Link onClick={()=>setSearchText('')} className={style.link} to={item.url} >
                       <ListItemButton
                           sx={{
                               minHeight: 48,
                               justifyContent: open ? 'initial' : 'center',
                               px: 2.5,
                           }}>
                           <ListItemIcon
                               sx={{
                                   minWidth: 0,
                                   mr: open ? 3 : 'auto',
                                   justifyContent: 'center',
                               }}>
                               {item.icon}
                           </ListItemIcon>
                           <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                       </ListItemButton>
                   </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default SidebarList;