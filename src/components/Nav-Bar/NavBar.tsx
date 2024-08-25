import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import { Link } from "react-scroll"

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
          <Link to="about" smooth={true} duration={500}>
            <MenuItem>
              About
            </MenuItem>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <MenuItem>
              Skills
            </MenuItem>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <MenuItem>
              Projects
            </MenuItem>
          </Link>
        </StyledToolbar>
      </AppBar>
    </>
  )
}

export default Navbar
