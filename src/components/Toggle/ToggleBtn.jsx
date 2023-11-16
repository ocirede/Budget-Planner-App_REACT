import { useContext } from "react";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/AppContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ToggleBtn = () => {
  const { toggle, dispatch } = useContext(AppContext);

  const handleToggle = () => {
    const updatedToggle = !toggle;
    dispatch({ type: "TOGGLE_TOGGLE", payload: updatedToggle });
  };

  return (
    <div className={toggle ? "dark" : "light"}>
      {!toggle ? (
        <Button onClick={handleToggle}>
          <LightModeIcon className=" text-white !w-9 !h-9 " />
        </Button>
      ) : (
        <Button onClick={handleToggle}>
          <DarkModeIcon className="    text-black !w-9 !h-9 " />
        </Button>
      )}
    </div>
  );
};

export default ToggleBtn;


