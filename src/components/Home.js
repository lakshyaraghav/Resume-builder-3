import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements"
import PropTypes from "prop-types";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>

          <div className="col s12 m8 l9">
            <About state={state}/>
            {/* <Education /> */}
          </div>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Education" {...a11yProps(0)} />
              <Tab label="Work experience" {...a11yProps(1)} />
              <Tab label="Achievements" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Education state={state}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Experience state={state}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Achievements state={state}/>
          </TabPanel>
        </Box>
      </div>
      {/* <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>

      <div className="form-details">
        <div>
          <strong>Username:</strong> {state.username}
        </div>
        <div>
          <strong>Email:</strong> {state.email}
        </div>
        <div>
          <strong>City:</strong> {state.city}
        </div>
        <div>
          <strong>Phone:-</strong> {state.phone}
        </div>
      </div> */}
    </>
  );
};

export default Home;
