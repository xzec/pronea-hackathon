import React from 'react';
import { Box, Grid } from '@mui/material';
import StudentCard from './StudentCard';

const Cards: React.FC = () => {
  return (
    <Box sx={{ padding: 2, height: "100%" }}>
      <Grid container spacing={4}>
        {[
          {
            name: 'Matej',
            questionsTouched: 2,
            connectionGood: true
          },
          {
            name: 'Simona',
            questionsTouched: 6,
            connectionGood: false,
          },{
            name: 'Lucia',
            questionsTouched: 4,
            connectionGood: true
          },{
            name: 'Andrej',
            questionsTouched: 100,
            connectionGood: true
          },{
            name: 'Vladimír',
            questionsTouched: 100,
            connectionGood: true
          }
        ].map(({ name, questionsTouched, connectionGood }, index) => (
          <Grid key={index} item xs={12} md={6}>
            <StudentCard
              key={index}
              name={name}
              questionsTouched={questionsTouched}
              connectionGood={connectionGood}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
