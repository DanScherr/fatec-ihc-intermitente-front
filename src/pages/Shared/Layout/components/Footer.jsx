//@ts-check
/** State */
import React, { useEffect, useState } from 'react';
/** MUI */
import { 
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Grid,
} from '@mui/material';
import './Footer.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { useNavigate } from 'react-router-dom';


export default function SharedLayoutFooter( ) {
    const [value, setValue] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        navigateTo(value, navigate);
    }, [value]);

    return(
        <>
            <Box sx={{
                color: 'primary.main', 
                bgcolor: 'background.footBox', 
                boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'}}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log('mudanca de valor:', value)
                        setValue(newValue);
                    }}
                    sx={{bgcolor: 'background.footBox', }}
                >
                    <BottomNavigationAction label="Calendário" icon={<CalendarMonthIcon />} />
                    <BottomNavigationAction label="Notificações" icon={<NotificationsActiveIcon />} />
                    <BottomNavigationAction label="Configurações" icon={<SettingsSuggestIcon />} />
                </BottomNavigation>
            </Box>
        </>
    )
};

const navigateTo = ((valor, func) => {
    switch (valor) {
        case 0:
            func('/');
            break;
        
        case 1:
            func('/notificacao');
            break;

        case 2:
            func('/configuracao');
            break;

    
        default:
            break;
    };
});