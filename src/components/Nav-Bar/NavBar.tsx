import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const Navbar = () => {

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly'
  }))

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default Navbar
