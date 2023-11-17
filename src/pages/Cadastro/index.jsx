import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import AuthContext from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { validaNome, validaEmail, validaSenha } from "../../bin/ValidaInputs";
import Empresa from './components/Empresa'
import Colaborador from './components/Colaborador'
import Compartilhado from "./components/Compartilhado";

export default function Cadastro( ) {
    // VARIAVEIS DE CONTEXTO GLOBAL DE AUTENTICACAO
    const {
        setOpcao,
        cadastro,
        RealizaCadastro,
    } = useContext(AuthContext);

    const [ radioButton, setRadio ] = useState(true); // true = colaborador, false = empresa;

    // VARIAVEIS DO FORMULARIO
    const [formComponents, setFormComponents] = useState({
        nome: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        email: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        senha: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        documento: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        endereco: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        telefone: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
    });

    // LIDA COM O SUBMIT
    const [tentouCadastrar, setTentouCadastrar] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formComponents.nome.error && !formComponents.email.error && !formComponents.senha.error ){
            RealizaCadastro(
                formComponents.nome.value,
                formComponents.email.value,
                formComponents.senha.value
            );
            setTentouCadastrar(true);
        }
    };

    // LIDA COM OS INPUTS
    const handleInputs = (e) => {
        e.preventDefault();
        switch (e.target.id) {
            case 'input-nome':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas item abaixo
                        nome: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-email':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        email: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-senha':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        senha: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-documento':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        documento: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-endereco':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        endereco: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-telefone':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        telefone: {
                            value: e.target.value
                        }
                    }
                });
                break;
        
            default:
                break;
        }
    };

    // LIDA COM O BLUR
    const handleBlur = (e) => {
        e.preventDefault();
        
        switch (e.target.id) {
            case 'input-nome':
                let nomeError = validaNome(e.target.value);
                console.log(e.target.value);
                if (nomeError != null)
                {
                    setFormComponents(prevVaules => {
                        return {
                            ...prevVaules, // atualiza apenas item abaixo
                            nome: {
                                error: true,
                                helperText: nomeError,
                                color: 'danger'
                            }
                        }
                    });
                }
                break;

                case 'input-email':
                    let emailError = validaEmail(e.target.value);
                    console.log(e.target.value);
                    if (emailError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                email: {
                                    error: true,
                                    helperText: emailError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;
    
                case 'input-senha':
                    let senhaError = validaSenha(e.target.value);
                    console.log(e.target.value);
                    if (senhaError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                senha: {
                                    error: true,
                                    helperText: senhaError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;

                case 'input-documento':
                    let documentoError = validaSenha(e.target.value);
                    console.log(e.target.value);
                    if (senhaError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                documento: {
                                    error: true,
                                    helperText: senhaError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;

                case 'input-endereco':
                    let enderecoError = validaSenha(e.target.value);
                    console.log(e.target.value);
                    if (senhaError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                endereco: {
                                    error: true,
                                    helperText: senhaError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;

                case 'input-telefone':
                    let telefoneError = validaSenha(e.target.value);
                    console.log(e.target.value);
                    if (senhaError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                telefone: {
                                    error: true,
                                    helperText: senhaError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;
        
            default:
                break;
        };
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