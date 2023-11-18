import { Card, CardContent, FormControl, FormControlLabel, List, ListItem, ListSubheader, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";

export default function Qualificacoes(params) {
    const [selection, setSelection] = useState(qualif);
    // const updateSelection = (value) => {
    //     setSelection(prev => ({...prev, value.index: }));
    // };

    useEffect(() => {
        console.log('Selection:', selection)
    }, [selection])

    return (
        <Card sx={{
            height: 200, display: 'block', 
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
                            qualif.map((item, index)=>{
                                return (
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Colaborador"
                                        name="radio-buttons-group"
                                        sx={{flexDirection: 'row', color: 'font.main'}}
                                        onChange={() => setSelection(prev => ({...prev, item}) )}
                                    >
                                        <FormControlLabel sx={{display: 'inline'}} value="Baixa" control={<Radio />} label="Baixa" />
                                        <FormControlLabel sx={{display: 'inline'}} value="Média" control={<Radio />} label="Média" />
                                        <FormControlLabel sx={{display: 'inline'}} value="Alta" control={<Radio />} label="Alta" />
                                    </RadioGroup>
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
        baixa: false,
        media: false,
        alta: true
    },
    {
        nome: 'Python',
        baixa: false,
        media: false,
        alta: true
    },
    {
        nome: 'C',
        baixa: true,
        media: false,
        alta: false
    },
    {
        nome: 'C#',
        baixa: false,
        media: true,
        alta: false
    },
]