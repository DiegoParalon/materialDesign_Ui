import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material/'

import MenuIcon from '@mui/icons-material/Menu'
import useStyles from './header.style'


const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color='secondary' >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header