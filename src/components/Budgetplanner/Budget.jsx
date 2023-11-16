import { Button } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEdit, setisEdit] = useState(false);



  const handleEdit = () => {
    console.log("===========>",budget)
    localStorage.setItem("budget", JSON.stringify(budget));

    setisEdit(true);
  };

  const handleSave = (e) => {
    e.preventDefault()
    const textContent = e.target.budget.value
    dispatch({ type: "UPDATE_BUDGET", payload: textContent });
    localStorage.setItem("budget", JSON.stringify(textContent));

    setisEdit(false);
  };

  return isEdit ? (
    <form onSubmit={handleSave} className=" flex  justify-center items-center  w-96 h-16 bg-emerald-400 border rounded gap-40">
      <textarea
       defaultValue={budget}
        name="budget"
        className="p-1 border rounded text-black"
        cols={8}
        rows={1}
      />
      <Button type="submit" className=" !bg-blue-500 !text-white !mr-3" >
        Save
      </Button>
    </form>
  ) : (
    <div className=" flex items-center w-100 h-16 bg-emerald-400 border rounded gap-40">
      <h2 className=" ml-4  font-bold">MY BUDGET: {budget}€</h2>

      <Button onClick={handleEdit} className=" !bg-blue-500 !text-white !mr-4">
        Edit
      </Button>
    </div>
  );
};

export default Budget;
