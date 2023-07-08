import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  Grid,
  TextField,
  Stack,
  Button,
  Chip,
  Autocomplete,
} from "@mui/material";
import { React, useState } from "react";
import PropTypes from "prop-types";
import { SaveOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ExtractData = (props) => {

  const navigate = useNavigate();

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const extractDataHandler = () => {
   
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar
        position="static"
        style={{ background: "#fff", color: "rgba(0, 0, 0, 0.87)" }}
      >
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Extract Data" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <Box
        mb={1}
        style={{
          display: "flex",
          borderBottom: "1px solid #ccc",
        }}
      >
        <TabPanel value={0} index={0} style={{ width: "100%" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Autocomplete
                id="disable-close-on-select"
                autoHighlight
                options={["Value"]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="File Format"
                    variant="standard"
                    sx={{
                      "& .MuiFormLabel-root": {
                        fontSize: "1rem",
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                pt={2}
                pb={2}
              >
                <Button
                  variant="contained"
                  endIcon={<SaveOutlined />}
                  onClick={extractDataHandler}
                >
                  Extract Data
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default ExtractData;
