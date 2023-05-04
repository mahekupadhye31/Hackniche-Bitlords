import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from 'react-bootstrap';

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

function Accordian() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        <Container>
        <Typography variant='h4' sx={{paddingTop: '10px'}}>About Us</Typography>        
        <hr />

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Get To Know Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Here at ValorLink we aim to assist our fellow Veterans in navigating through the complex task of navigating through life once they have return safely back home.
            <hr />
            Away from home and close to the enemy lines is a very daunting place and we at ValorLink attempts to make it easier to connect and colaborate by coming up with inovative solutions to the problems that our heroes end up facing on a day-to-day basis by giving them resources at their disposal which would otherwise be difficult to find. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography variant='h4' sx={{paddingTop: '10px'}}>Resources that we Provide</Typography>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Connecting with others</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h5>Veteran Chat</h5>
            We have a dedicated chat feature wherein, fellow veterans can get in touch with others get their issues cleared and can connect with others having a similar experience.
            <br />
            <Link href="#" underline="hover">
        {'Click here'}
      </Link>
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
          <h5>Posts Page</h5>
            We attempt to keep you up-to-date with all the various updates and schemes the the government offers. 
            <br />
            <Link href="#" underline="hover">
        {'Click here'}
      </Link> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Pension Plans</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h5>Pension Information Page</h5>
            Our Pension Information Page will allow you to refer your pension information easily along with the general information about various plans.
            <br />
            <Link href="#" underline="hover">
        {'Click here'}
      </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Army Relief Fund</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h5>Donations page</h5>
            We ensure that you face no monetary issues and so everyone who can support our military men will now have a way to do so...
            <br />
            <Link href="#" underline="hover">
        {'Click here'}
      </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  );
}

export default Accordian;