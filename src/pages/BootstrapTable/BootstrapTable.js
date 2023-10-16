import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";


const Table = ()=> {
 const [selectedRows, setSelectedRows] = useState([]);

 const importedData = [
    {name:"Aa", description:"Dcgh", email:"aa@email.com", number:5, year:2001, title:"Title-big"},
    {name:"Bb", description:"sdf", email:"bb@email.com", number:3, year:2004, title:"Title-big"},
    {name:"Cc", description:"swe", email:"cc@email.com", number:4, year:2006, title:"Title-big"},

];

const columns = [
    {
        dataField:"name",
        text:"Name",
        filter:textFilter({

        })
    },
    {
        dataField:"description",
        text:"Description",
        filter:textFilter({

        })
    },
    {
        dataField:"email",
        text:"Email",
        filter:textFilter({

        })
    },
    {
        dataField:"number",
        text:"Number",
        filter:textFilter({

        })
    },
    {
        dataField:"year",
        text:"Year",
        filter:textFilter({

        })
    },
    {
        dataField:"title",
        text:"Title",
        filter:textFilter({

        })
    },

];

 const selectRow = {
    mode:"checkbox",
    text:"Select",
    clickToSelect:true,
    selected: selectedRows.map(row => row.id),
    onSelect: (row, isSelect) => {
        const id = row.id;
        const updatedRow = importedData.find(row => row.id === id);
        if(isSelect) {
            updatedRow.selected = true;
        } else {
            updatedRow.selected = false;
        }
        setSelectedRows(importedData.filter(row => row.selected));


    },
    onSelectAll: (isSelect) => {
        if (isSelect) {
            setSelectedRows(importedData);
        } else {
            setSelectedRows([]);
        }
    },
 };

 return (
    <div>
        <BootstrapTable
        keyField="id"
        data={importedData}
        columns={columns}
        filter={filterFactory()}
        selectRow={selectRow}
        headerClass="table-header"
        bootstrap4
        
        />
        <button>Show in Table</button>
    </div>
 )
};

export default Table;