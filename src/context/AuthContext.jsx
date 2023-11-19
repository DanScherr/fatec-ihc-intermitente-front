import * as React from 'react';
import { createContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { apiAdress } from '../bin/api';
import { validaEmail, validaNome, validaSenha, validaDocumento, validaEndereco, validaTelefone } from '../bin/ValidaInputs';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    let production = false;

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
        const loginId = Cookies.get('userId');

        try {
            const response = await axios.get(
                production?`${apiAdress}`: '' + `/api/v1/usuario/${loginId}`,
                Headers()
            );
            if (response.status === 200 && response.data.status === true) {
                if (authToken) {
                    setAuth(true);
                    setUserId(loginId);
                };
            }
            else RealizaLogout();
            
        } catch (error) {
            setCadastro(prev => {return {loading: false, cadastro: false}});
            console.error(error);
        };

        
        // else ValidateLogin(); // buscando dados do DB
    };

    const [cadastro, setCadastro] = React.useState({loading: false, cadastro: false});

    const RealizaCadastro = async (nome, email, senha) => {
        setCadastro(prev => {return {loading: true, cadastro: false}});
        console.log('Realizando cadastro')
        try {
            let data = [];
            const response = await axios.post(
                production?`${apiAdress}`: '' + `/api/v1/usuario`,
                {
                    nome: nome,
                    email: email,
                    senha: senha
                },
                Headers()
            );
            if (response.status === 201 && response.data.status === true) {
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

    const RealizaLogin = async (email, senha) => {
        setLogin(prev => {return {loading: true, login: false}});
        console.log('Realizando login..')
        try {
            const response = await axios.post(
                production?`${apiAdress}`: '' + `/api/v1/login`,
                {
                    email: email,
                    senha: senha
                },
                Headers()
            );
            if (response.status === 200 && response.data.status === true) {
                setLogin(prev => {return {loading: false, login: true}});
                setUserId(response.data.id);
                console.log(response)
                Cookies.set('authToken', true, { expires: 7 });
                Cookies.set('userId', response.data.id, { expires: 7 });
                ValidaCookie();
            }
            console.log(response)
            
        } catch (error) {
            console.error(error);
        }
        setLogin(prev => {return {loading: false}});
        
    };

    const RealizaLogout = () => {
        Cookies.remove('authToken');
        Cookies.remove('userId');
        setLogin(prev => {return {loading: false, login: false}});
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
            handleClearForm
        }}
    >
        {children}
    </AuthContext.Provider>
};

export default AuthContext;