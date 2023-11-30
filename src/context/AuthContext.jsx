import * as React from 'react';
import { createContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { apiAdress } from '../bin/api';
import { validaEmail, validaNome, validaSenha, validaDocumento, validaEndereco, validaTelefone } from '../bin/ValidaInputs';
import dayjs from 'dayjs';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    let production = true;

    const Headers = () => {
        if (production) {
            return {headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Authorization", 
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            }}
        }
        else {
            return {mode: 'no-cors'}
        }
    }

    const [auth, setAuth] = React.useState(false);
    const [opcao, setOpcao] = React.useState('');
    const [cookieAuth, setCookieAuth] = React.useState(false);

    const ValidaCookie = async () => {
        const authToken = Cookies.get('authToken');

        if (authToken) {
            setAuth(true);
        };
    };

    const [cadastro, setCadastro] = React.useState({loading: false, cadastro: false});
    const schemaEmpresa = {
        nomeEmpresa: "string",
        documentoCNPJ: "string",
        siteEmpresa: "string",
        telefone: "string",
        email: "string",
        logradouro: "string",
        numero: "string",
        bairro: "string",
        cidade: "string",
        uf: "string",
        cep: "string"
    }
    const RealizaCadastro = async (nome, documento, email, telefone, senha, endereco) => {
        setCadastro(prev => {return {loading: true, cadastro: false}});
        console.log('Realizando cadastro')
        let schema = {};
        
        try {
            if (!radioButton) schema = {
                nomeEmpresa: nome,
                documentoCNPJ: documento,
                telefone: telefone,
                senha: senha,
                email: email,
                logradouro: endereco,
                siteEmpresa: `www.empresa.com`,
                numero: '0',
                bairro: '0',
                cidade: '0',
                uf: '0',
                cep: '0'
            }
            else schema = {
                nome: nome,
                documentoCPF: documento,
                email: email,
                telefone: telefone,
                senha: senha,
                logradouro: endereco,
                dtNascimento: calendarValue,
                sexo: radioButtonSexo,
                numero: '0',
                bairro: '0',
                cidade: '0',
                uf: '0',
                cep: '0'
            }
            const response = await axios.post(
                !radioButton?`${apiAdress}empresa`:`${apiAdress}colaborador`,
                schema,
                Headers()
            );
            if (response.status === 200) {
                setOpcao('login');
                setCadastro(prev => {return {loading: false, cadastro: true}});
            }
            
        } catch (error) {
            setCadastro(prev => {return {loading: false, cadastro: false}});
            console.error(error);
        };
    };

    const [login, setLogin] = React.useState({loading: false, login: false});
    const [userId, setUserId] = React.useState(null);
    const [tipo, setTipo] = React.useState('');

    const RealizaLogin = async (email, senha) => {
        setLogin(prev => {return {loading: true, login: false}});
        console.log('Realizando login..', email, senha)
        try {
            const response = await axios.post(
                production?`${apiAdress}login`: '' + `/api/v1/login`,
                {
                    email: email,
                    senha: senha
                },
                Headers()
            );
            if (response.status === 200) {
                setLogin(prev => {return {loading: false, login: true}});
                setTipo(response.data.flTipoLogin);
                setUserId(response.data.id);
                setAuth(true)
                Cookies.set('authToken', true)
            }
            console.log(response)
            
        } catch (error) {
            console.error(error);
        }
        setLogin(prev => {return {loading: false}});
        
    };

    const RealizaLogout = () => {
        Cookies.remove('authToken');
    }

    // CADASTRO
    // VARIAVEIS DO FORMULARIO
    let formInitialValue = {
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
    };

    const [formComponents, setFormComponents] = React.useState(formInitialValue);

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
                            ...prevVaules, // atualiza apenas item abaixo
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
                
                case 'input-sexo':
                    setFormComponents(prevVaules => {
                        return {
                            ...prevVaules, // atualiza apenas o item abaixo
                            sexo: {
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
                    let documentoError = validaDocumento(e.target.value);
                    console.log(e.target.value);
                    if (documentoError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                documento: {
                                    error: true,
                                    helperText: documentoError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;

                case 'input-endereco':
                    let enderecoError = validaEndereco(e.target.value);
                    console.log(e.target.value);
                    if (enderecoError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                endereco: {
                                    error: true,
                                    helperText: enderecoError,
                                    color: 'danger'
                                }
                            }
                        });
                    }
                    break;

                case 'input-telefone':
                    let telefoneError = validaTelefone(e.target.value);
                    console.log(e.target.value);
                    if (telefoneError != null)
                    {
                        setFormComponents(prevVaules => {
                            return {
                                ...prevVaules, // atualiza apenas o item abaixo
                                telefone: {
                                    error: true,
                                    helperText: telefoneError,
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

    const handleClearForm = () => {
        setFormComponents(formInitialValue);
    }

    // Notificacao
    const [openNotificacao, setOpenNotificacao] = React.useState({
        msg: '',
        open: false,
        severity: 'info'
    });

    // colaborador ou empresa
    const [ radioButton, setRadio ] = React.useState(true); // true = colaborador, false = empresa;
    const [calendarValue, setCalendarValue] = React.useState(dayjs(dayjs()));
    const [ radioButtonSexo, setRadioSexo ] = React.useState('Feminino'); // true = colaborador, false = empresa;


    return <AuthContext.Provider
        value={{
            auth: auth,
            setAuth,
            // ValidateLogin,
            opcao: opcao,
            setOpcao,
            cookieAuth,
            setCookieAuth,
            ValidaCookie,
            cadastro,
            RealizaCadastro, RealizaLogout,
            RealizaLogin, login,
            userId,
            openNotificacao, setOpenNotificacao,
            formComponents, setFormComponents,
            handleInputs,
            handleBlur,
            handleClearForm,
            radioButton, setRadio,
            calendarValue, setCalendarValue,
            radioButtonSexo, setRadioSexo,
            tipo, setTipo
        }}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthContext;