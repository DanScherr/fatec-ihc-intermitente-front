import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import Cadastro from "../Cadastro";
import Login from "../Login";
import AuthContext from "../../context/AuthContext";


export default function PortaUsuario(  ) {
    const {
        opcao,
        setOpcao
    } = useContext(AuthContext);

    return (
        <>
        {
        opcao === `login` || opcao==='' ?
            // Login
            <Login />
        : 
            // Cadastro
            <Cadastro />       
            }
        </>
    )
}