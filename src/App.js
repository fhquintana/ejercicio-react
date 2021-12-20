import React, { useContext } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import AmountTextField from './components/AmountTextField';
import AmountSlider from './components/AmountSlider';
import TermTextField from './components/TermTextField';
import TermSlider from './components/TermSlider';
import GetButton from './components/GetButton';
import DetailButton from './components/DetailButton';
import AppContext from './context/AppContext';

function App() {

  const { feeValue } = useContext(AppContext)

  return (
    <Container maxWidth="lg" sx={{ padding: '0px 120px !important' }}>
      <Container sx={{ backgroundColor: '#085083', width: '560px', padding: '30px' }}>
        <Container sx={{ backgroundColor: '#003b67', padding: '30px' }}>
          <Grid direction="column" justifyContent="center" rowSpacing={2} container>
            <Grid align="center" item>
              <Typography variant="h4" color="white" sx={{ mb: 3 }}>Simulá tu crédito</Typography>
            </Grid>
            <Grid direction="row" justifyContent="space-between" container item>
              <Typography variant="body1" color="white" sx={{ pt: 1 }}>MONTO TOTAL</Typography>
              <AmountTextField />
            </Grid>
            <Grid xs={12} align="center" item>
              <AmountSlider />
            </Grid>
            <Grid direction="row" justifyContent="space-between" container item>
              <Typography variant="body1" color="white" sx={{ pt: 1 }}>PLAZO</Typography>
              <TermTextField />
            </Grid>
            <Grid xs={12} align="center" item>
              <TermSlider />
            </Grid>
            <Grid direction="row" justifyContent="space-around" sx={{ pb: 1, backgroundColor: '#00355d' }} container item>
              <Typography variant="h6" color="white" sx={{ pt: 1 }}>CUOTA FIJA POR MES</Typography>
              <Typography variant="h4" color="white">$ {feeValue}</Typography>
            </Grid>
            <Grid direction="row" justifyContent="space-between" sx={{ pt: '0 !important' }} container item>
              <GetButton />
              <DetailButton />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
