import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputLabel, Radio, RadioGroup } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext, useEffect } from "react";
import './Colaborador.css'
import AuthContext from "../../../context/AuthContext";

export default function Coloaborador( {
    tentouCadastrar=false
} ) {
    const {
        handleInputs,
        calendarValue, setCalendarValue,
        radioButtonSexo, setRadioSexo
    } = useContext(AuthContext);

    useEffect(() => {
        console.log('Sexo:', radioButtonSexo)
    }, [ radioButtonSexo ])

    useEffect(() => {
        console.log('Calendário:', calendarValue.$d)
    }, [ calendarValue ])


    return (
        <div id="CadastroColaborador">
            <Grid container>
                {/* DATA NASCIMENTO INPUT */}
                <Grid item xs={6} id={'CadastroColaboradorDataNascimento'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{color: 'font.main'}} components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                format='DD/MM/YYYY'
                                openTo={"year"}
                                label="Data de nascimento"
                                value={calendarValue}
                                onChange={(newValue) => setCalendarValue(newValue)}
                                sx={{color: 'font.main'}}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                {/* SEXO INPUT */}
                <Grid item xs={6}>
                    <FormControl fullWidth required={true} sx={{mb: 3}}>
                        <FormLabel htmlFor='input-nome' sx={{color: 'font.main'}}>Sexo:</FormLabel>
                        <RadioGroup
                            onChange={handleInputs}
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Feminino"
                            name="radio-buttons-group"
                            sx={{flexDirection: 'row'}}
                            id="input-sexo"
                        >
                            <FormControlLabel id="input-sexo" onChange={handleInputs} onClick={() => setRadioSexo(2)} sx={{display: 'inline'}} value={2} control={<Radio />} label="Feminino" />
                            <FormControlLabel onClick={() => setRadioSexo(1)} sx={{display: 'inline'}} value={1} control={<Radio />} label="Masculino" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}