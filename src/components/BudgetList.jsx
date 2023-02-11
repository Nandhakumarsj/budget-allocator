import { useEffect, useState, React } from "react";
import Offside from "./OffsideAlert";
import Tracker from "./Tracker";

const BudgetList = () => {
  const [userInput, setUserInput] = useState(0);
  const [spent, setSpent] = useState(0);
  const [remain, setRemain] = useState(0);
  const [currency, setCurrency] = useState("$");
  const [showAlert, setShowAlert] = useState({message:'', heading:'' ,thing:false});

  const InputHandler = (e) => {
    e.preventDefault();
    if (spent <= e.currentTarget.value && e.currentTarget.value <= 20000) {
      setUserInput(e.currentTarget.value);
      setShowAlert({message:'', heading:'', thing:false});
    } else if (e.currentTarget.value > 20000) {
      setShowAlert({message:`Value cannot be greater than  ${currency} 20000`, heading:'Maximum Budget Reached.', thing:true});
    }else if(e.currentTarget.value === '-1'){
      setShowAlert({message:'🙄 Budget cannot be lesser than 0', heading:'Minimum Budget Reached.', thing:true});
    }
     else {
      alert("Value cannot be lower than spending.");
    }
  };

  const SelectionHandler = (e) => setCurrency(e.target.innerText[0]);
  useEffect(() => setRemain(userInput - spent), [userInput, spent]);

  return (
    <>
      <div className="row mt-5 justify-content-evenly">
        <p className="row col-md-3 alert alert-warning">
          {`Budget: ${currency} ${userInput || 0}`}
          <input
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            data-bs-title='Type only postive integers below the budget of 20000'
            value={userInput}
            type="number"
            placeholder="Enter the Budget"
            onChange={InputHandler}
            className="mx-auto mt-2 form-control w-50"
          />
        </p>
        <p className="col-md-3 alert alert-success">{`Remaining: ${currency} ${remain}`}</p>
        <p className="col-md-3 alert alert-info">{`Spent so far: ${currency}  ${spent}`}</p>
        <div className="dropdown col-md-2">
          <button
            type="button"
            className="btn btn-outline-success dropdown-toggle"
            data-bs-auto-close="inside"
            data-bs-toggle="dropdown"
          >{`Currency (${currency})`}</button>
          <ul className="dropdown-menu bg-success" onClick={SelectionHandler}>
            <li className="dropdown-item">{`$ Dollor`}</li>
            <li className="dropdown-item">{`£ Pound`}</li>
            <li className="dropdown-item">{`€ Euro`}</li>
            <li className="dropdown-item">{`₹ Ruppee`}</li>
          </ul>
        </div>
        <hr className="hr m-auto mt-4" />
        <Tracker
          spent={spent}
          remain={remain}
          userInput={userInput}
          currency={currency}
          setSpent={setSpent}
        />
      </div>
      {showAlert.thing ? <Offside altText={showAlert.message} altHead={showAlert.heading} /> : ''}
    </>
  );
};
export default BudgetList;
