import React, { useState } from 'react';
import Header from './component/Header';
import Section from './component/Section';




const ArmiiyaQabulForm = () => {
  const [shaxslar, setShaxslar] = useState([
    { id: 1, fisrt_name: 'John', last_name: "Smith", age: 12, dept_number: 100, city: 'Chicago', state: 'IL', salary: 1000 },
    { id: 2, fisrt_name: 'Jane', last_name: "Doe", age: 35, dept_number: 100, city: 'Phoenix', state: 'IL', salary: 51000 },
    { id: 3, fisrt_name: 'Mary', last_name: "Smith", age: 10, dept_number: 200, city: 'Chicago', state: 'IL', salary: 2500 },
    { id: 4, fisrt_name: 'George', last_name: "Edwards", age: 5, dept_number: 300, city: 'Phoenix', state: 'IL', salary: 3000 },
    { id: 5, fisrt_name: 'Abdulloh', last_name: "Gulomov", age: 21, dept_number: 100, city: 'Andijan', state: 'IL', salary: 3000 },
    { id: 6, fisrt_name: 'Abdulaziz', last_name: "Mansurovich", age: 18, dept_number: 400, city: 'Tashkent', state: 'IL', salary: 3000 },
    { id: 7, fisrt_name: 'Sardor', last_name: "Mannopov", age: 30, dept_number: 100, city: 'Qashqadarya', state: 'IL', salary: 3000 },
  ]);

  const qabulQilish = () => {
    const yangiShaxslar = shaxslar.filter((shaxs) => shaxs.age >= 18);
    setShaxslar(yangiShaxslar);
  };

  return (
    <div>
      <button className="btn btn-info" onClick={qabulQilish}>Armiiyaga qabul</button>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Dept_number</th>
            <th>City</th>
            <th>State</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {shaxslar.map((shaxs, index) => (
            <tr key={index}>
              <td>{shaxs.id}</td>
              <td>{shaxs.fisrt_name}</td>
              <td>{shaxs.last_name}</td>
              <td>{shaxs.age}</td>
              <td>{shaxs.dept_number}</td>
             
              <td>{shaxs.city}</td>
              <td>{shaxs.state}</td>
              <td>{shaxs.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Header/>
      <Section/>




    </div>
  );
};

export default ArmiiyaQabulForm;



