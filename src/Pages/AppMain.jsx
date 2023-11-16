import Budget from "../components/Budgetplanner/Budget";
import NavBar from "../components/Navbar/NavBar";
import Remaining from "../components/Budgetplanner/Remaining";
import Spent from "../components/Budgetplanner/Spent";
import SearchBar from "../components/Budgetplanner/SearchBar";
import ExpensesList from "../components/Budgetplanner/ExpensesList";
import AddExpense from "../components/Budgetplanner/AddExpense";
import { AppProvider } from "../context/AppContext";
import '../components/Toggle/toggle.css'

const AppMain = () => {
  

  return (
    <AppProvider>
    <section>
      <NavBar />
      <div className="!ml-8 mr-8">
        <h1 className="!mt-44 text-4xl font-bold">My Budget Tracker</h1>
        <div className="flex  justify-around mt-16 ">
          <Budget />
          <Remaining  />
          <Spent />
        </div>
        <div>
          <h2 className="mt-12 text-3xl font-bold">Expenses</h2>
          <SearchBar />
        </div>
        <ExpensesList/>
        <h2 className="mt-16
        
        text-3xl font-bold">Add Expense</h2>
        <AddExpense />
      </div>
    </section>
    </AppProvider>
  );
};

export default AppMain;
