import { useNavigate } from "react-router-dom";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import InputAdornment from "@mui/material/InputAdornment";

const Logout = () => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("userData"));
  const userName = storedUser ? storedUser.userfirstname : "Guest";

  const handleChange = (e) => {
    if (e.target.value === "logout") {
    
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <>
      <FormControl className="" fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <Avatar className="!bg-white ">
                <PersonIcon className="text-black !w-7 !h-7  " />
              </Avatar>
            </InputAdornment>
          }
        >
          <MenuItem>{userName}</MenuItem>
          <MenuItem value={"logout"}>Logout</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Logout;
