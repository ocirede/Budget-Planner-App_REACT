import { useContext, useEffect } from "react";
import ExpensesItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";

const ExpensesList = () => {
  const { expenses, filteredExpenses } = useContext(AppContext);
  console.log("filter", filteredExpenses);
  console.log("no-filter", expenses);

  if (filteredExpenses.length > 0) {
    return (
      <div>
        <ul>
          {filteredExpenses.map((expense) => (
            <ExpensesItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {expenses.map((expense) => (
            <ExpensesItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default ExpensesList;
