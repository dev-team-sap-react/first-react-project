const FilteredArray = function (processedData, filter) {
const filteredArray = processedData.filter((item => item.Table.startsWith(filter)));
return filteredArray
}

export default FilteredArray;