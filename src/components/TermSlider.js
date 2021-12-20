import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import AppContext from '../context/AppContext';

const termsMarks = [{ value: 3, label: '3' }, { value: 24, label: '24' }];

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

function TermSlider() {

  const { amountValue, termValue, setTermValue, setFeeValue } = useContext(AppContext); 

  const validateTermValue = (term) => {
    return Number(term < 3 ? 3 : term > 24 ? 24 : term)
  }

  const termSliderValueChange = (event, newValue) => { 
    setTermValue(newValue)
    setFeeValue((amountValue / validateTermValue(newValue)).toFixed(2)) 
  }

  return(
    <StyledSlider value={validateTermValue(termValue)} onChange={termSliderValueChange} step={1} marks={termsMarks} min={3} max={24} />
  )
}

export default TermSlider;