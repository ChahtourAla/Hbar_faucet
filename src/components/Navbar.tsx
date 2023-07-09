import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import HBARLogo from "../assets/hbar-logo.svg";

export default function NavBar() {
  return (
    <AppBar position='relative' color='primary'>
      <Toolbar>
        <img src={HBARLogo} className='hbarLogoImg'/>
        <Typography variant="h6" color="white" pl={1} noWrap>
          Happy Building
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            ml: "auto"
          }}
        >
          Button
        </Button>
      </Toolbar>
    </AppBar>
  )
}