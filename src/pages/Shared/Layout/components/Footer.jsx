//@ts-check
/** State */
import React from 'react';
/** MUI */
import { 
    Box,
    Button,
    Grid,
} from '@mui/material';
import './Footer.css'


export default function SharedLayoutFooter( ) {

    return(
        <>  
            <Box sx={{
                color: 'primary.lightMain', 
                bgcolor: 'background.footBox', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                height: '40px',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Grid container justifyContent={'center'} alignContent={'center'}>

                    <Grid item xs={1} alignContent={'flex-end'}>
                        <Button>Botao 1</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button>Botao 2</Button>
                    </Grid>
                    <Grid item xs={1} alignContent={'flex-end'}>
                       <Button>Botao 3</Button>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};