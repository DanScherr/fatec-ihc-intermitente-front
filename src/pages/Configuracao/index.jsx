import { Button, Grid } from "@mui/material"
import ConfiguracaoColaborador from "./components/Colaborador"
import ConfiguracaoEmpresa from "./components/Empresa"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export default function Configuracao(params) {
    let perfil = 'colaborador';
    const {
        handleSubmit,
        setOpcao,
        handleClearForm
    } = useContext(AuthContext);

    return (
        <>
            PAGINA DE CONFIGURACAO
            {
                perfil === 'empresa' ?
                <ConfiguracaoEmpresa />
                :
                <ConfiguracaoColaborador />
            }
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'row'}
                sx={{
                    position: 'fixed', 
                    bottom: perfil==='empresa'?200:90, 
                    right: 0
                }}
            >
                {/* BOTAO SUBMIT */}
                <Grid item xs={1}>
                    <Button onClick={handleSubmit} variant="contained" sx={{mt: 1, mx: 'auto'}}>
                        Editar
                    </Button>
                </Grid>

                {/* BOTAO VOLTAR */}
                <Grid item xs={1}>
                    <Button onClick={handleClearForm}
                        variant="contained" 
                        sx={{
                            mt: 1, 
                            backgroundColor: 'secondary.main',
                            borderColor: `secondary.main`, 
                            '&:hover': {
                                backgroundColor: 'secondary.veryLightMain',
                                borderColor: 'white',
                                color: `white`,
                                opacity: `75%`
                            }
                    }}>
                        Limpar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}