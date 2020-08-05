import React, {useState, Fragment} from 'react';

const EmployeesList = ({employees}) => {
    const [filter, setFilter] = useState('');

    return (
      <Fragment>
        <div className="controls">
          <input 
            value={filter}
            onChange={e => setFilter(e.target.value)} 
            type="text" 
            className="filter-input"
            data-testid="filter-input"
          />
        </div>
        <ul className="employees-list">
          { employees.map(employee => {
              if (employee.name.includes(filter)) {
                return <li key={employee.name} data-testid="employee">{employee.name}</li>
              }
            })
          }
        </ul>
      </Fragment>
    );  
}

export default EmployeesList;
