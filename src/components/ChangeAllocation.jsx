import { useState, React } from "react";

const ChangeAllocation = ({ currency, userInput, datas, budgetDisplayer }) => {
  const [control, setControl] = useState("");
  const [method, setMethod] = useState("Add");
  const [department, setDepartment] = useState("Choose...");
  const controlHandler = (e) => {
    e.preventDefault();
    e.currentTarget.value >= 0 && setControl(e.currentTarget.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let y = [...datas];
    y = y.filter(i=>i.title === department)[0];
    if (method === 'Add'){
        console.log(datas + " before ")
        console.log('y value is ' + y);
        y.budget+Number(control)<=userInput && 
        budgetDisplayer(y.id,y.budget+Number(control));
        console.log(y.budget+Number(control));
        console.log(datas + " after ")
    }
    else{
        y.budget-Number(control)>=0 && 
        budgetDisplayer(y.id, y.budget - Number(control));
    }
  };

  return (
    <div>
      <h3 className="display-6">Change Allocation</h3>
      <div className="mt-3 row g-2">
        <label className="col input-group-text">Department</label>
        <div className="col dropdown my-auto">
          <button
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            {department}
          </button>
          <ul
            className="dropdown-menu"
            onClick={(e) => setDepartment(e.target.innerText)}
          >
            <li className="dropdown-item">Marketing</li>
            <li className="dropdown-item">Finance</li>
            <li className="dropdown-item">Sales</li>
            <li className="dropdown-item">Human Resource</li>
            <li className="dropdown-item">IT</li>
          </ul>
        </div>
        <label className="col input-group-text">Allocation</label>
        <div className="col dropdown my-auto">
          <button
            className="btn btn-outline-dark dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            {method}
          </button>
          <ul
            className="dropdown-menu"
            onClick={(e) => setMethod(e.target.innerText)}
          >
            <li className="dropdown-item">Add</li>
            <li className="dropdown-item">Reduce</li>
          </ul>
        </div>
        <form className="col form" onSubmit={submitHandler}>
          <div className="input-group">
            <label
              className="input-group-text"
              style={{ backgroundColor: "white", borderRight: "none" }}
            >
              {currency}
            </label>
            <input
              style={{ paddingLeft: "10px", position: "relative" }}
              type="number"
              value={control}
              onChange={controlHandler}
              className="form-control"
            />
          </div>
          <button
            className="d-inline btn btn-primary mt-2 mx-auto"
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChangeAllocation;
