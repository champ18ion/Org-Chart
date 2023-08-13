import React from "react";

const Employee = ({ fullName, designation }) => {
  return (
    fullName !== "company" && ( <div>
      <div className="emp">
        <div>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/circled-user-male-skin-type-7--v1.png"
            alt="circled-user-male-skin-type-7--v1"
          />
        </div>

        <div className="emp-info">
          <h3>{fullName}</h3>
          <h6>{designation}</h6>
        </div>
      </div>
    </div>)
   
  );
};

export default Employee;
