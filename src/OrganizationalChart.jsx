import React, { useState } from "react";
import Employee from "./Employee";

const OrganizationalChart = ({ employees, level = 0 }) => {
  const initialVisibleBranches = employees.map((employee) => employee.email);
  const [visibleBranches, setVisibleBranches] = useState(initialVisibleBranches);

  const toggleBranch = (email) => {
    if (visibleBranches.includes(email)) {
      setVisibleBranches(visibleBranches.filter((e) => e !== email));
    } else {
      setVisibleBranches([...visibleBranches, email]);
    }
  };

  return (
    <div className="organizational-chart">
      {employees.map((employee) => (
        <div key={employee.email} className={`node level-${level}`}>
          <div className="clickable-node">
            <div className="node-icon" onClick={() => toggleBranch(employee.email)}>
              <img
                width="24"
                height="24"
                src={
                  visibleBranches.includes(employee.email)
                    ? "https://img.icons8.com/material-outlined/24/000000/hide.png"
                    : "https://img.icons8.com/material-outlined/24/000000/visible.png"
                }
                alt="hide-show-icon"
              />
              <span className="employee-count">{employee.employees ? employee.employees.length : 0}</span>
            </div>
            <Employee
              fullName={employee.fullName}
              designation={employee.designation}
              email={employee.email}
            />
          </div>
          {employee.employees && (
            <div
              className="sub-tree"
              style={{
                display: visibleBranches.includes(employee.email)
                  ? "block"
                  : "none",
              }}
            >
              <OrganizationalChart
                employees={employee.employees}
                level={level + 1}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrganizationalChart;
