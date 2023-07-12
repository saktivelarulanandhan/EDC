import React from "react";
import { Grid, Paper } from "@mui/material";
import Chart from "../../organisms/Charts/Charts";
function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <p>Filters comes here</p>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 0,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart /> {/* <Deposits /> */}
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p>Quick actions comes here</p>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <p>Orders comes here</p>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
