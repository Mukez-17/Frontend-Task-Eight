import React from 'react';
import Navigation from '../Navigation/Navigation';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <>
      <Navigation />
      <Box sx={{backgroundColor:"black", color:"white"}}>
        <Typography sx={{ my:8, fontSize:"1.5rem", fontWeight:"700"}} align='center'>
          Contact My Showroom
        </Typography>
        <p style={{marginLeft:"640px", fontSize:"1.25rem"}}>G1-G2, Jio World Drive
        <br />
        Bandra Kurla Complex
        <br />
        Mumbai, Maharashtra, 400051
        </p>
      </Box>
      <Box sx={{m:3, width:"600px", ml:60}}>
        <TableContainer component={Paper}>
          <Table aria-label='content-table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:"black", color:"white"}} align='center'>Conatct Details</TableCell>
              </TableRow>
            </TableHead>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt:1}} /> 1800-10-1240 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{color:"red", pt:1}} /> help@mydesk.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:"red", pt:1}} /> 1234567890
                </TableCell>
              </TableRow>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default ContactUs