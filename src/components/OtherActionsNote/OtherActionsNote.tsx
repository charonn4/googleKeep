import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const OtherActionsNote = ({isButtonsVisible, deleteNote}: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <MoreVertIcon onClick={handleClick} sx={{opacity: `${isButtonsVisible}`}} fontSize={'small'}/>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={deleteNote}>Удалить заметку</MenuItem>
                <MenuItem onClick={handleClose}>Добавить ярлык</MenuItem>
                <MenuItem onClick={handleClose}>Добавить рисунок</MenuItem>
            </Menu>
        </div>
    );
};

export default OtherActionsNote;