import { Button, Grid } from "@mui/material"
import NotificacaoColaborador from "./components/Colaborador"
import NotificacaoEmpresa from "./components/Empresa"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

export default function Notificacao(params) {
    let perfil = 'empresa';
    
    const {
        handleSubmit,
        setOpcao,
        handleClearForm
    } = useContext(AuthContext);

    return (
        <>
            {
                perfil === 'empresa' ?
                <NotificacaoEmpresa />
                :
                <NotificacaoColaborador />
            }
        </>
    )
}