import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Remaining = () => {


  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const remaining = budget - totalExpenses;

  if (remaining >= 0) {
    return (
      <div className="  flex  items-center w-96 h-16 bg-cyan-500 border rounded">
        <h2 className="font-bold ml-8">REMAINING: {remaining}€</h2>
      </div>
    );
  } else {
    return (
      <div  className=" flex  items-center w-104 h-16  bg-red-600 border rounded">
        <h2 className="font-bold ml-8">
       BUDGET IN RED - TIME FOR A FINANCIAL RETHINK! : {remaining}€
        </h2>
      </div>
    );
  }
};

export default Remaining;
