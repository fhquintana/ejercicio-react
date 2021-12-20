import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import AppContext from '../context/AppContext';

const amountMarks = [{ value: 5000, label: '$5.000' }, { value: 50000, label: '$50.000' }];

const StyledSlider = styled(Slider) ({
  color: 'white',
  height: 6,
  width: '90%',
  '& .MuiSlider-rail': {
    opacity: 0.9,
  },
  '& .MuiSlider-markLabel': {
    color: 'white',
  }
})

function AmountSlider() {

  const { amountValue, setAmountValue, termValue, setFeeValue } = useContext(AppContext); 

  const validateAmountValue = (amount) => {
    return Number(amount < 5000 ? 5000 : amount > 50000 ? 50000 : amount)
  }

  const amountSliderValueChange = (event, newValue) => { 
    setAmountValue(newValue)
    setFeeValue((validateAmountValue(newValue) / termValue).toFixed(2))
  }

  return(
    <StyledSlider value={validateAmountValue(amountValue)} onChange={amountSliderValueChange} step={1} marks={amountMarks} min={5000} max={50000} />
  )
}

export default AmountSlider;