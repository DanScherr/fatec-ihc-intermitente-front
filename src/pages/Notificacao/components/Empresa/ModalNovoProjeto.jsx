import { Button, FormControl, FormHelperText, Grid, Input, InputLabel } from "@mui/material";
import { DateField, DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


export default function ModalNovoProjeto( {setOpen} ) {
    let formInitialValue = {
        nome: {
            value: '',
            error: false,
            helperText: '',
            color: 'primary'
        },
        descricao: {
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
    };

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

            case 'input-descricao':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        email: {
                            value: e.target.value
                        }
                    }
                });
                break;

            case 'input-endereco':
                setFormComponents(prevVaules => {
                    return {
                        ...prevVaules, // atualiza apenas o item abaixo
                        senha: {
                            value: e.target.value
                        }
                    }
                });
                break;

            default:
                break;
        }
    };

    const [di, setDi] = useState(dayjs(dayjs()));
    const [df, setDf] = useState(dayjs(dayjs()));

    const [formComponents, setFormComponents] = React.useState(formInitialValue);
    return (
        <>
            <Grid container>
                {/* NOME */}
                <Grid item xs={12}>
                    <FormControl fullWidth error={formComponents.nome.error} required={true} sx={{mb: 3, pr: 5}}> 
                        <InputLabel htmlFor='input-nome' sx={{color: 'font.main'}}>Nome:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            id="input-nome" 
                            aria-describedby="input-your-name"
                        />
                        <FormHelperText id='my-helper-input-nome'>{formComponents.nome.helperText}</FormHelperText>
                    </FormControl>
                </Grid>

                {/* DOCUMENTO */}
                <Grid item xs={12}>
                    <FormControl fullWidth error={formComponents.descricao.error} required={true} sx={{mb: 3, pr: 5}}> 
                        <InputLabel htmlFor='input-documento' sx={{color: 'font.main'}}>Descrição:</InputLabel>
                        <Input 
                            onChange={handleInputs}
                            id="input-descricao" 
                            aria-describedby="input-your-document"
                        />
                        <FormHelperText id='my-helper-input-documento'>{formComponents.descricao.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                {/* EMAIL INPUT */}
                <Grid item xs={12}>
                    <FormControl fullWidth error={formComponents.endereco.error} required={true} sx={{mb: 3, pr: 5}}>
                        <InputLabel htmlFor='input-email' sx={{color: 'font.main'}}>Endereço:</InputLabel>
                        <Input
                            onChange={handleInputs} 
                            id="input-documento" 
                            aria-describedby="input-your-email"
                        />
                        <FormHelperText id='my-helper-input-email'>{formComponents.endereco.helperText}</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12} id={'CadastroColaboradorDataNascimento'}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateField']}>
                        <DateField
                            label="Data Início"
                            value={di}
                            onChange={(newValue) => setDi(newValue)}
                        />
                        <DateField
                            label="Data Fim"
                            value={df}
                            onChange={(newValue) => setDf(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>

            <Button sx={{mt: 3}} onClick={() => setOpen(false)}>
                Cadastrar Projeto
            </Button>
        </>
    )
}