import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import BudgetList from './components/BudgetList';
import Footer from './components/Footer';
const App = () =>{
  return(
    <>
    <div className='container'>
      <h1 className='mt-3 display-5'>
          Company's Budget Allocation
      </h1>
      <BudgetList/>
    </div>
    <Footer/>
    </>
  );
}
export default App;