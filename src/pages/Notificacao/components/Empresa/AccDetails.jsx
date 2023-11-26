import React from "react";
import { Card, Grid, Tooltip, Typography, Button, Modal, Box } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import './AccDetails.css'
import Qualificacoes from "../../../Configuracao/components/Qualificacoes";


export default function AccDetails({item}) {

    const [open, setOpen] = React.useState(false);

    return (
        <Card
            id='ColaboradorAccDetails'
            sx={{mt: 2, width: '100%', p: 5, py: 2, backgroundColor: 'white', color: 'font.main'}}
        >
            <Grid container sx={{mb: 2.6}} justifyContent={'end'}>
                <Grid item>
                    {/* Cancel Button */}
                    <Tooltip title={`Cancelar!`} placement="top-start" arrow>
                        <Button onClick={() => setOpen(true)}
                            sx={{display: item.status==='cancelado'&&'none', m: 0, p:0, width: '24px'}}
                        >
                            <CancelIcon sx={{color: '#dd2c00'}} />
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
            {/* NOME */}
            <Grid container sx={{my: 2.6}}>
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Nome:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.nome}
                    </Typography>
                </Grid>
            </Grid>
            

            {/* NOME */}
            <Grid container sx={{my: 2.5}}>
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Empresa:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.empresa}
                    </Typography>
                </Grid>
            </Grid>
            

            {/* NOME */}
            <Grid container sx={{my: 2.5}}>
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Valor/Hora:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.valorHora}
                    </Typography>
                </Grid>
            </Grid>
            

            {/* DATAS */}
            <Grid container sx={{my: 2.5}}>

                {/* DATA INICIO */}
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Data Início:</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.dtInicio}
                    </Typography>
                </Grid>

                {/* DATA FIM */}
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2, ml: 2}}>Data Fim:</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.dtFim}
                    </Typography>
                </Grid>
                
            </Grid>

            {/* QUALIFICACOES */}
            <Grid container sx={{my: 2.5}}>
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Qualificações:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Qualificacoes />
                </Grid>
            </Grid>
            

            {/* SOBRE */}
            <Grid container sx={{my: 2.5}}>
                <Grid item xs={3}>
                    <Typography sx={{display: 'inline-block', mr: 2}}>Descricao:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant={<a/>} sx={{display: 'inline-block', width: '100%', border: '1px solid black', p: 1, borderRadius: 2}}>
                        {item.descricao}
                    </Typography>
                </Grid>
            </Grid>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={'white'} variant="h6" component="h2">
                        Você deseja cancelar o projeto?
                    </Typography>
                    <Button>
                        Cancelar!
                    </Button>
                </Box>
            </Modal>
            
        </Card>
    )
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};