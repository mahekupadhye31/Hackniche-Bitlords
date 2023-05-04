import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(qualifyingService, rate) {
  return { qualifyingService, rate };
}

const rows = [
  createData('Less than one year', '2 times the basic pay'),
  createData('One or more year but less than five years', '6 times the basic pay'),
  createData('5 or more years but less than 11 years ', '12 times the basic pay'),
  createData('11 or more year but less than 20 years', '20 times the basic pay'),
  createData('20 years or more', 'Half of emoluments for every completed 6 monthly period of qualifying service subject to a maximum of 33 times of emoluments.'),
];

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


    
  
    

export default function BenefitsPage() {
    
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    
  return (
    <div>
        <Container>
        <Typography variant='h4' sx={{paddingTop: '10px'}}>Retirement Benefits</Typography>   
        <Accordion>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography >Retirement Pension</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6'>
          It is calculated @50% of the emoluments last drawn or average of last 10 months emoluments drawn, whichever is more beneficial, where :
          </Typography>
          <Typography variant='h6'>
          Reckonable Emoluments = Basic Pay + Grade Pay + MSP + NPA or Classification Allowance
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography >Death Gratuity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is a one-time lump sum benefit payable to the nominee or family member of a Government servant dying in harness. There is no stipulation in regard to any minimum length of service rendered by the deceased employee. Entitlement of death gratuity is regulated as under:
             
          </Typography>
        </AccordionDetails>
      </Accordion>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{color: "#73b504"}}>
          <TableRow>
            <StyledTableCell>Qualifying Service</StyledTableCell>
            <StyledTableCell align="right">Amount Alloted</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.qualifyingService}>
              <StyledTableCell component="th" scope="row">
                {row.qualifyingService}
              </StyledTableCell>
              <StyledTableCell align="right">{row.rate}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography variant='h6' paddingY={'1rem'}>
    * Maximum amount of Death Gratuity admissible is Rs. 20 lakhs w.e.f. 1.1.2016
    </Typography>
    <br />
    <Accordion>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography >Service Gratuity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A retiring Government servant will be entitled to receive service gratuity (and not pension) if total qualifying service is less than 10 years. Admissible amount is half month’s basic pay last drawn plus DA for each completed 6 monthly period of qualifying service. This one time lump sum payment is distinct from retirement gratuity and is paid over and above the retirement gratuity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  );
}
