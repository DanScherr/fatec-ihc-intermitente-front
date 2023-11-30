import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Empresa from './components/Empresa'
import Colaborador from './components/Colaborador'
import Compartilhado from "./components/Compartilhado";

export default function Cadastro( ) {
    // VARIAVEIS DE CONTEXTO GLOBAL DE AUTENTICACAO
    const {
        setOpcao,
        cadastro,
        RealizaCadastro,
        handleInputs,
        formComponents,
        handleBlur,
        radioButton, setRadio
    } = useContext(AuthContext);

    

    // LIDA COM O SUBMIT
    const [tentouCadastrar, setTentouCadastrar] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formComponents.nome.error && !formComponents.email.error && !formComponents.senha.error ){
            RealizaCadastro(
                formComponents.nome.value,
                formComponents.documento.value,
                formComponents.email.value,
                formComponents.telefone.value,
                formComponents.senha.value,
                formComponents.endereco.value,
            );
            setTentouCadastrar(true);
        }
    };

    // GERA MSG SE LOGIN FOR SUCESSO OU FALHA
    const [msgCadastro, setMsgCadastro] = useState(false);

    useEffect(() => {
        if (!cadastro.loading && !cadastro.cadastro && tentouCadastrar)
            setMsgCadastro(true);
    }, [cadastro]);

    useEffect(() => {
        console.log('Radio button:', radioButton)
    }, [radioButton]);

    useEffect(() => {
        console.log(formComponents)
    }, [formComponents])

    return (
        <Box
            component='form'
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 900,
                height: 700,
                bgcolor: 'background.navBar',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                borderRadius: 40,
                '&:hover': {
                    color: 'font.main',
                }
            }}
            autoComplete="off"
            noValidate
        >
            {
                cadastro.loading // se o submit estiver carregando..
                ?
                // CARREGAMENTO
                <CircularProgress sx={{position: 'fixed', top: '46%', left: '46%'}}/>
                
                :
                // FORMULARIO DE CADASTRO
                <Stack>
                    {/* TITULO */}
                    <Typography sx={{my: 2, mx: "auto", fontSize: `23px`, color: 'primary.main'}}>
                        CADASTRO
                    </Typography>

                    {/* RADIO BUTTON */}
                    <FormControl required={true} sx={{mb: 3}}> 
                        <FormLabel htmlFor='input-nome' sx={{color: 'font.main'}}>Tipo de Cadastro:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Colaborador"
                            name="radio-buttons-group"
                            sx={{flexDirection: 'row'}}
                        >
                            <FormControlLabel onClick={() => setRadio(true)} sx={{display: 'inline'}} value="Colaborador" control={<Radio />} label="Colaborador" />
                            <FormControlLabel onClick={() => setRadio(false)} sx={{display: 'inline'}} value="Empresa" control={<Radio />} label="Empresa" />
                        </RadioGroup>
                    </FormControl>

                    {/* FORM COMPARTILHADO */}
                    <Compartilhado 
                        tentouCadastrar={tentouCadastrar} 
                        formComponents={formComponents} 
                        handleBlur={handleBlur}
                        handleInputs={handleInputs}
                    />

                    {
                        radioButton && <Colaborador 
                            tentouCadastrar={tentouCadastrar} 
                            formComponents={formComponents} 
                            handleBlur={handleBlur}
                            handleInputs={handleInputs}
                        />
                    }
                    {
                        !radioButton && <Empresa 
                            tentouCadastrar={tentouCadastrar} 
                            formComponents={formComponents} 
                            handleBlur={handleBlur}
                            handleInputs={handleInputs}
                        />
                    }
                    
                    <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}
                        sx={{position: 'fixed', bottom: 20, right: 20}}
                    >
                        {/* BOTAO SUBMIT */}
                        <Grid item xs={3}>
                            <Button onClick={handleSubmit} variant="contained" sx={{mt: 4, mx: 'auto'}}>
                                Cadastrar
                            </Button>
                        </Grid>

                        {/* BOTAO VOLTAR */}
                        <Grid item xs={3}>
                            <Button onClick={() => setOpcao('')}
                                variant="contained" 
                                sx={{
                                    mt: 2, 
                                    backgroundColor: 'secondary.main',
                                    borderColor: `secondary.main`, 
                                    '&:hover': {
                                        backgroundColor: 'secondary.veryLightMain',
                                        borderColor: 'white',
                                        color: `white`,
                                        opacity: `75%`
                                    }
                            }}>
                                Voltar
                            </Button>
                        </Grid>
                    </Grid>
                    
                <Typography 
                    sx={{
                        display: msgCadastro ? 'block' : 'none',
                        mt: 3, mb: 8, mx: "auto", fontSize: `14px`, color: '#f44336'
                    }}
                >
                    {'Cadastro falhou! Tente novamente.'}
                </Typography>
            </Stack>
            }
        </Box>
    );
};