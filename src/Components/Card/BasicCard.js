import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ test }) {
  return (
    <Card sx={{ minWidth: 275 , maxWidth: 275}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {test.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {test.author}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {test.asks.length} asks
        </Typography>
        <Typography variant="body2">
          {test.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Start Test</Button>
      </CardActions>
    </Card>
  );
}