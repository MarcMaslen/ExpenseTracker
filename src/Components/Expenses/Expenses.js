import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpesesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");


  function filterChangeHandler(selectedYear) {
    console.log("Expense.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  //Sorts by year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  //Main
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*This Map uses an array and put it into another array full of JSX items*/}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
