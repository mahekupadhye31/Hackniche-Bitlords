import React from 'react'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/system';

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

function Benefits() {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='benefitsmain'>
        <Container>
        <Typography variant='h4' sx={{paddingY: '10px', textAlign: 'center'}}>Retirement Benefits</Typography>   
        <Accordion sx={{marginBottom:"10px"}}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography ><KeyboardArrowDownIcon />Retirement Pension</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It is calculated @50% of the emoluments last drawn or average of last 10 months emoluments drawn, whichever is more beneficial, where :
          </Typography>
          <Typography>
          Reckonable Emoluments = Basic Pay + Grade Pay + MSP + NPA or Classification Allowance
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography ><KeyboardArrowDownIcon />Death Gratuity</Typography>
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
          <TableRow >
            <TableCell sx={{backgroundColor:"#001833", color: "white", fontWeight: 'bold'}} >Qualifying Service</TableCell>
            <TableCell  sx={{backgroundColor:"#001833", color: "white", fontWeight: 'bold'}}  align="right">Amount Alloted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.qualifyingService}>
              <TableCell component="th" scope="row">
                {row.qualifyingService}
              </TableCell>
              <TableCell align="right">{row.rate}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Typography paddingY={'1rem'} sx={{color: 'red'}}>
    * Maximum amount of Death Gratuity admissible is Rs. 20 lakhs w.e.f. 1.1.2016
    </Typography>
    <br />
    <Accordion>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography ><KeyboardArrowDownIcon />Service Gratuity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A retiring Government servant will be entitled to receive service gratuity (and not pension) if total qualifying service is less than 10 years. Admissible amount is half month’s basic pay last drawn plus DA for each completed 6 monthly period of qualifying service. This one time lump sum payment is distinct from retirement gratuity and is paid over and above the retirement gratuity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  )
}

export default Benefits
