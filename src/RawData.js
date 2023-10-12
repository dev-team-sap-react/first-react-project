
import "./RawData.css";
import React, { useState } from "react";
import Papa from "papaparse";

export default function RawData() {
  const [data, setData] = useState([]);

  function handleFile(e) {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        const parsedData = results.data;

        // Trim strings and convert numbers to fixed format
        const processedData = parsedData.map((item) => {
          const processedItem = {};
          Object.keys(item).forEach((key) => {
            if (typeof item[key] === "string") {
              processedItem[key] = item[key].trim();
            } else if (typeof item[key] === "number") {
              processedItem[key] = item[key].toFixed(2);
            } else {
              processedItem[key] = item[key];
            }
          });
          return processedItem;
        });

        setData(processedData);
        console.log(processedData);
        console.log(processedData[5].Records * 45000000);
        console.log(processedData[5].id);
      },
    });
  }

  return (
    <div className="RawData">
      <input type="file" accept=".csv" onChange={handleFile} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">A</th>
            <th scope="col">Appl</th>
            <th scope="col">Cln</th>
            <th scope="col">Component</th>
            <th scope="col">Intent</th>
            <th scope="col">Mult</th>
            <th scope="col">Object</th>
            <th scope="col">Object description</th>
            <th scope="col">Package</th>
            <th scope="col">Proposal</th>
            <th scope="col">Records</th>
            <th scope="col">Sys</th>
            <th scope="col">TabCIs</th>
            <th scope="col">Table</th>
            <th scope="col">Table_description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="left-aligned">
              <td>{item.A}</td>
              <td>{item.Appl}</td>
              <td>{item.Cln}</td>
              <td>{item.Component}</td>
              <td>{item.Intent}</td>
              <td>{item.Mult}</td>
              <td>{item.Object}</td>
              <td>{item.Object_description}</td>
              <td>{item.Package}</td>
              <td>{item.Proposal}</td>
              <td className="right-aligned bold-text">{item.Records}</td>
              <td>{item.Sys}</td>
              <td>{item.TabCls}</td>
              <td>{item.Table}</td>
              <td>{item.Table_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  // const App = () => {
  //   const [data, setData] = useState([]);

  //   function handleFile(e) {
  //     const file = e.target.files[0];
  //     Papa.parse(file, {
  //       header: true,
  //       complete: function (results) {
  //         const data = [];
  //         const parsedData = JSON.parse(results.data);

  //         Object.keys(parsedData).forEach((key) => {
  //           if (typeof parsedData[key] === "string") {
  //             parsedData[key] = parsedData[key].trim();
  //           }
  //         });
  //         const trimmedData = JSON.stringify(parsedData);

  //         setData(trimmedData);
  //         // Object.keys(parsedData).forEach((key) => {
  //         //   if (typeof parsedData[key] === 'number'){
  //         //     parsedData[key] = parsedData[key].toFixed(2);
  //         //   }
  //         // });

  //         setData(data);
  //         //setData(results.data);
  //         console.log(data[1].Records * 555);
  //         console.log(data);
  //       },
  //     });
  //   }
  //<div>{data[1]*5} Kere Tekrarlandi.</div>

  // return (
  //   <div>
  //     <input type="file" accept=".csv" onChange={handleCSVInputChange} />

  //     {data ? (
  //       <div className="json-container">
  //         <pre>{JSON.stringify(data, null, 2)}</pre>
  //       </div>
  //     ) : (
  //       <p>Please select a CSV file.</p>
  //     )}
  //   </div>
  // );

  // const parsedData = JSON.parse(results.data);

  // Object.keys(parsedData).forEach((key) => {
  //   if (typeof parsedData[key] === "string") {
  //     parsedData[key] = parsedData[key].trim();
  //   }
  // });
  // const trimmedData = JSON.stringify(parsedData);

  // setData(trimmedData);
}
