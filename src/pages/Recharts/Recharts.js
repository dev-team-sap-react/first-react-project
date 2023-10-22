import { Legend, PieChart, Pie, Cell, LabelList} from "recharts";
import React, {useContext} from "react";
import { AppContext } from "../../AppContext";
const Recharts = () => {
  const {ComputeSum} = useContext(AppContext);
  const data = [
    {"Table":"CE1000", "Records":"30.000"}, 
    {"Table":"CE1001", "Records":"40.111.111"}, 
    {"Table":"CE1000", "Records":"30.000"}, 
    {"Table":"CE1000", "Records":"30.000"}, 
    {"Table":"CE1001", "Records":"30"}, 
    {"Table":"CE1000", "Records":"333"}, 
    {"Table":"CE1002", "Records":"30.000.111"}, 
    {"Table":"CE1004", "Records":"30.000"}, 
    {"Table":"CE1000", "Records":"30.000"}, 
    {"Table":"CE1003", "Records":"30.000"}, 
    {"Table":"CE1000", "Records":"30.000"}
  ];
  const pieData = ComputeSum(data);
  console.log(pieData);
const COLORS = [
    "#0088fe",
    "#00c49f",
    "#ffbb28",
    "#ff8042",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "#ffdd33",
    "#34ed23",
    "#d34efd",
    "#gf5643",
    "#453f5c",
    "#67ddee",

]

return (
    <div className="white-box status-container flex-row d-md-flex align-items-center">
        <div className="chart text-center">
        <PieChart width={400} height={400}>
            <Pie
                paddingAngle={1}
                minAngle={1}
                data={pieData}
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="records"
                nameKey="RecordName"
                label
            >
                <Legend/>
                <LabelList
                    dataKey="RecordName"
                    nameKey="RecordName"
                    position="insideTop"
                    angle="45"
                />
                {pieData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index%COLORS.length]}
                    />
                ))}

            </Pie>

        </PieChart>
        
    </div>
            {
                pieData.length ? (
                  <div className="d-flex border flex-wrap rounded p-4   ">
                {pieData.map((entry, index) => (
                  <div className=" d-flex align-items-center m-3" key={index}>
                    <span
                      className="rounded-circle shadow  mr-2"
                      style={{
                        backgroundColor: COLORS[index % COLORS.length],
                        width: "25px",
                        height: "25px",
                      }}
                    ></span>
                    <div className="legent-text">{entry.recordName}</div>
                  </div>
                ))}
              </div>
                ) : "No submissions"
              }
            </div>

);
};


export default Recharts;