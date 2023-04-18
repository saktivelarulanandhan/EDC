import { Grid, Paper } from "@mui/material";
import React from "react"
import QuickActions from "./QuickActions/QuickActions";
import QuickFilter from "./Filters/QuickFilter";
import Chart from "./Charts/Chart";
import Orders from "./Grid/Orders";

function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <QuickFilter />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart /> {/* <Deposits /> */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12} md={12} lg={12} sx={{
        display: 'flex',
        flexDirection: 'row',
      }} >
        <QuickActions />
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard;