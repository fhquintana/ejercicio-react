import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const StyledButton = styled(Button) ({
  backgroundColor: '#0b548b',
  borderRadius: '0px',
  whiteSpace: 'pre-line',
  fontSize: '0.8rem',
})

function DetailButton() {
  return(
    <StyledButton variant="contained" size="large" disableElevation>{`VER DETALLE DE \nCUOTA`}</StyledButton>
  )
}

export default DetailButton;