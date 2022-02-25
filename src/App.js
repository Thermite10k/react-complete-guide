import logo from "./logo.svg";
import ExpenseItems from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        amount={expenses[0].amount}
        id={expenses[0].id}
        date={expenses[0].date}
      />
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        amount={expenses[1].amount}
        id={expenses[1].id}
        date={expenses[1].date}
      />
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        amount={expenses[2].amount}
        id={expenses[2].id}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
