import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
// import Home from './Home';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import InfoIcon from '@mui/icons-material/Info';
// import AboutMe from './AboutMe';
// import Form from './Form';
// import Project from './Project';
// import Skill from './Skill';
import { Button } from '@mui/material';
import Signin from './Signin';
import ChatBot from './ChatBot';
// import Accordian from '../Pages/AboutUs';
import Aboutme from './Aboutme';
import Achive from './Achieve';
import Benefits from './Benefits';
import Home from './Home';
import Helpline from './HelpLine';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menuData, setMenuData] = React.useState("Home")

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* elevation used to adjust shadow */}
        <AppBar position="fixed" sx={{ backgroundColor: "#28282B", color: "white" }} elevation={3}>
          <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
            <div className='grp1'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              // onClick={handleDrawerOpen}
              onClick={() => { setOpen(!open) }}
              edge="start"
            // sx={{
            //   marginRight: 5,
            //   ...(open && { display: 'none' }),
            // }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" >
              {/* use img scr height 40 for images of logo */}
               VeteranLine
              </Typography>
            </div>
              <div className='grp2'>
              
              <Link to='http://127.0.0.1:8000/' style={{textDecoration:'none'}} ><Button variant='outlined' alignItems='right' id='chatsite'>Community chat</Button></Link>
              
            
            <Button variant='outlined' >
              <Link to='http://127.0.0.1:8000/payment/pay/' style={{textDecoration:'none'}}>Contribute</Link>
              
            </Button>
              </div>
           

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} PaperProps={{
          sx: {
            backgroundColor: "#28282B",
            color: 'white'
          }
        }}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("Home") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <HomeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("About Me") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <InfoIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="About Me" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("benefits") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <LoyaltyIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Benefits" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("Achieve") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <WorkspacePremiumIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Achieve" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("ChatBot") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <MarkChatUnreadIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="ChatBot" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("HelpLine") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <PhoneIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="HelpLine" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { setMenuData("Connect With Others") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "black"
                  }}
                >
                  {/* <MailIcon /> */}
                  <Diversity3Icon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Connect With Others" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: "white" }}>
          <DrawerHeader />
          {menuData === "Home" && <Home />}
          {menuData === "About Me" && <Aboutme />}
          {menuData === "benefits" && <Benefits />}
          {menuData === "Achieve" && <Achive />}
          {menuData === "ChatBot" && <ChatBot />}
          {menuData === "HelpLine" && <Helpline />}
          {/* <br /> */}
          {/* <Form/> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
