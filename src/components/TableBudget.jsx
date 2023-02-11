import { TiDelete } from "react-icons/ti";
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const TableBudget = ({
  id,
  totalBudget,
  userInput,
  spent,
  setSpent,
  currency,
  budgetDisplayer,
  title,
}) => {
  const [mbudget, setMbudget] = useState(0);
  const AddMbudget = () => {
    if (totalBudget < userInput && mbudget + 10 <= userInput) {
      setSpent(totalBudget + 10);
      setMbudget(mbudget + 10);
    }
    else{
      alert('Maximum Allocated Budget is more than the remaining')
    }
  };
  const MinusMBudget = () => {
    mbudget - 10 >= 0 && setMbudget(mbudget - 10);
    mbudget && setSpent(totalBudget - 10);
  };
  const ClearBudget = () => {
    setSpent(spent - mbudget);
    setMbudget(0);
  };
  useEffect(() => budgetDisplayer(id, mbudget), [id, budgetDisplayer, mbudget]);
  return (
    <tr>
      <td>{title}</td>
      <td>{`${currency} ${mbudget}`}</td>
      <td>
        <FcPlus size="1.5em" onClick={AddMbudget} />
      </td>
      <td>
        <AiFillMinusCircle size="1.5em" onClick={MinusMBudget} />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={ClearBudget} />
      </td>
    </tr>
  );
};
export default TableBudget;
