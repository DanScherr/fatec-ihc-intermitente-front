import NotificacaoColaborador from "./components/Colaborador"
import NotificacaoEmpresa from "./components/Empresa"

export default function Notificacao(params) {
    let perfil = 'c';

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