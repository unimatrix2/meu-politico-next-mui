import { useContext, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import FaceIcon from '@material-ui/icons/Face';
import Toolbar from '@material-ui/core/Toolbar';
import ThemeSwitcher from '../ThemeSwitchButton';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import { logout } from '../../services/auth.service';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Context } from '../../contexts/auth.context';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function PrimarySearchAppBar({ mobileOnly, trigger }) {

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
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
  }));

  const { state, dispatch } = useContext(Context);

  const classes = useStyles();
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
      <MenuItem>
        <IconButton aria-label="Administração de dados da conta" color="inherit">
          <FaceIcon />
        </IconButton>
        <p>Meu Perfil</p>
      </MenuItem>
      <MenuItem onClick={async () => {
          await logout();
          dispatch({ type: 'LOGOUT' });
          setAnchorEl(null);
        }}>
        <IconButton aria-label="Finalizar sessão" color="inherit">
          <LockOutlinedIcon />
        </IconButton>
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
      <MenuItem>
        <IconButton aria-label="icone de administração de perfil" color="inherit">
          <FaceIcon />
        </IconButton>
        <p>Meu Perfil</p>
      </MenuItem>
      <MenuItem onClick={async () => {
          await logout();
          dispatch({ type: 'LOGOUT' });
          setMobileMoreAnchorEl(null);
        }}>
        <IconButton aria-label="icone de logout" color="inherit">
          <LockOutlinedIcon />
        </IconButton>
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
            >
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
            >
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
