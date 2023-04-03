import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">Found no expenses</h2>
  );

  if (props.data.length > 0) {
    expenseContent = props.data.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
