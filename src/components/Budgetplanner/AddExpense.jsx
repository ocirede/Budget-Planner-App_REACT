import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../context/AppContext";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { expenses, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    localStorage.setItem("expensesList", JSON.stringify([...expenses, expense]))

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-5 gap-36 ">
        <div className="flex flex-col">
          <label className="text-xl ">Name</label>
          <input
            className="w-full p-1 border rounded mt-2 text-black"
            type="text"
            placeholder="Expense"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl">Cost</label>
          <input
            className="w-full p-1 border rounded mt-2 text-black"
            type="text"
            placeholder="Cost"
            required
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button type="submit" className="!bg-blue-500 !text-white  !mt-7">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddExpense;
