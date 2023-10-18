import { Legend, PieChart, Pie, Cell, LabelList} from "recharts";

const Recharts = () => {

const pieData = [
    {recordName:"A", count:30, },
    {recordName:"B", count:40, },
    {recordName:"c", count:55, } , 
    {recordName:"d", count:78, } , 
    {recordName:"e", count:43, } , 
    {recordName:"f", count:23, } , 
    {recordName:"g", count:125, } ,  
    {recordName:"h", count:43, } , 
    {recordName:"i", count:23, } , 
    {recordName:"j", count:125, } ,  
    {recordName:"k", count:43, } , 
    {recordName:"l", count:23, } , 
    {recordName:"m", count:125, } ,  
];
//const pieData = {"A":30, "B":40, "C":35, "D":50, "E":49, "F":60, "G":70, "H":91, "J":125, "K":30, "L":45, "M":65};

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
                dataKey="count"
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