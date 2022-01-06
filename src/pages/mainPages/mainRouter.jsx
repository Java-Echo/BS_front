import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BookIcon from '@mui/icons-material/Book';
import { Link, Route, Routes, Navigate,Outlet, useNavigate} from 'react-router-dom';
import EditPic from './imageEditor';
import Avatar from '@mui/material/Avatar';
// import MyLable from './myLable';
// import ChangePwd from '/changePwd';
// import UploadPic from './uploadPic';
// import UploadVideo from 'uploadVideo';

const drawerWidth = 240;



export default function MainRouter(props) {
    const navigate = useNavigate();
    function logout(){
      navigate('/loginPage');
    }
    const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
          <ListItem  >
            <ListItemButton component="a" href="/mainRouter/uploadPic">
            <ListItemIcon>
              <InsertPhotoIcon />
            </ListItemIcon>
            <ListItemText primary="我的图片" />
            </ListItemButton>
          </ListItem>
            <ListItem >
              <ListItemButton component="a"  href="/mainRouter/uploadVideo">
            <ListItemIcon>
              <OndemandVideoIcon/>
            </ListItemIcon>
            <ListItemText primary="我的视频" />
            </ListItemButton>
          </ListItem>
            <ListItem >
              <ListItemButton component="a" href="/mainRouter/editUser">
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="我的任务" />
            </ListItemButton>
          </ListItem>
            <ListItem >
              <ListItemButton component="a" href="/mainRouter/editCenter">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="标注中心" />
            </ListItemButton>
          </ListItem>
        
          <ListItem button key="退出登录" >
            <ListItemButton component="a" onClick={logout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            
            <ListItemText primary="退出登录" />
            </ListItemButton>
          </ListItem>
        </List>
        
    </div>
    );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            基于机器学习的图像标注网站
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        //   container={container}
          variant="temporary"
        //   open={mobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 2, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Outlet/>
        
      </Box>
    </Box>
  );
 }
// }
