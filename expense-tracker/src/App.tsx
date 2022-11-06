import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShowData from './components/ShowList';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<ExpenseTracker onTrue={()=>{}} onClose={()=>{}}/>}/>
          <Route path='/' element={<ShowData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;