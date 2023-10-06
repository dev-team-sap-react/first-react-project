import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleExcelInputChange = async (e) => {
    const files = e.target.files[0];
    if (files) {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          const binaryString = e.target.result;
          const workbook = XLSX.read(binaryString, {type : "binary"});
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonDataXslx = XLSX.utils.sheet_to_json(sheet);
          setJsonData(jsonDataXslx);
          console.log(jsonData);
          console.log(workbook);
          console.log(sheetName);
          console.log(sheet);
        };
        reader.readAsBinaryString(files);

      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    }
  };

  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => handleExcelInputChange(e)}
      />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sys</th>
            <th scope="col">Cln</th>
            <th scope="col">Table</th>
            <th scope="col">Appl</th>
            <th scope="col">TM</th>
            <th scope="col">Object</th>
            <th scope="col">Object description</th>
            <th scope="col">Records</th>
            <th scope="col">Relevant</th>
          </tr>
        </thead>
        <tbody>
          {jsonData ? (
            jsonData.map((item, index) => (
              <tr key={index}>
                <td>{item.Sys}</td>
                <td>{item.Cln}</td>
                <td>{item.Table}</td>
                <td>{item.Appl}</td>
                <td>{item.TM}</td>
                <td>{item.Object}</td>
                <td>{item.Object}</td>
                <td>{item.description}</td>
                <td>{item.Records}</td>
                <td>{item.Relevant}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="15">Please upload a readable data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
