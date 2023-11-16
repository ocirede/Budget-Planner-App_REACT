import { createContext, useEffect, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TOGGLE":
      const updatedState = { ...state, toggle: action.payload };

      if (action.payload) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
      return updatedState;

    case "UPDATE_BUDGET":
      return { ...state, budget: action.payload };

    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "FILTER_SEARCH":
      const filteredExpenses = state.expenses.filter((expense) =>
        expense.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, filteredExpenses };

    case "REMOVE_FILTERED_EXPENSE":
      return {
        ...state,
        filteredExpenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case "RESET_FILTER":
      return {
        ...state,
        filteredExpenses: [],
      };

    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: action.payload,
      };

    case "UPDATE_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [],
  filteredExpenses: [],
  toggle: false,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (window !== undefined) {
      const locaBudget = JSON.parse(localStorage.getItem("budget"));
      const localExpenseList = JSON.parse(localStorage.getItem("expensesList"));

      dispatch({
        type: "UPDATE_EXPENSE",
        payload: localExpenseList,
      });

      dispatch({
        type: "UPDATE_BUDGET",
        payload: locaBudget,
      });
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        toggle: state.toggle,
        filteredExpenses: state.filteredExpenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
