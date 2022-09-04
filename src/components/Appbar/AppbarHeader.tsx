import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {styled} from "@mui/material/styles";

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

const AppbarHeader = ({handleDrawer}: AppBarHeaderProps) => {
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
            </Toolbar>
        </Header>
    );
};

export default AppbarHeader;