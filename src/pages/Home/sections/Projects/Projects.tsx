import { styled, Grid, Container, Typography, Box } from '@mui/material'

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
    }))

    const StyledProjectsCard = styled("div")(({ theme }) => ({
        border: "1px solid #D3D3D3",
        width: "100%",
        padding: "8px",
        borderRadius: "5px",
        height: "500px"
    }))

  return (
    <>
      <StyledProjects>
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} mt={2} mb={2}>
                    <Typography variant='h2' color="primary.contrastText" textAlign="center">Projects</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledProjectsCard>
                        teste   
                    </StyledProjectsCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledProjectsCard>
                        teste   
                    </StyledProjectsCard>
                </Grid>
            </Grid>
        </Container>
      </StyledProjects>
    </>
  )
}

export default Projects