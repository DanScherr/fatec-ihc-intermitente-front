import { FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { useContext, useEffect } from "react";
import './Compartilhado.css'
import AuthContext from "../../../context/AuthContext";

export default function Compartilhado( {
    tentouCadastrar=false,
} ) {
    const {
        formComponents,
        handleBlur,
        handleInputs
    } = useContext(AuthContext)
    // EFEITO QUE RODA NO MOMENTO QUE AS VARIAVEIS MUDAM
    useEffect(() => {
        console.log('Input de nome: ', formComponents?.nome.value)
    }, [formComponents.nome.value])
    useEffect(() => {
        console.log('Input de email: ', formComponents?.email.value)
    }, [formComponents.email.value])
    useEffect(() => {
        console.log('Input de senha: ', formComponents?.senha.value)
    }, [formComponents.senha.value])

    
    return (
        <div id="CadastroCompartilhado">
            <Grid container>
                {/* NOME */}
                <Grid item xs={6}>
                    <FormControl fullWidth error={formComponents.nome.error} required={true} sx={{mb: 3, pr: 5}}> 
                        <InputLabel htmlFor='input-nome' sx={{color: 'font.main'}}>Nome:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-nome" 
                            aria-describedby="input-your-name"
                            value={formComponents.nome.value}
                        />
                        <FormHelperText id='my-helper-input-nome'>{formComponents.nome.helperText}</FormHelperText>
                    </FormControl>
                </Grid>

                {/* DOCUMENTO */}
                <Grid item xs={6}>
                    <FormControl fullWidth error={formComponents.documento.error} required={true} sx={{mb: 3}}> 
                        <InputLabel htmlFor='input-documento' sx={{color: 'font.main'}}>Documento:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-documento" 
                            aria-describedby="input-your-document"
                            value={formComponents.documento.value}
                        />
                        <FormHelperText id='my-helper-input-documento'>{formComponents.documento.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                {/* EMAIL INPUT */}
                <Grid item xs={6}>
                    <FormControl fullWidth error={formComponents.email.error} required={true} sx={{mb: 3, pr: 5}}>
                        <InputLabel htmlFor='input-email' sx={{color: 'font.main'}}>E-mail:</InputLabel>
                        <Input
                            onChange={handleInputs}
                            onBlur={handleBlur} 
                            id="input-email" 
                            aria-describedby="input-your-email"
                            value={formComponents.email.value}
                        />
                        <FormHelperText id='my-helper-input-email'>{formComponents.email.helperText}</FormHelperText>
                    </FormControl>
                </Grid>

                {/* SENHA INPUT */}
                <Grid item xs={6}>    
                    <FormControl fullWidth error={formComponents.senha.error} required={true} sx={{mb: 3}}>
                        <InputLabel htmlFor='input-senha' sx={{color: 'font.main'}}>Senha:</InputLabel>
                        <Input 
                            type="password"
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-senha" 
                            aria-describedby="input-your-senha" 
                            value={formComponents.senha.value}
                        />
                        <FormHelperText id='my-helper-input-senha'>{formComponents.senha.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                {/* TELEFONE INPUT */}
                <Grid item xs={6}>
                    <FormControl fullWidth error={formComponents.telefone.error} required={true} sx={{mb: 3, pr: 5}}>
                        <InputLabel htmlFor='input-telefone' sx={{color: 'font.main'}}>Telefone:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-telefone" 
                            aria-describedby="input-your-telefone"
                            value={formComponents.telefone.value}
                        />
                        <FormHelperText id='my-helper-input-telefone'>{formComponents.telefone.helperText}</FormHelperText>
                    </FormControl>
                </Grid>

                {/* ENDERECO INPUT */}
                <Grid item xs={6}>
                    <FormControl fullWidth error={formComponents.endereco.error} required={true} sx={{mb: 3}}>
                        <InputLabel htmlFor='input-endereco' sx={{color: 'font.main'}}>Endereço:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            onBlur={handleBlur}
                            id="input-endereco" 
                            aria-describedby="input-your-endereco"
                            value={formComponents.endereco.value}
                        />
                        <FormHelperText id='my-helper-input-endereco'>{formComponents.endereco.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}