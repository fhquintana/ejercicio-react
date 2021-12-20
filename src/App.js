import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography, Slider, TextField, InputAdornment, Button } from '@mui/material';

const numRegex = /^[0-9]*$/;
const amountMarks = [{ value: 5000, label: '$5.000' }, { value: 50000, label: '$50.000' }];
const termsMarks = [{ value: 3, label: '3' }, { value: 24, label: '24' }];

const AmountTextField = styled(TextField) ({
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

const TermTextField = styled(TextField) ({
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

const AmountSlider = styled(Slider) ({
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

const TermSlider = styled(Slider) ({
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

const GetButton = styled(Button) ({
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

const DetailButton = styled(Button) ({
  backgroundColor: '#0b548b',
  borderRadius: '0px',
  whiteSpace: 'pre-line',
  fontSize: '0.8rem',
})

function App() {

  const [amountValue, setAmountValue] = useState(5000)
  const [termValue, setTermValue] = useState(3)
  const [feeValue, setFeeValue] = useState((5000 / 3).toFixed(2))

  const validateAmountValue = (amount) => {
    return Number(amount < 5000 ? 5000 : amount > 50000 ? 50000 : amount)
  }

  const validateTermValue = (term) => {
    return Number(term < 3 ? 3 : term > 24 ? 24 : term)
  }

  const amountSliderValueChange = (event, newValue) => { 
    setAmountValue(newValue)
    setFeeValue((validateAmountValue(newValue) / termValue).toFixed(2))
  }

  const amountTextfieldValueChange = (event) => { 
    const number = event.target.value
    if(numRegex.test(number) && number <= 50000) {
      setAmountValue(number)
      setFeeValue((validateAmountValue(number) / termValue).toFixed(2))
    }  
  }

  const termSliderValueChange = (event, newValue) => { 
    setTermValue(newValue)
    setFeeValue((amountValue / validateTermValue(newValue)).toFixed(2)) 
  }

  const termTextfieldValueChange = (event) => { 
    const number = event.target.value
    if(numRegex.test(number) && number <= 24) {
      setTermValue(number)
      setFeeValue((amountValue / validateTermValue(number)).toFixed(2))
    }  
  }

  return (
    <Container maxWidth="lg" sx={{ padding: '10px 120px !important' }}>
      <Container sx={{ backgroundColor: '#085083', width: '560px', padding: '30px' }}>
        <Container sx={{ backgroundColor: '#003b67', padding: '30px' }}>
          <Grid direction="column" justifyContent="center" rowSpacing={2} container>
            <Grid align="center" item>
              <Typography variant="h4" color="white" sx={{ mb: 3 }}>Simulá tu crédito</Typography>
            </Grid>
            <Grid direction="row" justifyContent="space-between" container item>
              <Typography variant="body1" color="white" sx={{ pt: 1 }}>MONTO TOTAL</Typography>
              <AmountTextField value={amountValue} onChange={amountTextfieldValueChange} size="small" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} />
            </Grid>
            <Grid xs={12} align="center" item>
              <AmountSlider value={validateAmountValue(amountValue)} onChange={amountSliderValueChange} step={1} marks={amountMarks} min={5000} max={50000} />
            </Grid>
            <Grid direction="row" justifyContent="space-between" container item>
              <Typography variant="body1" color="white" sx={{ pt: 1 }}>PLAZO</Typography>
              <TermTextField value={termValue} onChange={termTextfieldValueChange} size="small" />
            </Grid>
            <Grid xs={12} align="center" item>
              <TermSlider value={validateTermValue(termValue)} onChange={termSliderValueChange} step={1} marks={termsMarks} min={3} max={24} />
            </Grid>
            <Grid direction="row" justifyContent="space-around" sx={{ pb: 1, backgroundColor: '#00355d' }} container item>
              <Typography variant="h6" color="white" sx={{ pt: 1 }}>CUOTA FIJA POR MES</Typography>
              <Typography variant="h4" color="white">$ {feeValue}</Typography>
            </Grid>
            <Grid direction="row" justifyContent="space-between" sx={{ pt: '0 !important' }} container item>
              <GetButton variant="contained" size="large" disableElevation>OBTENÉ CRÉDITO</GetButton>
              <DetailButton variant="contained" size="large" disableElevation>{`VER DETALLE DE \nCUOTA`}</DetailButton>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
