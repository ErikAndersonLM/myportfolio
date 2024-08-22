import { styled, Grid, Container, Typography, Box } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Height } from '@mui/icons-material';

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        paddingBottom: "2%",
        backgroundColor: "antiquewhite",
        marginTop: "16px"
    }))

    const StyledSkills = styled("div")(({ theme }) => ({
        [theme.breakpoints.up('xs')]: { // <= mobile
            height: "100%",
            width: "60%"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            height: "60px",
            width: "130px"
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #D3D3D3",
        borderRadius: "5px",
        padding: '8px'
    }))

    const StyledAboutText = styled("div")(({ theme }) => ({
        marginTop: "2%",
        borderBottom: "2px solid #D3D3D3",
        padding: "16px"
    }))

    const StyledCard = styled("div")(({ theme }) => ({
        [theme.breakpoints.up('xs')]: { // <= mobile
            height: "140px",
            width: "60%"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            height: "130px",
            width: "65%"
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #D3D3D3",
        borderRadius: "5px",
        padding: '8px'
    }))

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg">
                    <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={12} display="flex" justifyContent="center">
                            <Typography variant='h2'>About Me</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledCard>
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight="600">
                                    Experience
                                </Typography>
                                <Typography textAlign="center">
                                    +2 years Frontend Development
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledCard>
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight="600">
                                    Education
                                </Typography>
                                <Typography textAlign="center">
                                    Technical diploma in computer science
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                            <StyledCard>
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight="600">
                                    Experience
                                </Typography>
                                <Typography textAlign="center">
                                    +2 years Frontend Development
                                </Typography>
                            </StyledCard>
                        </Grid>
                        <Grid item xs={12} md={12} display="flex" justifyContent="center">
                            <StyledAboutText>
                                <Typography textAlign="center">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, quibusdam quis. Ducimus quod perspiciatis nemo, provident labore delectus? Eveniet obcaecati optio facere est minima vitae soluta laudantium laboriosam, delectus repellat dicta explicabo distinctio, quidem ratione consequatur architecto. Adipisci ad quia est exercitationem ullam officia vero quaerat dolorem. Sint accusantium magnam quae illo iste iure quasi ratione consectetur fuga natus, quos odio ipsam nemo et reprehenderit voluptatum sed unde velit debitis reiciendis eveniet commodi est, amet nulla. Hic adipisci eos quibusdam ex iure quod harum, tempore repudiandae soluta beatae error eveniet quaerat sit quae. Quaerat aliquam dolore, voluptatem iste error ipsum.
                                </Typography>
                            </StyledAboutText>
                        </Grid>

                        <Grid item xs={12} md={12} display="flex" justifyContent="center">
                            <Typography variant='h2' fontWeight="10">Skills</Typography>
                        </Grid>

                        <Grid container spacing={2} mt={2} display="flex" justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Javascript
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    CSS
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Next JS
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Angular
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Git
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    React
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Vite
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Typescript
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Material Ui
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Angular Material
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    Figma
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center">
                            <StyledSkills>
                                <Typography textAlign="center">
                                    HMTL
                                </Typography>
                            </StyledSkills>
                        </Grid>
                        </Grid>


                    </Grid>
                </Container>
            </StyledAbout>
        </>
    )
}

export default About
