import React, { useState } from "react"; //Not needed but great to have
import Expenses from "./Components/Expenses/Expenses"; // import the main expenses components
import NewExpense from "./Components/NewExpense/NewExpense";

//This is where the components are brought together to form the website

const Inital_Expenses = [
  {
    id: "e1",
    title: "Washing Liquid",
    amount: 10.12,
    date: new Date(2020, 7, 24),
  },
  {
    id: "e2",
    title: "Playstation 4",
    amount: 249.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Bread",
    amount: 2.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Memory Foam Matress",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // alternative sytax is: const App = () => {}
  const [expenses, setExpenses] = useState(Inital_Expenses);

  function addExpenseHandler(expense) {
    console.log("In app.js");
    console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }




  // This is the past way of doing it
  /* return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Marcs Expenses"),
    React.createElement(Expenses, {items: expenses})
  ); */

  return (
    //This is what is displayed on the page.
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
