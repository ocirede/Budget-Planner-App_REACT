import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ExpensesItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "REMOVE_EXPENSE",
      payload: id,
    });

    dispatch({
      type: "REMOVE_FILTERED_EXPENSE",
      payload: id,
    });

    const existingExpenses =
      JSON.parse(localStorage.getItem("expensesList")) || [];
    const updatedExpenses = existingExpenses.filter(
      (expense) => expense.id !== id
    );
    localStorage.setItem("expensesList", JSON.stringify(updatedExpenses));
  };


  return (
    <div className="flex justify-between items-center w-full p-2 border rounded mt-6">
      <li key={id} className=" text-lg">
        {name}
      </li>
      <div className="flex justify-between items-center gap-2">
        <span className="text-lg bg-blue-500 border rounded text-white p-1 w-15 text-center">
          €{cost}
        </span>
        <TiDelete
          onClick={handleDelete}
          className="!w-7 !h-7 cursor-pointer"
        ></TiDelete>
      </div>
    </div>
  );
};

export default ExpensesItem;
