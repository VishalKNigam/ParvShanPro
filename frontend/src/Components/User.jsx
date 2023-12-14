import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {  useSelector } from 'react-redux';
import Logout from "./Logout"
import {BiUserCircle} from "react-icons/bi"


export default function User() {
  const [state, setState] = React.useState({
    right: false, // Only 'right' is needed
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open }); // Only 'right' anchor is updated
  };

  //   const data = JSON.parse(localStorage.getItem("user"));
  //   console.log(data)

  const data = useSelector(state=>state.AuthReducer.loginUser);
  console.log(data)

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }} // Drawer width is set to a fixed value
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <h5 className="m-0">
            Name:  {data?.name}
          </h5>,
          <h5>Email: {data?.email} </h5>
        
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Logout/>
    </Box>
  );
  // let booking = localStorage.getItem("booking");

  return (
    <div>
      <Button
        className="btn btn-2 fw-bold  mx-lg-0"
        onClick={toggleDrawer("right", true)}
      >
        <BiUserCircle className="fs-2" style={{color:"rgb(62,101,83)"}}/>
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
