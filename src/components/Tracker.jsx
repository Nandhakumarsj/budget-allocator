import { useState } from "react";
// import ChangeAllocation from "./ChangeAllocation";
import TableBudget from "./TableBudget";

const Tracker = ({ currency, userInput, spent, setSpent, remain }) => {
  const [totalBudget, setTotalBudget] = useState(remain);
  let datas = [
    {
      id: 1,
      title: "Marketing",
      budget: 0,
    },
    {
      id: 2,
      title: "Finance",
      budget: 0,
    },
    {
      id: 3,
      title: "Sales",
      budget: 0,
    },
    {
      id: 4,
      title: "Human Resource",
      budget: 0,
    },
    {
      id: 5,
      title: "IT",
      budget: 0,
    },
  ];
  const budgetDisplayer = (id, budget) => {
    datas = datas.map((e) => (e.id === id ? { ...e, budget: budget } : e));
    setTotalBudget(datas.reduce((one, two) => one + two.budget, 0));
  };
  return (
    <div>
      <h1 className="display-6 mt-4 mb-2">Allocation</h1>
      <table className="mt-4 table table-hover table-responsive">
        <thead className="table-primary">
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((e) => (
            <TableBudget
              key={e.id}
              id={e.id}
              currency={currency}
              userInput={userInput}
              totalBudget={totalBudget}
              setSpent={setSpent}
              spent={spent}
              budgetDisplayer={budgetDisplayer}
              title={e.title}
            />
          ))}
        </tbody>
      </table>
      {/* <ChangeAllocation currency={currency} budgetDisplayer={budgetDisplayer} datas={datas} userInput={userInput} /> */}
    </div>
  );
};
export default Tracker;
