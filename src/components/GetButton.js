import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button) ({
  backgroundColor: '#17aa8d',
  borderRadius: '0px',
  fontSize: '1.2rem',
  padding: '8px 54px',
  '&:hover': {
    backgroundColor: '#3FCA68',
  },
  '&:active': {
    backgroundColor: '#87F0A6',
  },
})

function GetButton() {
  return(
    <StyledButton variant="contained" size="large" disableElevation>OBTENÉ CRÉDITO</StyledButton>
  )
}

export default GetButton;