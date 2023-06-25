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

const FormOverAllComments = (props) => {
  const [overallComments, setOverAllComments] = useState([]);
  
  const navigate = useNavigate();

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const addOverallComment = () => {
    setOverAllComments([...overallComments, {comment: 'This is a test comment', date: '10/02/2023'}]);
    //props.addPopupcloseHandler();
    setTimeout(() => {
        navigate("/clinicalApp/reviewGrid?reject=3");
    }, 10000)
  }

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
          <Tab label="Overall Comments" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <Box minHeight={"350px"}>
        <Box
          mb={1}
          style={{
            display: "flex",
            borderBottom: "1px solid #ccc",
          }}
        >
          <TabPanel value={0} index={0} style={{ width: "100%" }}>
            <Box minHeight={"300px"}>
              {overallComments.length !== 0 &&
                overallComments.map((userComment) => {
                  return (
                    <Box
                      mb={1}
                      style={{
                        display: "flex",
                        borderBottom: "1px solid #e3e0e0",
                      }}
                    >
                      <Chip
                        label="S"
                        variant="outlined"
                        style={{ color: "#000", background: "#EADDFF" }}
                      />
                      <Box mb={1} mt={1}>
                        <Typography
                          variant="body2"
                          ml={2}
                          gutterBottom
                          style={{ lineHeight: "1" }}
                        >
                          {userComment.comment}
                        </Typography>
                        <Typography variant="caption" ml={2} gutterBottom>
                          {userComment.date}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Comments"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  sx={{
                    "& .MuiFormLabel-root": {
                      fontSize: "1rem",
                    },
                  }}
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
                  <Button variant="contained" endIcon={<SaveOutlined />} onClick={addOverallComment}>
                    Add Comments
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default FormOverAllComments;
