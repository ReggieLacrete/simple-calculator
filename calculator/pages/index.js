// pages/index.js
import React, { useState } from 'react';
import { Typography, Slider, Button } from '@mui/material';
import { useRouter } from 'next/router';

const Calculator = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const router = useRouter();

  const handleSliderChange = (event, newValue) => {
    setSelectedMonth(newValue);
  };

  const handleCalculateClick = () => {
    const preparationMonths = 4; // Average preparation time
    const startMonth = selectedMonth - preparationMonths;

    router.push(`/result?selectedMonth=${startMonth}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Start applying to jobs with a full portfolio by
      </Typography>
      <Typography variant="h4" gutterBottom>
        {calculateStartDate(selectedMonth)}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select when you would like to start your new UX/UI Design job
      </Typography>
      <Slider
        color={'success'}
        value={selectedMonth}
        min={0}
        max={12}
        step={1}
        marks={[
          { value: 0, label: 'Now'},
          { value: 3, label: '3 months' },
          { value: 6, label: '6 months' },
          { value: 9, label: '9 months' },
          { value: 12, label: '12 months' },          
        ]}
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
        style={{ width: '80%', margin: 'auto', color: 'palegreen'}}
      />
      <Button variant="contained" color="primary" onClick={handleCalculateClick} style={{ marginTop: '20px' }}>
        Calculate
      </Button>
    </div>
  );
};

const calculateStartDate = (selectedMonth) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const currentMonth = new Date().getMonth();
  const startMonth = currentMonth + selectedMonth;
  const startYear = new Date().getFullYear();

  return `${months[startMonth % 12]} ${startYear + Math.floor(startMonth / 12)}`;
};

export default Calculator;
