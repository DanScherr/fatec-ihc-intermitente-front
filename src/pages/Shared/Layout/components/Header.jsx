//@ts-check
/** State */
import React, { useContext, useState } from 'react';
/** Navigate */
import { useNavigate } from 'react-router-dom';
/** MUI */
import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography, 
    Box, 
    Slide, 
    useScrollTrigger, 
    IconButton, 
    Menu, 
    MenuItem, 
    Tooltip, 
    Avatar,
    Button,
    Icon,
} from '@mui/material';
/** Assets */
import AuthContext from '../../../../context/AuthContext';
import icon from './../../../../static/images/icon/logo192.png'

export default function SharedLayoutHeader( ) {
    const {RealizaLogout} = useContext(AuthContext)

    /** Hide Bar when Scroll */
    const trigger = useScrollTrigger();

    /** Responsive Bar */
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    /** Navigate */
    const navigate = useNavigate();
    const navegarPagina = ((page) => {
        navigate(`/${page}`)
        if (page === '') window.location.reload();
    })

    /** Mockup */
    let paginas = [ 'jogue', 'sobre' ]
    let configuracao = [ 'logout' ]

    return(
        <>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar sx={{color: 'primary.main', bgcolor: 'background.navBar'}}  >
                    <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center'}} >
                        <Toolbar disableGutters variant="dense" sx={{px: 'auto'}}>

                            {/** BIG SCREENS */}
                            {/** Logo */}
                            <Box>
                                <Button onClick={() => navegarPagina('/')} sx={{mx: 'auto'}} >
                                    <Icon 
                                        sx={{ 
                                            display: { xs: 'none', md: 'flex'}, 
                                            mr: 1, fontSize: '30px',
                                            backgroundImage: `url(${icon})`,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat'
                                        }} 
                                    />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                        fontSize: '17px',
                                        fontWeight: '700',
                                        letterSpacing: '.2rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                        }}
                                    >
                                        INTERMITENTE
                                    </Typography>
                                </Button>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>
            <Box sx={{height: 50}} />
        </>
    )
}