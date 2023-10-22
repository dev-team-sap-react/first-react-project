
  function ComputeSum(data) {

    const counts = {};
  
    // Loop through the data
    data.forEach((item) => {
      const table = item.Table;
      const records = parseFloat(item.Records.replaceAll(".", ''));
      if (!isNaN(records)) {
        if (counts[table]) {
          counts[table] += records;
        } else {
          counts[table] = records;
        }
      }
    });
  
    const result = Object.keys(counts).map((table) => ({
      table: table,
      records: counts[table]
    }));

    console.log(result);
  
    return result;
  
  };
  
export default ComputeSum;