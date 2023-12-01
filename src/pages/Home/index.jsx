import React from "react";
import { Badge, Box, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import './index.css'
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import dayjs from 'dayjs';
import Modal from '@mui/material/Modal';


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

export default function Home(  ) {
    const requestAbortController = React.useRef(null);
    const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
    const [selectedDay, setSelectedDay] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const initialValue = dayjs();

    const fetchHighlightedDays = (date) => {
        const controller = new AbortController();
        fakeFetch(date, {
          signal: controller.signal,
        })
          .then(({ daysToHighlight }) => {
            setHighlightedDays(daysToHighlight);
            setIsLoading(false);
          })
          .catch((error) => {
            // ignore the error if it's caused by `controller.abort`
            if (error.name !== 'AbortError') {
              throw error;
            }
          });
    
        requestAbortController.current = controller;
      };
    
      React.useEffect(() => {
        fetchHighlightedDays(initialValue);
        // abort request on unmount
        return () => requestAbortController.current?.abort();
      }, []);

      const handleMonthChange = (date) => {
        if (requestAbortController.current) {
          // make sure that you are aborting useless requests
          // because it is possible to switch between months pretty quickly
          requestAbortController.current.abort();
        }
    
        setIsLoading(true);
        setHighlightedDays([]);
        fetchHighlightedDays(date);
      };

      const handleYearChange = () => {
        setOpen(false);
      };

      const handleDaySelection = (value) => {
        console.log(value.$d);
        if (!isLoading)
          setSelectedDay(value.$d)
        setOpen(true)
      }

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

    return (
        <Box
            id="CalendarMain"
            component='form'
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 900,
                height: 600,
                bgcolor: 'background.navBar',
                border: '0.5px solid #000',
                boxShadow: 15,
                // p: 4,
                borderRadius: 20,
                '&:hover': {
                    color: 'font.main',
                }
            }}
            autoComplete="off"
            noValidate
            justifyContent={'center'}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    id={'Calendario'} 
                    sx={{mx: 'auto'}} 
                    showDaysOutsideCurrentMonth
                    loading={isLoading}
                    onYearChange={handleYearChange}
                    onMonthChange={handleMonthChange}
                    onChange={(value) => handleDaySelection(value)}
                    renderLoading={() => <DayCalendarSkeleton />}
                    slots={{
                        day: ServerDay,
                    }}
                    slotProps={{
                        day: {
                            highlightedDays,
                          },
                        // 2. Change the arrow icons styles.
                        leftArrowIcon: {
                           sx: { color: "#000", fontSize: "2rem" }
                        },
                        rightArrowIcon: {
                           sx: { color: "#000", fontSize: "2rem" }
                        },
                    }}/>
            </LocalizationProvider>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={'white'} variant="h6" component="h2">
                        Projeto: Estágio Backend
                    </Typography>
                    <Typography id="modal-modal-title" color={'white'} variant="h6" component="h2">
                        Empresa: Microsoft
                    </Typography>
                    <Typography id="modal-modal-description" color={'white'} sx={{ mt: 2 }}>
                        {selectedDay.toString()}
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
};

function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  
    const isSelected =
      !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;
  
    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? '🟢' : undefined}
      >
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    );
  }

