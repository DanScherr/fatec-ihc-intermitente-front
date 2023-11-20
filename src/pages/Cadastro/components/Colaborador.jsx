import { FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputLabel, Radio, RadioGroup } from "@mui/material";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext, useEffect, useState } from "react";
import './Colaborador.css'
import AuthContext from "../../../context/AuthContext";

export default function Coloaborador( {
    tentouCadastrar=false
} ) {
    const [calendarValue, setCalendarValue] = useState(dayjs(dayjs()));
    const [ radioButton, setRadio ] = useState('Feminino'); // true = colaborador, false = empresa;
    const {
        formComponents,
        handleBlur,
        handleInputs
    } = useContext(AuthContext);

    useEffect(() => {
        console.log('Sexo:', radioButton)
    }, [ radioButton ])
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
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Feminino"
                            name="radio-buttons-group"
                            sx={{flexDirection: 'row'}}
                        >
                            <FormControlLabel onClick={() => setRadio('Feminino')} sx={{display: 'inline'}} value="Feminino" control={<Radio />} label="Feminino" />
                            <FormControlLabel onClick={() => setRadio('Masculino')} sx={{display: 'inline'}} value="Masculino" control={<Radio />} label="Masculino" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}