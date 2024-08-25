import { styled, Grid, Container, Typography, Box, CardActionArea, Link } from '@mui/material'
import StyledButton from '../../../../components/Styled-Button/StyledButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Padding } from '@mui/icons-material';
import Avatar from "../../../../assets/images/avatar.png"
import Vimmpag from "../../../../assets/images/vimmpag.png"
import LocalSeguros from "../../../../assets/images/localseguro.png"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        paddingBottom: "20px"
    }))

    const StyledProjectsCard = styled(Card)(({ theme }) => ({
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '1px solid #D3D3D3',
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        height: "100%", // Garantir que o Card ocupe todo o espaço disponível
    }))

    const StyledCardActionArea = styled(CardActionArea)({
        flex: 1, // Permite que o conteúdo do card cresça para ocupar todo o espaço disponível
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between' // Espaça o conteúdo de forma uniforme
    })

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
                                <StyledCardActionArea>
                                    <Box p={2}>
                                        <Typography gutterBottom variant="h5" component="div" bgcolor={'transparent'} mb={0} color="primary.contrastText">
                                            Local Seguros
                                        </Typography>
                                        <Typography variant="body2" mb={2} color="primary.contrastText">
                                            July 2023 ~ November 2023
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={LocalSeguros}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" color="primary.contrastText">
                                                Local Seguros
                                            </Typography>
                                            <Typography variant="body2" color="primary.contrastText">
                                            Com mais de 15 anos de experiência no ramo de Seguros foi empreender também na cidade de Jundiaí, onde trouxe um novo conceito em atendimento altamente personalizado e sob medida para empresas e pessoas da região.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Grid container display="flex" justifyContent="center" spacing={1} pt={3} px={2} pb={2}> {/* Adicionado px={2} e pb={2} */}
                                        <Link href="https://vimmpag.com.br/" target="_blank" width="100%">
                                            <StyledButton onClick={() => console.log("see project")}>
                                                <VisibilityIcon />
                                                <Typography>
                                                    View Project
                                                </Typography>
                                            </StyledButton>
                                        </Link>
                                    </Grid>
                                </StyledCardActionArea>
                            </StyledProjectsCard>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <StyledProjectsCard>
                                <StyledCardActionArea>
                                    <Box p={2}>
                                        <Typography gutterBottom variant="h5" component="div" bgcolor={'transparent'} mb={0} color="primary.contrastText">
                                            VimmPag
                                        </Typography>
                                        <Typography variant="body2" mb={2} color="primary.contrastText">
                                            January 2022 ~ August 2023
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={Vimmpag}
                                            alt="Site da  VimmPag"
                                        />
                                        <CardContent sx={{ paddingLeft: "0" }}>
                                            <Typography gutterBottom variant="h5" component="div" color="primary.contrastText">
                                                VimmPag
                                            </Typography>
                                            <Typography variant="body2" color="primary.contrastText">
                                                No mercado desde 2019, a VIMM Pag é uma Fintech de serviços de gestão de pagamentos que desenvolve soluções tecnológicas abrangendo o ecossistema completo desde a originação de recebíveis até a captação de recursos no mercado de capitais.
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <Grid container display="flex" justifyContent="center" spacing={1} pt={3} px={2} pb={2}> {/* Adicionado px={2} e pb={2} */}
                                        <Link href="https://vimmpag.com.br/" target="_blank" width="100%">
                                            <StyledButton onClick={() => console.log("see project")}>
                                                <VisibilityIcon />
                                                <Typography>
                                                    View Project
                                                </Typography>
                                            </StyledButton>
                                        </Link>
                                    </Grid>
                                </StyledCardActionArea>
                            </StyledProjectsCard>
                        </Grid>
                    </Grid>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects;
