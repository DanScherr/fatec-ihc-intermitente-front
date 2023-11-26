import { Box, Button, Card, CardContent, FormControl, FormControlLabel, List, ListItem, ListSubheader, Radio, RadioGroup, Typography } from "@mui/material";
import { React, useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const filter = createFilterOptions();

export default function Qualificacoes(params) {
    const [selection, setSelection] = useState(qualif);
    const [newSelection, setNewSelection] = useState({nome: '', value: ''});
    // const updateSelection = (value) => {
    //     setSelection(prev => ({...prev, value.index: }));
    // };
    const [open, setOpen] = useState(false);
    const [valueSelect, setValueSelect] = useState(null);
    const [qualiEhEditavel, setQualiEhEditavel] = useState(false);
    const frontendEndpoint = window.location.href.split('/')[3];

    useEffect(() => {
        if (frontendEndpoint === 'configuracao')
            setQualiEhEditavel(true);
        else
            setQualiEhEditavel(false);
    }, [])

    const handleRadioChange = (event, item) => {
        let novoArray = selection.map((i) => {
            if (item.nome === i.nome)
                return {nome: i.nome, value: event.target.value};
            else
                return {nome: i.nome, value: i.value};
        })

        setSelection(novoArray);
    };

    const handleNewRadioChange = (event) => {
        const novoItem = {nome: valueSelect?.nome, value: event.target.value};
        
        console.log('novo array:', novoItem);

        setNewSelection(novoItem);
    };

    const handleAdcionarClick = () => {
        let valueHasBeenModified = false;

        let novoArray = selection.map((i) => {
            if (newSelection.nome === i.nome) {
                valueHasBeenModified = true;
                return {nome: newSelection.nome, value: newSelection.value};
            }
            else
                return {nome: i.nome, value: i.value};
        });
        if (!valueHasBeenModified)
            novoArray.push(newSelection);

        setSelection(novoArray);
    }

    useEffect(() => {
        console.log('Selection:', selection)
    }, [selection])

    return (
        <Card sx={{
            height: 150, display: 'block', 
            borderRadius: 5, backgroundColor: 'primary.lightestMain',
        }}>
            <CardContent>
            <List
                sx={{
                    width: '100%',
                    // maxWidth: 360,
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 120,
                    '& ul': { padding: 0 },
                    my: 'auto',
                }}
                subheader={<li />}
            >  
                 <ListSubheader sx={{backgroundColor: 'white', color: 'font.main'}}>{
                    `Qualificações: `}
                    {
                    qualiEhEditavel &&
                    <Button sx={{display: ''}} onClick={() => setOpen(true)}>
                        <AddCircleIcon />
                    </Button>
                    }
                 </ListSubheader>
                <ListItem>
                    {/* RADIO BUTTON */}
                    <FormControl required={false}> 
                        {
                            selection.map((item)=>{
                                return (
                                    <Box key={item.nome}>
                                        <Typography sx={{color: 'font.main', fontWeight: 550}}>{item.nome}</Typography>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="Colaborador"
                                            name="radio-buttons-group"
                                            sx={{flexDirection: 'row', color: 'font.main'}}
                                            value={item.value}
                                            onChange={(event) => handleRadioChange(event, item)}
                                        >
                                            <FormControlLabel sx={{display: 'inline'}} value='baixa' control={<Radio />} label="Baixa" />
                                            <FormControlLabel sx={{display: 'inline'}} value='media' control={<Radio />} label="Média" />
                                            <FormControlLabel sx={{display: 'inline'}} value='alta' control={<Radio />} label="Alta" />
                                        </RadioGroup>
                                    </Box>                                    
                                )
                            })
                        }
                        <div id={'compVazio'} style={{height: '20px'}} />
                    </FormControl>
                    
                </ListItem>
                
                        
            </List>
            </CardContent>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={'white'} variant="h6" component="h2">
                        Qualificação:
                    </Typography>
                    <Box>
                        <Autocomplete
                            value={valueSelect}
                            onChange={(event, newValue) => {
                                if (typeof newValue === 'string') {
                                  setValueSelect({
                                    nome: newValue,
                                  });
                                } else if (newValue && newValue.inputValue) {
                                  // Create a new value from the user input
                                  setValueSelect({
                                    nome: newValue.inputValue,
                                  });
                                } else {
                                  setValueSelect(newValue);
                                }
                            }}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);
                        
                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some((option) => inputValue === option.nome);
                                if (inputValue !== '' && !isExisting) {
                                  filtered.push({
                                    inputValue,
                                    nome: `Add "${inputValue}"`,
                                  });
                                }
                        
                                return filtered;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={qualif}
                            getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                  return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                  return option.inputValue;
                                }
                                // Regular option
                                return option.nome;
                              }}
                              renderOption={(props, option) => <li {...props}>{option.nome}</li>}
                              sx={{ width: 300 }}
                              freeSolo
                              renderInput={(params) => (
                                <TextField {...params} label="Free solo with text demo" />
                              )}
                            sx={{my: 3}}
                        />
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Colaborador"
                            name="radio-buttons-group"
                            sx={{flexDirection: 'row', color: 'font.main'}}
                            // value={item.value}
                            onChange={(event) => handleNewRadioChange(event)}
                        >
                            <FormControlLabel sx={{display: 'inline'}} value='baixa' control={<Radio />} label="Baixa" />
                            <FormControlLabel sx={{display: 'inline'}} value='media' control={<Radio />} label="Média" />
                            <FormControlLabel sx={{display: 'inline'}} value='alta' control={<Radio />} label="Alta" />
                        </RadioGroup>
                        <Button sx={{display: '', mt: 2}} onClick={() => handleAdcionarClick()} >
                            Adicionar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Card>
    )
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

let qualif = [
    {
        nome: 'Java',
        value: 'alta',
    },
    {
        nome: 'Python',
        value: 'baixa',
    },
    {
        nome: 'C',
        value: 'baixa',
    },
    {
        nome: 'C#',
        value: 'media',
    },
];