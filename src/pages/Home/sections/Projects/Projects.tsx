import { styled, Grid, Container, Typography, Box, CardActionArea } from '@mui/material'
import StyledButton from '../../../../components/Styled-Button/StyledButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Padding } from '@mui/icons-material';

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        paddingBottom: "20px"

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
                            <Card sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                border: '1px solid #D3D3D3',
                                borderRadius: "8px"
                            }}>
                                <Box p={2}>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" bgcolor={'transparent'} mb={0} color="primary.contrastText">
                                            Project Exemple
                                        </Typography>
                                        <Typography variant="body2" mb={2} color="primary.contrastText">
                                            July 2024 ~ August 2024
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image="src\assets\images\Avatar.png"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" color="primary.contrastText">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="primary.contrastText">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <Grid container display="flex" justifyContent="start" spacing={1} pt={3}>
                                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                                <StyledButton onClick={() => console.log("see project")}>
                                                    <VisibilityIcon />
                                                    <Typography>
                                                        View Project
                                                    </Typography>
                                                </StyledButton>
                                            </Grid>
                                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                                <StyledButton onClick={() => console.log("show code")}>
                                                    <CodeIcon />
                                                    <Typography>
                                                        Show Code
                                                    </Typography>
                                                </StyledButton>
                                            </Grid>
                                        </Grid>
                                    </CardActionArea>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                border: '1px solid #D3D3D3',
                                borderRadius: "8px"
                            }}>
                                <Box p={2}>
                                    <CardActionArea>
                                        <Typography gutterBottom variant="h5" component="div" bgcolor={'transparent'} mb={0} color="primary.contrastText">
                                            Project Exemple
                                        </Typography>
                                        <Typography variant="body2" mb={2} color="primary.contrastText">
                                            July 2024 ~ August 2024
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image="src\assets\images\Avatar.png"
                                            alt="green iguana"
                                        />
                                        <CardContent sx={{ paddingLeft: "0" }}>
                                            <Typography gutterBottom variant="h5" component="div" color="primary.contrastText">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="primary.contrastText">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <Grid container display="flex" justifyContent="start" spacing={1} pt={3}>
                                            <Grid item xs={12} md={6} display="flex" justifyContent="center" >
                                                <StyledButton onClick={() => console.log("see project")}>
                                                    <VisibilityIcon />
                                                    <Typography>
                                                        View Project
                                                    </Typography>
                                                </StyledButton>
                                            </Grid>
                                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                                <StyledButton onClick={() => console.log("show code")}>
                                                    <CodeIcon />
                                                    <Typography>
                                                        Show Code
                                                    </Typography>
                                                </StyledButton>
                                            </Grid>
                                        </Grid>
                                    </CardActionArea>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects