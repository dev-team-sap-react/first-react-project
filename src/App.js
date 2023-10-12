import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import RawData from "./RawData";
import Home from "./Home";
import Evaluation from "./Evaluation";
import NoPage from "./NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rawdata" element={<RawData />} />
            <Route path="/evaluation" element={<Evaluation />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;

//import JSON from "json";

// @ts-check

// function trimConvertDataToJson(e) {
//   //let dataToTrim = e;
//   let lines = e.split("\n");
//   let headers = lines[0].split(",");
//   const result = [];

//   for (let i = 1; i < lines.length; i++) {
//     const obj = {};
//     const currentLine = lines[i].split(",");
//     for (let j = 1; j < headers.length; j++) {
//       obj[headers[j].trim()] = currentLine[j].trim();
//     }
//     result.push(obj);
//   }

//   return result;
// }
// const handleCSVInputChange = (event) => {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = (e) => {
//     const csvData = e.target.result;
//     const jsonData = trimConvertDataToJson(csvData);
//     setData(jsonData);
//     console.log(data);
//   };

//   reader.readAsText(file);
// };
