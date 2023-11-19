import { Card, Grid, TextField, Typography } from "@mui/material";
import './AccDetails.css'
import Qualificacoes from "../../../Configuracao/components/Qualificacoes";

export default function AccDetails({item}) {
    return (
        <Card
            id='ColaboradorAccDetails'
            sx={{mt: 2, width: '100%', p: 5, py: 2, backgroundColor: 'white', color: 'font.main'}}
        >
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
            
        </Card>
    )
}