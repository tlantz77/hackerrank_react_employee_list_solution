import React from 'react';
import './App.css';

import EmployeesList from './components/EmployeesList';

const App = ({employees}) => {
    return (
      <div className="App">
        <EmployeesList employees={employees} />
      </div>
    );
}

export default App;
