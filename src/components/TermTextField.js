import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import AppContext from '../context/AppContext';

const numRegex = /^[0-9]*$/;

const StyledTextField = styled(TextField) ({
  width: '40%',
  '& .MuiOutlinedInput-root': {
    color: 'white',
    borderRadius: '0px',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'lightgrey',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'lightgrey',
    }
  },
  '& .MuiTypography-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input': {
    textAlign: 'center',
    paddingTop: '2px',
    paddingBottom: '2px',
    fontSize: '1.5rem'
  }
})

function TermTextField() {

  const { amountValue, termValue, setTermValue, setFeeValue } = useContext(AppContext)

  const validateTermValue = (term) => {
    return Number(term < 3 ? 3 : term > 24 ? 24 : term)
  }

  const termTextfieldValueChange = (event) => { 
    const number = event.target.value
    if(numRegex.test(number) && number <= 24) {
      setTermValue(number)
      setFeeValue((amountValue / validateTermValue(number)).toFixed(2))
    }  
  }

  return(
    <StyledTextField value={termValue} onChange={termTextfieldValueChange} size="small" />
  )
}

export default TermTextField;