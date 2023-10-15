import "./RawData.css";
import React, { useState } from "react";
import Papa from "papaparse";

export default function RawData({ processedData, setProcessedData }) {
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
        setProcessedData(processedData);
        setData(processedData);
        console.log(processedData);
        console.log(processedData[5].Records * 45000000);
        console.log(processedData[5].id);
      },
    });
  }

  return (
    <div className="RawData">
      <input
        type="file"
        accept=".csv"
        onChange={handleFile}
      />
      <table className="table body">
        <thead className="text-font-xlarge">
          <tr className="">
            <th scope="col">A</th>
            <th scope="col">Appl</th>
            <th scope="col">Cln</th>
            <th scope="col">Component</th>
            <th scope="col">Intent</th>
            <th scope="col">Mult</th>
            <th scope="col">Object</th>
            <th scope="col">Object description</th>
            <th scope="col">Package</th>
            <th scope="col" className="text-color-blue">
              Proposal
            </th>
            <th scope="col" className="right-aligned text-color-red">
              Records
            </th>
            <th scope="col">Sys</th>
            <th scope="col">TabCIs</th>
            <th scope="col">Table</th>
            <th scope="col">Table_description</th>
          </tr>
        </thead>
        <tbody className="table body">
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
              <td className="bold-text text-color-blue">{item.Proposal}</td>
              <td className="right-aligned bold-text text-color-red">
                {item.Records}
              </td>
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


}
