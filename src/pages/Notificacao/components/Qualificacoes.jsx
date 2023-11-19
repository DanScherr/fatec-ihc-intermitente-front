import { Box, Card, CardContent, FormControl, FormControlLabel, List, ListItem, ListSubheader, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Qualificacoes(params) {
    const [selection, setSelection] = useState(qualif);
    // const updateSelection = (value) => {
    //     setSelection(prev => ({...prev, value.index: }));
    // };

    const handleRadioChange = (event, item) => {
        console.log('item:', event.target.value)
        console.log('item:', item)
        let novoArray = selection.map((i) => {
            // console.log('item.nome', item.nome, 'i.nome', i.nome)
            if (item.nome === i.nome)
                return {nome: i.nome, value: event.target.value};
            else
                return {nome: i.nome, value: i.value};
        })
        // console.log('novo array:', novoArray);

        setSelection(novoArray);
    };

    useEffect(() => {
        console.log('Selection:', selection)
    }, [selection])

    return (
        <Card sx={{
            height: 230, display: 'block', 
            borderRadius: 5, backgroundColor: 'primary.lightestMain',
        }}>
            <CardContent>
            <List
                sx={{
                    width: '100%',
                    // maxWidth: 360,
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 200,
                    '& ul': { padding: 0 },
                    my: 'auto',
                }}
                subheader={<li />}
            >
                 <ListSubheader sx={{backgroundColor: 'white', color: 'font.main'}}>{`Qualificações:`}</ListSubheader>
                <ListItem>
                    {/* RADIO BUTTON */}
                    <FormControl required={false}> 
                        {
                            selection.map((item)=>{
                                return (
                                    <Box>
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
                    </FormControl>
                </ListItem>
                        
            </List>
            </CardContent>
        </Card>
    )
}

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
]