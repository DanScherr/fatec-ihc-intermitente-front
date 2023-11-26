import { Box } from "@mui/material";
import Coloaborador from "../../Cadastro/components/Colaborador";
import Compartilhado from "../../Cadastro/components/Compartilhado";
import Qualificacoes from "./Qualificacoes";

export default function ConfiguracaoColaborador( ) {
    return (
        <Box
            component='form'
            sx={{
                position: 'absolute',
                top: '49%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                height: 600,
                bgcolor: 'background.navBar',
                border: '2px solid #000',
                boxShadow: 24,
                p: 10,
                borderRadius: 40,
                '&:hover': {
                    color: 'font.main',
                }
            }}
            autoComplete="off"
            noValidate 
        >
            <Compartilhado/>
            <Coloaborador />
            <Qualificacoes />
        </Box>
    )
}