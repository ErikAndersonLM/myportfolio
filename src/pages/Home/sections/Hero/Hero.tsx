import { styled, Grid, Container, Typography, Box } from '@mui/material'
import { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import Avatar from "../../../../assets/images/avatar.png"
import theme from '../../../../theme';
import StyledButton from '../../../../components/Styled-Button/StyledButton';
import { AnimatedBackground } from '../../../../components/Animated-Background/AnimatedBackground';


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0"
        }
    }))

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImage src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant='h1' textAlign="center"pb={2} >Erik Anderson</Typography>
                            <Typography color="primary.contrastText" variant='h2' textAlign="center">I'm a Front-End Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={1} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                    <StyledButton onClick={()=> console.log("download")}>
                                        <CloudDownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton  onClick={()=> console.log("email")}>
                                        <EmailIcon />
                                        <Typography>
                                            Contact Me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
