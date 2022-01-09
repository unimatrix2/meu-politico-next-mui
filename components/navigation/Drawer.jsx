import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import ListItem from '@mui/material/ListItem';
import makeStyles from '@mui/styles/makeStyles';
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ThemeSwitcher from '../ThemeSwitchButton';
import { logout } from '../../services/auth.service';
import { Context } from '../../contexts/auth.context';

const drawerWidth = 240;

function AppDrawer({ mobileOnly, trigger, upperDrawer, lowerDrawer, ...props }) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);
	const [currentMenu, setCurrentMenu] = useState(upperDrawer ? upperDrawer[0].text : null);
  const [currentComponent, setCurrentComponent] = useState(upperDrawer ? upperDrawer[0].component : null)
	const { state, dispatch } = useContext(Context);
	const router = useRouter();

	const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        display: mobileOnly ? 'none' : 'flex'
      }
  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    dropdownIcon: {
      marginRight: theme.spacing(1)
    }
  }));

	const classes = useStyles();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

	const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router.push('/conta')}>
          <FaceIcon className={classes.dropdownIcon} />
        <p>Meu Perfil</p>
      </MenuItem>
      <MenuItem onClick={() => {
          logout();
          dispatch({ type: 'LOGOUT' });
          setAnchorEl(null);
          router.push('/');
        }}>
          <LockOutlinedIcon className={classes.dropdownIcon} />
        <p>Sair</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => router.push('/conta')}>
          <FaceIcon className={classes.dropdownIcon} />
        <p>Meu Perfil</p>
      </MenuItem>
      <MenuItem onClick={() => {
          logout();
          dispatch({ type: 'LOGOUT' });
          setMobileMoreAnchorEl(null);
        }}>
          <LockOutlinedIcon className={classes.dropdownIcon} />
        <p>Sair</p>
      </MenuItem>
    </Menu>
  );

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<List>
			{upperDrawer ? upperDrawer.map((current) => (
        <ListItem
						button
						key={current.text}
						onClick={() => {
							setCurrentMenu(current.text);
              setCurrentComponent(current.component);
							setMobileOpen(false);
						}}
					>
            <ListItemIcon>
              {current.icon}
            </ListItemIcon>
            <ListItemText primary={current.text} />
          </ListItem>
        )) : null }
			</List>
			<Divider />
			<List>
				{ lowerDrawer ? lowerDrawer.map((current) => (
          <ListItem
						button
						key={current.text}
						onClick={() => {
							setCurrentMenu(current.text);
              setCurrentComponent(current.component);
							setMobileOpen(false);
						}}
					>
            <ListItemIcon>
              {current.icon}
            </ListItemIcon>
            <ListItemText primary={current.text} />
          </ListItem>
        )) : null }
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

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
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						{currentMenu}
					</Typography>
					<div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ThemeSwitcher trigger={trigger} />
            {state.user?.cpf ? <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              size="large">
              <AccountCircle />
            </IconButton> : null}
          </div>
          <div className={classes.sectionMobile}>
            <ThemeSwitcher trigger={trigger} />
            {state.user?.cpf ? <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
              size="large">
            <AccountCircle />
          </IconButton> : null}
          </div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
      {renderMenu}
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{currentComponent}
			</Box>
		</Box>
	);
}

export default AppDrawer;
