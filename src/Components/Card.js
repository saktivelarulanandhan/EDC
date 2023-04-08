import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import Title from '../Title';

function EDCCard(props) {
  return (
    <Card xs={6} md={8} lg={12} sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    }}>
      <CardContent sx={{
        width: '100%',
        paddingBottom: '5px'
      }}>
        <Grid sx={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Grid sx={{
            display: 'flex',
            width: '100%'
          }}>
            <Title>{props.name}</Title>
          </Grid>
          <Grid>
           {/*  <Box sx={{border: '1px solid #ccc', borderRadius: '50%', height: '25px', width: '25px', textAlign: 'center', backgroundColor: '#0c3d67', color:'#f2f2f2'}} */}
              {props.icon}
            {/* </Box> */}
          </Grid>
        </Grid>
        <Grid>
          <Title>{props.count}</Title>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EDCCard;