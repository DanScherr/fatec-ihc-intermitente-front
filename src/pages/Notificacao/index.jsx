import { useContext } from "react"
import NotificacaoColaborador from "./components/Colaborador"
import NotificacaoEmpresa from "./components/Empresa"
import AuthContext from "../../context/AuthContext";

export default function Notificacao(params) {
    const {tipo} = useContext(AuthContext);

    return (
        <>
            {
                tipo === 'empresa' ?
                <NotificacaoEmpresa />
                :
                <NotificacaoColaborador />
            }
        </>
    )
}