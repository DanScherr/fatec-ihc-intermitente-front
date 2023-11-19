import { Card, CardContent, Grid, Typography, Accordion, AccordionSummary, List, AccordionDetails, Avatar, Box, Button, Tooltip } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccDetails from "./Colaborador/AccDetails";
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';


export default function NotificacaoEmpresa( ) {

    let loading = false;

    return (
        <Card sx={{
            position: 'absolute',
                top: '49%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                height: 700,
                bgcolor: 'background.navBar',
                border: '2px solid #000',
                boxShadow: 24,
                p: 7,
                borderRadius: 40,
                '&:hover': {
                    color: 'font.main',
                },
            // mt: 1
        }}>
            <CardContent>
                {/** PAGOS */}
                <Typography variant="span" sx={{
                    textAlign: 'center', fontSize: '25px',
                    color: 'primary.lightMain', fontWeight: '700'
                }}>
                    Notificações empresa
                </Typography>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 530,
                        padding: 0,
                        '& ul': { padding: 0 },
                        mt: 0
                    }}
                >
                    { !loading ?
                        notificacoes.map((item, i) => {
                            return (
                                <Accordion 
                                    key={`MonetizacaoArrayAccordionHeader-${i}`}
                                    className="MonetizacaoArrayAccordion"
                                    sx={{backgroundColor: 'background.accordionHeader'}}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id={item.nome}
                                        sx={{
                                            mt: 2,
                                            border:`1px solid`,
                                            borderColor: handleNotificacaoStatus(item.status),
                                            opacity: '80%'
                                        }}
                                    >
                                        {/* TITULO DO ACCORDION */}
                                        <Grid container sx={{m: 0, p: 0}}>
                                            <Grid item xs={9}>
                                                <Tooltip title={`Estado: ${item.status}`} placement="top-start" arrow>
                                                    <CircleIcon sx={{color: handleNotificacaoStatus(item.status), mr: 1}} />
                                                </Tooltip>
                                                
                                                <Typography variant="span" sx={{mr: 3,fontSize: 14, color: '#000000e4', fontWeight: '700'}}>
                                                    {item.nome}
                                                </Typography>

                                                {/* Qtd aceite */}
                                                <Tooltip title={`Aceites...`} placement="top-start" arrow>
                                                    <Button sx={{display: item.qtAceite==='aceito'&&'none', m: 0, p:0, width: '24px', color: 'font.main'}}>
                                                        {item.qtAceite}
                                                        <CheckIcon sx={{color: '#00bfa5'}} />
                                                    </Button>
                                                </Tooltip>

                                                {/* Qtd recusa */}
                                                <Tooltip title={`Recusas...`} placement="top-start" arrow>
                                                    <Button sx={{display: item.qtdRecusa==='cancelado'&&'none', m: 0, p:0, width: '24px', color: 'font.main'}}>
                                                        {item.qtdRecusa}
                                                        <ClearIcon sx={{color: '#dd2c00'}} />
                                                    </Button>
                                                </Tooltip>


                                            </Grid>
                                            <Grid item xs={3}>
                                                {/* Confirm Button */}
                                                <Tooltip title={`Editar!`} placement="top-start" arrow>
                                                    <Button sx={{display: item.status==='aceito'&&'none', m: 0, p:0, width: '24px'}}>
                                                        <EditIcon sx={{color: 'font.main'}} />
                                                    </Button>
                                                </Tooltip>
                                                {/* Cancel Button */}
                                                <Tooltip title={`Cancelar!`} placement="top-start" arrow>
                                                    <Button sx={{display: item.status==='cancelado'&&'none', m: 0, p:0, width: '24px'}}>
                                                        <CancelIcon sx={{color: 'font.main'}} />
                                                    </Button>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        
                                    {/* PARTE INTERNA DO ACCORDION */}
                                    </AccordionSummary>
                                    <AccordionDetails sx={{paddingTop: 0}}>
                                        <Typography variant="span">
                                            <Grid container spacing={2} sx={{pl: 2}}>
                                                <AccDetails item={item} />
                                            </Grid>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    :
                    'Carregando...'
                    }
                    
                    <div style={{height: '100px', display: 'block'}}>
                        {''}
                    </div>
                    
                </List>
            </CardContent>          
        </Card>
    )
}

const handleNotificacaoStatus = (status) => {
    switch (status) {
        case 'aberto':
            return '#fdd835'
        case 'cancelado':
            return '#ff5252'
        case 'aceito':
            return '#00bfa5'
        
        default:
            break;
    }
}

const notificacoes = [
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:0, nome: 'projeto 0', empresa: 'empresa 0', status: 'aberto', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:1, nome: 'projeto 1', empresa: 'empresa 1', status: 'cancelado', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
    {id:2, nome: 'projeto 2', empresa: 'empresa 2', status: 'aceito', valorHora: '1000', dtInicio: '12/12/2023', dtFim: '15/12/2023', qtAceite: 2, qtdRecusa: 1, qualificacoes: [
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
        }
    ],
    descricao: 'Lorem Ipsum'
    },
]