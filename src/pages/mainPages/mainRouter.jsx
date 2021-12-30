import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BookIcon from '@mui/icons-material/Book';
import { Link, Route, Routes } from 'react-router-dom';
// import MyLable from './myLable';
// import ChangePwd from '/changePwd';
// import UploadPic from './uploadPic';
// import UploadVideo from 'uploadVideo';

const drawerWidth = 240;



export default class MainRouter extends React.Component {
    
  render(){
    // const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
    <div>
        <Toolbar />
        <Divider />
        <List>
          <ListItem button key="上传图片" >
            <ListItemIcon>
              <InsertPhotoIcon />
            </ListItemIcon>
            <Link to="/uploadPic" />
            <ListItemText primary="上传图片" />
          </ListItem>
            <ListItem button key="上传视频">
            <ListItemIcon>
              <OndemandVideoIcon/>
            </ListItemIcon>
            <ListItemText primary="上传视频" />
          </ListItem>
            <ListItem button key="我的标注" >
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="我的标注" />
          </ListItem>
            <ListItem button key="标注界面" >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="标注界面" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="修改密码">
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="修改密码" />
          </ListItem>
          <ListItem button key="退出登录" >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            
            <ListItemText primary="退出登录" />
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
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
            {/* <Route path= */}
        </Routes>
      </Box>
    </Box>
  );
 }
}
