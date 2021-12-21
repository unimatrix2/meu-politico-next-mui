import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FaceIcon from '@mui/icons-material/Face';
import InputBase from '@mui/material/InputBase';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { logout } from '../../services/auth.service';
import { Context } from '../../contexts/auth.context';
import ThemeSwitcher from '../ThemeSwitchButton';

export default function PrimarySearchAppBar({ mobileOnly, trigger, ...props }) {

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

  const { state, dispatch } = useContext(Context);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const router = useRouter();

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

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
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
    </div>
  );
}
