import React from "react"; // React Hook used. They start with 'use'

import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-date">
          <div className="expense-date__year">{props.date.toISOString()}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
