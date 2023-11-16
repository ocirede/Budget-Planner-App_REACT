import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Spent = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)

  return (
    <div className=" flex  items-center w-96 h-16  bg-yellow-300 border rounded">
      <h2 className="font-bold ml-8">SPENT: {totalExpenses}€</h2>
    </div>
  );
};

export default Spent;
