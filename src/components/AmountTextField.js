import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';
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

function AmountTextField() {

  const { amountValue, setAmountValue, termValue, setFeeValue } = useContext(AppContext)

  const validateAmountValue = (amount) => {
    return Number(amount < 5000 ? 5000 : amount > 50000 ? 50000 : amount)
  }

  const amountTextfieldValueChange = (event) => { 
    const number = event.target.value
    if(numRegex.test(number) && number <= 50000) {
      setAmountValue(number)
      setFeeValue((validateAmountValue(number) / termValue).toFixed(2))
    }  
  }

  return(
    <StyledTextField value={amountValue} onChange={amountTextfieldValueChange} size="small" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} />
  )
}

export default AmountTextField;