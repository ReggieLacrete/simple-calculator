// pages/result.js
import { useRouter } from 'next/router';
import { Typography, Button } from '@mui/material';

const Result = () => {
  const router = useRouter();
  const { selectedMonth } = router.query;

  const calculateStartDate = (selectedMonth) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const currentMonth = new Date().getMonth();
    const startMonth = currentMonth + parseInt(selectedMonth || 0, 10);
    const startYear = new Date().getFullYear();
    return `${months[startMonth % 12]} ${startYear + Math.floor(startMonth / 12)}`;
  };

  const startApplyingDate = calculateStartDate(selectedMonth);
  const preparationMonths = 4; // Average preparation time
  const startCJDate = calculateStartDate(selectedMonth - preparationMonths);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Start applying to jobs with a full portfolio by
      </Typography>
      <Typography variant="h4" gutterBottom>
        {startApplyingDate}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Meaning you should start CJ by:
      </Typography>
      <Typography variant="h4" gutterBottom>
        {startCJDate}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => router.push('/')}>
        Back to Calculator
      </Button>
    </div>
  );
};

export default Result;
