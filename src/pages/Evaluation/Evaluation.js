import React from "react";

export default function Evaluation(){
const processedData = [{"A":"a", "Appl":"b", "Cln":"c"}];
    return (
        <div className="RawData">
          
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
              {processedData ? processedData.map((item, index) => (
                <tr key={index} className="left-aligned">
                  <td>{item?.A}</td>
                  <td>{item?.Appl}</td>
                  <td>{item?.Cln}</td>
                  <td>{item?.Component}</td>
                  <td>{item?.Intent}</td>
                  <td>{item?.Mult}</td>
                  <td>{item?.Object}</td>
                  <td>{item?.Object_description}</td>
                  <td>{item?.Package}</td>
                  <td className="bold-text text-color-blue">{item?.Proposal}</td>
                  <td className="right-aligned bold-text text-color-red">
                    {item?.Records}
                  </td>
                  <td>{item?.Sys}</td>
                  <td>{item?.TabCls}</td>
                  <td>{item?.Table}</td>
                  <td>{item?.Table_description}</td>
                </tr>
              )) : "null"}
            </tbody>
          </table>
        </div>
      );
}